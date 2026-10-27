import React, { useState, useEffect } from 'react';
import { actionPotentialStagesData } from '../data/neuroData';
import { 
  Zap, 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  ShieldAlert, 
  Activity, 
  ArrowRight,
  Gauge,
  CheckCircle2
} from 'lucide-react';

interface TimelineViewProps {
  searchQuery?: string;
}

export const TimelineView: React.FC<TimelineViewProps> = ({ searchQuery = '' }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const currentStage = actionPotentialStagesData[currentStepIndex];

  // Auto-play interval
  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStepIndex(prev => (prev + 1) % actionPotentialStagesData.length);
      }, 2600);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentStepIndex(prev => Math.min(prev + 1, actionPotentialStagesData.length - 1));
  };

  const handlePrev = () => {
    setCurrentStepIndex(prev => Math.max(prev - 1, 0));
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
    setIsPlaying(false);
  };

  // SVG points for graph curve
  // Points: (0, -70), (1, -60), (2, -50), (3, +35), (4, -55), (5, -82), (6, -70)
  // Let SVG coordinates be: width 600, height 200
  // Voltage range: +40 mV to -90 mV (range = 130 mV)
  // Mapping formula: y = 20 + ((40 - V) / 130) * 160
  const getCoordinates = (stageIdx: number, v: number) => {
    const x = 50 + stageIdx * 82;
    const y = 20 + ((40 - v) / 130) * 160;
    return { x, y };
  };

  const points = actionPotentialStagesData.map((stage, idx) => getCoordinates(idx, stage.voltageNum));
  const pathD = points.reduce((acc, curr, idx) => {
    if (idx === 0) return `M ${curr.x} ${curr.y}`;
    // Bezier curve
    const prev = points[idx - 1];
    const cpX = (prev.x + curr.x) / 2;
    return `${acc} C ${cpX} ${prev.y}, ${cpX} ${curr.y}, ${curr.x} ${curr.y}`;
  }, '');

  const currentCoords = points[currentStepIndex];

  return (
    <section id="view-timeline" className="block font-sans space-y-6">
      
      {/* Intro Header */}
      <div className="bg-[#fbf8f5] p-4 sm:p-5 rounded-2xl border border-[#d4cbc2] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-[#292420]">
            Ciclo del Potencial de Acción & Conducción
          </h2>
          <p className="text-xs text-[#49423c] mt-0.5">
            Secuencia iónica: reposo (-70 mV), umbral (-50 mV), despolarización, repolarización, hiperpolarización y bomba NaKa.
          </p>
        </div>

        {/* Player Controls */}
        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-[#d4cbc2] shadow-2xs">
          <button
            onClick={handlePrev}
            disabled={currentStepIndex === 0}
            className="p-1.5 hover:bg-[#f5efe9] disabled:opacity-30 rounded-lg text-[#231f1c] cursor-pointer"
            title="Fase anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg flex items-center gap-1.5 cursor-pointer ${
              isPlaying
                ? 'bg-amber-600 text-white'
                : 'bg-[#2b553c] text-white hover:bg-[#1f3f2c]'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span>Pausar</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Animar</span>
              </>
            )}
          </button>

          <button
            onClick={handleNext}
            disabled={currentStepIndex === actionPotentialStagesData.length - 1}
            className="p-1.5 hover:bg-[#f5efe9] disabled:opacity-30 rounded-lg text-[#231f1c] cursor-pointer"
            title="Siguiente fase"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleReset}
            className="p-1.5 hover:bg-[#f5efe9] rounded-lg text-[#787169] hover:text-[#231f1c] cursor-pointer ml-1"
            title="Reiniciar a reposo"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Interactive Stage Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Interactive Oscilloscope Curve */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-parchment flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#d4cbc2]/60 mb-2">
              <span className="text-xs font-bold text-[#787169] uppercase tracking-wider flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-[#944920]" />
                Curva de Voltaje de Membrana (mV)
              </span>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#fdf3ee] text-[#944920] border border-[#944920]/20">
                Voltaje Actual: {currentStage.voltage}
              </span>
            </div>

            {/* SVG Plot */}
            <div className="w-full overflow-x-auto py-2">
              <svg viewBox="0 0 600 220" className="w-full h-52 select-none">
                {/* Horizontal grid lines */}
                {/* +30 mV line */}
                <line x1="40" y1="32" x2="560" y2="32" stroke="#e5ded6" strokeDasharray="3 3" />
                <text x="35" y="36" textAnchor="end" fontSize="10" fill="#787169" fontFamily="monospace">+30 mV</text>

                {/* 0 mV line */}
                <line x1="40" y1="69" x2="560" y2="69" stroke="#d4cbc2" strokeWidth="1" strokeDasharray="2 2" />
                <text x="35" y="73" textAnchor="end" fontSize="10" fill="#787169" fontFamily="monospace">0 mV</text>

                {/* -50 mV threshold line */}
                <line x1="40" y1="130" x2="560" y2="130" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 4" />
                <text x="35" y="134" textAnchor="end" fontSize="10" fill="#d97706" fontWeight="bold" fontFamily="monospace">Umbral -50</text>

                {/* -70 mV resting potential line */}
                <line x1="40" y1="155" x2="560" y2="155" stroke="#2b553c" strokeWidth="1.5" />
                <text x="35" y="159" textAnchor="end" fontSize="10" fill="#2b553c" fontWeight="bold" fontFamily="monospace">Reposo -70</text>

                {/* -80 mV hyperpolarization line */}
                <line x1="40" y1="170" x2="560" y2="170" stroke="#9333ea" strokeDasharray="2 2" />
                <text x="35" y="174" textAnchor="end" fontSize="10" fill="#9333ea" fontFamily="monospace">-82 mV</text>

                {/* Curve Path */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="#944920"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Stage Dots */}
                {points.map((pt, i) => (
                  <g key={i} onClick={() => setCurrentStepIndex(i)} className="cursor-pointer">
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={i === currentStepIndex ? 7 : 4}
                      fill={i === currentStepIndex ? "#944920" : "#ffffff"}
                      stroke="#944920"
                      strokeWidth={i === currentStepIndex ? 3 : 2}
                    />
                    <text
                      x={pt.x}
                      y={205}
                      textAnchor="middle"
                      fontSize="9"
                      fontWeight={i === currentStepIndex ? "bold" : "normal"}
                      fill={i === currentStepIndex ? "#944920" : "#787169"}
                    >
                      Paso {i + 1}
                    </text>
                  </g>
                ))}

                {/* Current Active Indicator Pulse */}
                <circle
                  cx={currentCoords.x}
                  cy={currentCoords.y}
                  r="12"
                  fill="none"
                  stroke="#ffb692"
                  strokeWidth="2"
                  className="animate-ping"
                />
              </svg>
            </div>
          </div>

          {/* Stepper Dots Bar */}
          <div className="pt-3 border-t border-[#d4cbc2]/60 flex items-center justify-between gap-1 overflow-x-auto">
            {actionPotentialStagesData.map((stage, idx) => (
              <button
                key={stage.step}
                onClick={() => setCurrentStepIndex(idx)}
                className={`px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                  currentStepIndex === idx
                    ? 'bg-[#2b553c] text-white shadow-2xs'
                    : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ede3d8]'
                }`}
              >
                <span>{stage.step}.</span>
                <span className="hidden sm:inline">{stage.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Detailed Stage Inspector & Bioelectric Mechanisms */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-parchment flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${currentStage.badgeColor}`}>
                Paso {currentStage.step} de 7
              </span>
              <span className="text-sm font-mono font-bold text-[#292420]">
                {currentStage.voltage}
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#292420] mb-3">
              {currentStage.name}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#38332e] leading-relaxed mb-4 bg-[#fbf8f5] p-3.5 rounded-xl border border-[#d4cbc2]/70">
              {currentStage.description}
            </p>

            {/* Channels & Ion Movement */}
            <div className="space-y-2.5 text-xs mb-4">
              <div className="p-3 bg-[#eef4f8] rounded-xl border border-[#205b76]/20">
                <span className="font-bold text-[#205b76] block text-[11px] uppercase tracking-wider mb-0.5">
                  Movimiento de Iones:
                </span>
                <span className="text-[#133c4e] leading-normal block">
                  {currentStage.ionMovement}
                </span>
              </div>

              <div className="p-3 bg-[#fdf7ea] rounded-xl border border-amber-300/70">
                <span className="font-bold text-[#704812] block text-[11px] uppercase tracking-wider mb-0.5">
                  Estado de Canales y Compuertas:
                </span>
                <span className="text-[#52330a] leading-normal block">
                  {currentStage.channelsState}
                </span>
              </div>
            </div>

            {/* Analogy / Teacher's rule */}
            <div className="bg-[#f4f7f5] p-3 rounded-xl border border-[#2b553c]/20 text-xs text-[#2b553c]">
              💡 <strong>Regla mnemotécnica de clase:</strong> {currentStage.analogyOrNote}
            </div>
          </div>
        </div>

      </div>

      {/* Deep Dive: Las 2 Energías & La Bomba NaKa */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Card 1: Distribución Iónica en Reposo (-70 mV) */}
        <div className="bg-white p-5 rounded-2xl border border-[#d4cbc2] shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-7 h-7 rounded-lg bg-[#2b553c]/10 text-[#2b553c] flex items-center justify-center font-bold text-xs">
              -70
            </span>
            <h4 className="text-sm font-bold text-[#292420]">
              ¿Por qué el interior es negativo (-70 mV)?
            </h4>
          </div>
          <p className="text-xs text-[#49423c] leading-relaxed mb-3">
            Adentro de la neurona abundan los <strong>aniones proteicos (A⁻)</strong> con carga negativa. Son moléculas proteicas "gordas, gordas" que jamás pueden salir.
          </p>
          <div className="space-y-1.5 text-[11px] bg-[#fbf8f5] p-2.5 rounded-lg border border-[#d4cbc2]">
            <p>• <strong>Interior:</strong> Muchos A⁻ (negativos) + Potasio (K⁺ positivo). Neto = <strong>Negativo (-70 mV)</strong>.</p>
            <p>• <strong>Exterior:</strong> Mucho Sodio (Na⁺ positivo) + Cloro (Cl⁻ negativo). Neto = <strong>Positivo</strong>.</p>
          </div>
        </div>

        {/* Card 2: Las 2 Fuerzas en Conflicto */}
        <div className="bg-white p-5 rounded-2xl border border-[#d4cbc2] shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-7 h-7 rounded-lg bg-[#944920]/10 text-[#944920] flex items-center justify-center font-bold text-xs">
              ⚡
            </span>
            <h4 className="text-sm font-bold text-[#292420]">
              Las 2 Energías en Conflicto
            </h4>
          </div>
          <div className="space-y-2 text-xs text-[#49423c] leading-relaxed">
            <div className="p-2 bg-[#fdf3ee] rounded-lg border border-[#944920]/20">
              <strong className="text-[#944920]">1. Gradiente Eléctrico:</strong> Cargas iguales se repelen y opuestas se atraen. El Sodio (Na⁺) positivo se siente locamente atraído por los aniones proteicos negativos internos.
            </div>
            <div className="p-2 bg-[#f0f6f9] rounded-lg border border-[#205b76]/20">
              <strong className="text-[#205b76]">2. Gradiente de Concentración:</strong> Busca igualar cantidades adentro y afuera. El Sodio quiere entrar desesperadamente porque casi no hay dentro.
            </div>
          </div>
        </div>

        {/* Card 3: La Bomba NaKa */}
        <div className="bg-[#fdf7ea] p-5 rounded-2xl border border-amber-300 shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-7 h-7 rounded-lg bg-amber-200 text-[#704812] flex items-center justify-center font-bold text-xs">
              NaKa
            </span>
            <h4 className="text-sm font-bold text-[#704812]">
              La Bomba Sodio/Potasio (Bomba NaKa)
            </h4>
          </div>
          <p className="text-xs text-[#52330a] leading-relaxed mb-3">
            Tras la salida de potasio de más ("encaprichado"), la neurona cae en <strong>hiperpolarización (-82 mV)</strong>.
          </p>
          <div className="p-3 bg-white rounded-xl border border-amber-300 text-xs">
            <span className="font-bold text-[#704812] block mb-1">
              Fórmula de Oro para el Examen:
            </span>
            <div className="flex items-center justify-between font-mono font-bold text-[#292420] text-sm">
              <span className="text-red-700">3 Na+ HACIA AFUERA</span>
              <span>⇄</span>
              <span className="text-blue-700">2 K+ HACIA ADENTRO</span>
            </div>
            <p className="text-[10px] text-[#787169] mt-1.5">
              Restaura la carga neta negativa de reposo en -70 mV consumiendo energía celular.
            </p>
          </div>
        </div>

      </div>

      {/* Conducción Saltatoria en Nodos de Ranvier */}
      <div className="bg-white rounded-2xl border border-[#d4cbc2] p-4 sm:p-5 shadow-xs">
        <h4 className="text-sm font-bold text-[#292420] flex items-center gap-2 mb-1">
          <Sparkles className="w-4 h-4 text-[#2b553c]" />
          Conducción Saltatoria: Nodos de Ranvier vs Axón Amielínico
        </h4>
        <p className="text-xs text-[#49423c] leading-relaxed">
          En un <strong>axón mielinizado</strong>, la mielina actúa como aislante graso: el intercambio iónico de entrada de sodio y salida de potasio <strong>sólo ocurre en los Nodos de Ranvier</strong> (espacios desmielinizados entre segmentos), por lo que el impulso se propaga rápidamente por saltos. En un axón amielínico, el intercambio debe ocurrir milímetro a milímetro a lo largo de toda la membrana, siendo mucho más lento.
        </p>
      </div>

    </section>
  );
};
