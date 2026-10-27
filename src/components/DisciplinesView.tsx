import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  Activity, 
  ShieldCheck, 
  Check, 
  ArrowRight,
  Zap,
  Split,
  Eye,
  Cpu,
  BookmarkCheck,
  AlertCircle
} from 'lucide-react';
import { 
  neuroSystemsData, 
  synapseVariantsData 
} from '../data/neuroData';
import { NeuroSystem } from '../types';

export const DisciplinesView: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'neurona' | 'tipos' | 'glia' | 'sinapsis' | 'sistemas'>('neurona');
  const [selectedSystem, setSelectedSystem] = useState<NeuroSystem>(neuroSystemsData[0]);

  return (
    <section id="view-disciplines" className="block space-y-8 font-sans">
      
      {/* 1. Header & Section Sub-Tabs */}
      <div className="bg-white rounded-2xl border border-[#d4cbc2] p-4 sm:p-5 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[#292420]">
              Estructuras, Glía, Sinapsis & Sistemas
            </h2>
            <p className="text-xs text-[#787169] mt-0.5">
              Morfología • Clasificaciones • Neuroglia • Sinapsis • 4 Sistemas
            </p>
          </div>

          {/* Subtab Selector */}
          <div className="flex items-center gap-1.5 bg-[#f5efe9] p-1.5 rounded-xl border border-[#d4cbc2]/70 flex-wrap">
            <button
              onClick={() => setActiveSubTab('neurona')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'neurona'
                  ? 'bg-[#2b553c] text-white shadow-2xs'
                  : 'text-[#49423c] hover:bg-[#ede3d8]'
              }`}
            >
              <span>1. La Neurona</span>
            </button>
            <button
              onClick={() => setActiveSubTab('tipos')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'tipos'
                  ? 'bg-[#1d5e68] text-white shadow-2xs'
                  : 'text-[#49423c] hover:bg-[#ede3d8]'
              }`}
            >
              <span>2. Tipos de Neuronas</span>
            </button>
            <button
              onClick={() => setActiveSubTab('glia')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'glia'
                  ? 'bg-[#8a4b18] text-white shadow-2xs'
                  : 'text-[#49423c] hover:bg-[#ede3d8]'
              }`}
            >
              <span>3. Glía / Neuroglia</span>
            </button>
            <button
              onClick={() => setActiveSubTab('sinapsis')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'sinapsis'
                  ? 'bg-[#205b76] text-white shadow-2xs'
                  : 'text-[#49423c] hover:bg-[#ede3d8]'
              }`}
            >
              <span>4. Sinapsis & Receptores</span>
            </button>
            <button
              onClick={() => setActiveSubTab('sistemas')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'sistemas'
                  ? 'bg-[#436d53] text-white shadow-2xs'
                  : 'text-[#49423c] hover:bg-[#ede3d8]'
              }`}
            >
              <span>5. Los 4 Sistemas</span>
            </button>
          </div>
        </div>
      </div>

      {/* SUBTAB 1: LA NEURONA & MORFOLOGÍA */}
      {activeSubTab === 'neurona' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-[#d4cbc2] p-6 shadow-parchment">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#2b553c]/10 text-[#2b553c] flex items-center justify-center font-bold text-sm">
                01
              </span>
              <div>
                <h3 className="text-lg font-bold text-[#292420]">
                  La Neurona: Unidad Anatómica y Funcional
                </h3>
                <p className="text-xs text-[#787169]">
                  "La unidad más chiquita que hace la chamba en el sistema nervioso"
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {/* Soma */}
              <div className="bg-[#fbf8f5] rounded-xl border border-[#d4cbc2] p-4 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#2b553c] uppercase tracking-wider block mb-1">
                    Centro Metabólico
                  </span>
                  <h4 className="text-base font-bold text-[#292420] mb-2">Soma o Cuerpo</h4>
                  <p className="text-xs text-[#49423c] leading-relaxed">
                    Contiene el <strong>núcleo celular</strong>, el citoplasma y los orgánulos que sintetizan proteínas y neurotransmisores.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#d4cbc2]/50 text-[11px] text-[#704812] bg-[#fdf7ea] p-2 rounded">
                  📌 <strong>Regla de clase:</strong> Siempre alberga el núcleo neuronal.
                </div>
              </div>

              {/* Dendritas */}
              <div className="bg-[#fbf8f5] rounded-xl border border-[#d4cbc2] p-4 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#1d5e68] uppercase tracking-wider block mb-1">
                    Recepción de Señales
                  </span>
                  <h4 className="text-base font-bold text-[#292420] mb-2">Dendritas & Espinas</h4>
                  <p className="text-xs text-[#49423c] leading-relaxed">
                    Típicamente <strong>absorben la información</strong> proveniente de otras neuronas.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#d4cbc2]/50 text-[11px] text-[#133c4e] bg-[#eef4f8] p-2 rounded">
                  ⚡ <strong>Bajo alta estimulación:</strong> Desarrollan <strong>espinas dendríticas</strong> para ampliar la superficie de contacto y activación.
                </div>
              </div>

              {/* Axón */}
              <div className="bg-[#fbf8f5] rounded-xl border border-[#d4cbc2] p-4 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#944920] uppercase tracking-wider block mb-1">
                    Emisión y Transmisión
                  </span>
                  <h4 className="text-base font-bold text-[#292420] mb-2">Axón & Conducción</h4>
                  <p className="text-xs text-[#49423c] leading-relaxed">
                    Típicamente <strong>libera y conduce información</strong>. Generalmente mielinizado. Concluye en el botón terminal (pie axónico).
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#d4cbc2]/50 text-[11px] text-[#54210a] bg-[#fdf3ee] p-2 rounded">
                  🚀 <strong>Bajo sobre-estimulación:</strong> El axón puede <strong>ramificarse</strong> para alcanzar múltiples neuronas diana.
                </div>
              </div>
            </div>

            {/* Flujo de la señal */}
            <div className="mt-4 bg-[#fbf8f5] border border-[#d4cbc2] rounded-xl p-3 text-xs text-[#49423c]">
              <strong>Flujo de la señal:</strong> Recepción en dendritas/soma &rarr; integración en cono axónico &rarr; conducción en axón &rarr; liberación de neurotransmisores en botones terminales.
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 2: TIPOS DE NEURONAS */}
      {activeSubTab === 'tipos' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-[#d4cbc2] p-6 shadow-parchment">
            <h3 className="text-lg font-bold text-[#292420] mb-1">
              Clasificaciones de las Neuronas en Clase
            </h3>
            <p className="text-xs text-[#787169] mb-6">
              Las 5 taxonomías dictadas en clase según forma, función, neurotransmisor, longitud de axón y prolongaciones.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* 1. Según su forma */}
              <div className="bg-[#fbf8f5] p-4 rounded-xl border border-[#d4cbc2]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded bg-[#1d5e68] text-white flex items-center justify-center text-xs font-bold">A</span>
                  <h4 className="text-sm font-bold text-[#292420]">Según su Forma (Morfología)</h4>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 bg-white rounded-lg border border-[#d4cbc2]">
                    <span className="font-bold text-[#1d5e68] block">1. Piramidal</span>
                    <span className="text-[11px] text-[#787169]">Cuerpo triangular con axón largo proyectivo.</span>
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-[#d4cbc2]">
                    <span className="font-bold text-[#1d5e68] block">2. Granular</span>
                    <span className="text-[11px] text-[#787169]">Células pequeñas tipo grano, abundantes en corteza y cerebelo.</span>
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-[#d4cbc2]">
                    <span className="font-bold text-[#1d5e68] block">3. Horizontal</span>
                    <span className="text-[11px] text-[#787169]">Disposición lateral en capas corticales/retinianas.</span>
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-[#d4cbc2]">
                    <span className="font-bold text-[#1d5e68] block">4. En Penacho</span>
                    <span className="text-[11px] text-[#787169]">Ramificación dendrítica frondosa en penacho apical.</span>
                  </div>
                </div>
              </div>

              {/* 2. Según su función */}
              <div className="bg-[#fbf8f5] p-4 rounded-xl border border-[#d4cbc2]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded bg-[#2b553c] text-white flex items-center justify-center text-xs font-bold">B</span>
                  <h4 className="text-sm font-bold text-[#292420]">Según su Función en el Circuito</h4>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-2 bg-white rounded-lg border border-[#d4cbc2] flex items-center justify-between">
                    <div>
                      <span className="font-bold text-[#205b76]">Sensorial (Aferente):</span>
                      <span className="text-[#49423c] ml-1">Lleva señales desde los receptores hacia el SNC.</span>
                    </div>
                    <span className="text-[10px] bg-[#eef4f8] text-[#205b76] px-1.5 py-0.5 rounded font-mono">Entrada</span>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-[#d4cbc2] flex items-center justify-between">
                    <div>
                      <span className="font-bold text-[#704812]">Interneurona:</span>
                      <span className="text-[#49423c] ml-1">Integra y procesa información localmente entre neuronas.</span>
                    </div>
                    <span className="text-[10px] bg-[#fdf7ea] text-[#704812] px-1.5 py-0.5 rounded font-mono">Puente</span>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-[#d4cbc2] flex items-center justify-between">
                    <div>
                      <span className="font-bold text-[#b91c1c]">Motora (Eferente):</span>
                      <span className="text-[#49423c] ml-1">Envía órdenes desde el SNC a músculos y efectores.</span>
                    </div>
                    <span className="text-[10px] bg-[#fef2f2] text-[#b91c1c] px-1.5 py-0.5 rounded font-mono">Salida</span>
                  </div>
                </div>
              </div>

              {/* 3. Según la longitud de su axón (Golgi I vs II) */}
              <div className="bg-[#fdf7ea] p-4 rounded-xl border border-amber-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded bg-[#704812] text-white flex items-center justify-center text-xs font-bold">C</span>
                  <h4 className="text-sm font-bold text-[#704812]">Según la Longitud de su Axón (Clave de Examen)</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-white p-3 rounded-lg border border-amber-200 shadow-2xs">
                    <span className="font-bold text-[#704812] block text-sm">Golgi Tipo I</span>
                    <ul className="list-disc pl-4 mt-1 text-[#49423c] space-y-1 text-[11px]">
                      <li><strong>Axón largo</strong> de proyección.</li>
                      <li>Requiere <strong>mucha mielina</strong> para aislamiento.</li>
                      <li>Función primordial: <strong>ENVÍO</strong> a distancia.</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-amber-200 shadow-2xs">
                    <span className="font-bold text-[#704812] block text-sm">Golgi Tipo II</span>
                    <ul className="list-disc pl-4 mt-1 text-[#49423c] space-y-1 text-[11px]">
                      <li><strong>Axón corto</strong> o casi inexistente.</li>
                      <li>Poco o nulo recubrimiento mielínico.</li>
                      <li>Función primordial: <strong>PROCESAMIENTO</strong> local.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 4. Según prolongaciones y neurotransmisor */}
              <div className="bg-[#fbf8f5] p-4 rounded-xl border border-[#d4cbc2]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded bg-[#944920] text-white flex items-center justify-center text-xs font-bold">D</span>
                  <h4 className="text-sm font-bold text-[#292420]">Prolongaciones & Neurotransmisor</h4>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-2 bg-white rounded-lg border border-[#d4cbc2]">
                    <span className="font-bold text-[#944920]">Por número de prolongaciones del soma:</span>
                    <p className="text-[11px] text-[#49423c] mt-0.5">
                      <strong>Unipolares</strong> (1 sola extensión), <strong>Bipolares</strong> (2 extensiones: 1 axón y 1 dendrita) y <strong>Multipolares</strong> (múltiples dendritas y 1 axón).
                    </p>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-[#d4cbc2]">
                    <span className="font-bold text-[#944920]">Por su Neurotransmisor sintetizado:</span>
                    <p className="text-[11px] text-[#49423c] mt-0.5">
                      Colinérgicas (ACh), Dopaminérgicas (DA), Noradrenérgicas (NA), Gabaérgicas (GABA), Serotoninérgicas (5-HT)... hasta 52 neurotransmisores identificados.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 3: GLÍA / NEUROGLIA */}
      {activeSubTab === 'glia' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-[#d4cbc2] p-6 shadow-parchment">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#8a4b18]/10 text-[#8a4b18] flex items-center justify-center font-bold text-sm">
                03
              </span>
              <div>
                <h3 className="text-lg font-bold text-[#292420]">
                  Glía / Neuroglia ("El Pegamento del Sistema Nervioso")
                </h3>
                <p className="text-xs text-[#787169]">
                  Células de soporte vital, nutrición, defensa inmunitaria y aislamiento eléctrico
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              
              {/* Ependimocitos */}
              <div className="bg-[#fbf8f5] p-4 rounded-xl border border-[#d4cbc2] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#205b76] uppercase tracking-wider block mb-1">
                    Líquido Cefalorraquídeo
                  </span>
                  <h4 className="text-sm font-bold text-[#292420] mb-2">Ependimocitos</h4>
                  <p className="text-xs text-[#49423c] leading-relaxed">
                    Células <strong>ovoidales</strong> que revisten los ventrículos cerebrales y el canal ependimario.
                  </p>
                </div>
                <div className="mt-3 p-2 bg-white rounded-lg border border-[#d4cbc2] text-[11px] text-[#205b76] font-medium">
                  💧 Producción y flujo del líquido cefalorraquídeo (LCR).
                </div>
              </div>

              {/* Astrocito */}
              <div className="bg-[#fbf8f5] p-4 rounded-xl border border-[#d4cbc2] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#2b553c] uppercase tracking-wider block mb-1">
                    Control Nutricional & BHE
                  </span>
                  <h4 className="text-sm font-bold text-[#292420] mb-2">Astrocito</h4>
                  <p className="text-xs text-[#49423c] leading-relaxed">
                    Controla estrictamente <strong>"qué come la neurona"</strong> y actúa como filtro protector de sustancias tóxicas en sangre.
                  </p>
                </div>
                <div className="mt-3 p-2 bg-[#edf5f0] rounded-lg border border-[#2b553c]/30 text-[11px] text-[#162e21]">
                  🛡️ Forma la <strong>Barrera Hematoencefálica (BHE)</strong>.
                </div>
              </div>

              {/* Microglía */}
              <div className="bg-[#fbf8f5] p-4 rounded-xl border border-[#d4cbc2] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#944920] uppercase tracking-wider block mb-1">
                    Sistema Inmune
                  </span>
                  <h4 className="text-sm font-bold text-[#292420] mb-2">Microglía</h4>
                  <p className="text-xs text-[#49423c] leading-relaxed">
                    Fagocitos del tejido cerebral: identifican agentes invasores, restos celulares y los eliminan hacia el torrente venoso.
                  </p>
                </div>
                <div className="mt-3 p-2 bg-[#fdf3ee] rounded-lg border border-[#944920]/30 text-[11px] text-[#54210a]">
                  🧹 Los barrenderos y defensores inmunes del cerebro.
                </div>
              </div>

              {/* Células Mielinizantes */}
              <div className="bg-[#fbf8f5] p-4 rounded-xl border border-[#d4cbc2] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#8a4b18] uppercase tracking-wider block mb-1">
                    Grasa Aislante
                  </span>
                  <h4 className="text-sm font-bold text-[#292420] mb-2">Mielina</h4>
                  <p className="text-xs text-[#49423c] leading-relaxed">
                    Célula de consistencia lipídica/grasa que envuelve los axones facilitando la conducción saltatoria.
                  </p>
                </div>
                <div className="mt-3 p-2 bg-[#faf3e8] rounded-lg border border-[#8a4b18]/30 text-[11px] text-[#4a2408]">
                  ⚡ Permite la conducción saltatoria en Nodos de Ranvier.
                </div>
              </div>

            </div>

            {/* Las 3 Capas de la BHE */}
            <div className="mt-5 bg-[#fcfbf9] rounded-xl border border-[#d4cbc2] p-4">
              <h4 className="text-xs font-bold text-[#292420] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#2b553c]" />
                Barrera Hematoencefálica (BHE) — 3 Capas
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mt-2">
                <div className="bg-white p-3 rounded-lg border border-[#d4cbc2] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#2b553c] text-white flex items-center justify-center text-[10px] font-bold">1</span>
                  <span className="font-bold text-[#231f1c]">Pared del vaso sanguíneo</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#d4cbc2] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#2b553c] text-white flex items-center justify-center text-[10px] font-bold">2</span>
                  <span className="font-bold text-[#231f1c]">Pie perivascular del Astrocito</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#d4cbc2] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#2b553c] text-white flex items-center justify-center text-[10px] font-bold">3</span>
                  <span className="font-bold text-[#231f1c]">Membrana neuronal</span>
                </div>
              </div>
            </div>

            {/* Comparativa Oligodendrocito vs Schwann */}
            <div className="mt-4 bg-[#fdf7ea] rounded-xl border border-amber-300 p-4">
              <h4 className="text-xs font-bold text-[#704812] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Split className="w-4 h-4 text-amber-700" />
                Comparativa Clave: Oligodendrocitos vs Células de Schwann
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mt-2">
                <div className="bg-white p-3 rounded-lg border border-amber-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-[#704812]">Oligodendrocitos</span>
                    <span className="text-[10px] bg-amber-100 text-[#704812] px-1.5 py-0.5 rounded font-mono font-bold">SNC</span>
                  </div>
                  <ul className="list-disc pl-4 text-[#49423c] space-y-0.5 text-[11px]">
                    <li>Actúan en el <strong>Sistema Nervioso Central</strong>.</li>
                    <li>Un solo cuerpo abraza <strong>múltiples segmentos</strong> de axones distintos.</li>
                    <li>Presentan una <strong>baja tasa de recuperación</strong> en caso de daño.</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded-lg border border-amber-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-[#704812]">Células de Schwann</span>
                    <span className="text-[10px] bg-amber-100 text-[#704812] px-1.5 py-0.5 rounded font-mono font-bold">SNP</span>
                  </div>
                  <ul className="list-disc pl-4 text-[#49423c] space-y-0.5 text-[11px]">
                    <li>Actúan en el <strong>Sistema Nervioso Periférico</strong>.</li>
                    <li>Cada célula envuelve un <strong>único segmento</strong> axónico.</li>
                    <li>Poseen una <strong>mayor tasa de recuperación</strong> y regeneración.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* SUBTAB 4: SINAPSIS & RECEPTORES */}
      {activeSubTab === 'sinapsis' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-[#d4cbc2] p-6 shadow-parchment">
            <h3 className="text-lg font-bold text-[#292420] mb-1">
              Sinapsis: Comunicación Interneuronal
            </h3>
            <p className="text-xs text-[#787169] mb-6">
              El punto de contacto donde las neuronas transmiten información (química o eléctrica)
            </p>

            {/* Comparativa Química vs Eléctrica */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#f0f6f9] p-4 rounded-xl border border-[#205b76]/40">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-[#205b76]">Sinapsis Química</h4>
                  <span className="text-[10px] bg-[#205b76] text-white px-2 py-0.5 rounded-full font-bold">Humana Predominante</span>
                </div>
                <p className="text-xs text-[#38332e] leading-relaxed mb-3">
                  Existe una separación física llamada <strong>espacio o hendidura sináptica</strong>. Requiere liberación de <strong>neurotransmisores</strong> químicos y reconocimiento en receptores. No es inmediata pero sí rápida en fracciones de segundo.
                </p>
                <div className="space-y-1.5 text-[11px] text-[#133c4e] bg-white/70 p-2.5 rounded-lg border border-[#205b76]/20">
                  <p>• <strong>Membrana presináptica:</strong> vesículas con neurotransmisor movilizadas por calcio (Ca²⁺).</p>
                  <p>• <strong>Hendidura sináptica:</strong> espacio donde actúan las enzimas limpiadoras.</p>
                  <p>• <strong>Membrana postsináptica:</strong> receptores específicos para el neurotransmisor.</p>
                </div>
              </div>

              <div className="bg-[#fbf8f5] p-4 rounded-xl border border-[#d4cbc2]">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-[#292420]">Sinapsis Eléctrica (Uniones GAP)</h4>
                  <span className="text-[10px] bg-[#787169] text-white px-2 py-0.5 rounded-full font-bold">Primitiva</span>
                </div>
                <p className="text-xs text-[#38332e] leading-relaxed mb-3">
                  Las membranas presináptica y postsináptica <strong>SÍ se tocan</strong> a través de canales llamados <strong>uniones GAP</strong>. El paso de carga iónica es inmediato y directo sin necesidad de neurotransmisores ni enzimas.
                </p>
                <div className="space-y-1.5 text-[11px] text-[#49423c] bg-white p-2.5 rounded-lg border border-[#d4cbc2]">
                  <p>• Típica de animales con menor complejidad (anfibios, reptiles y pocos mamíferos).</p>
                  <p>• Respuesta automática, rápida pero sin control ni modulación química fina.</p>
                  <p>• Si los iones son excitatorios se transmiten tal cual; si son inhibitorios igual.</p>
                </div>
              </div>
            </div>

            {/* Metáfora de la Película de Clase */}
            <div className="bg-[#fdf7ea] rounded-xl border border-amber-300 p-5 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-amber-700" />
                <h4 className="text-sm font-bold text-[#704812]">
                  La Película de la Sinapsis (Analogía de la Maestra)
                </h4>
              </div>
              <p className="text-xs text-[#49423c] leading-relaxed mb-4">
                "¿Quiénes actúan en esta película? Tenemos 3 actores clave":
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="bg-white p-3.5 rounded-xl border border-amber-200">
                  <span className="text-[10px] font-bold text-[#704812] uppercase tracking-wider block mb-1">Actor Principal</span>
                  <span className="text-sm font-bold text-[#292420] block mb-1">Brad Pitt = Neurotransmisor</span>
                  <p className="text-[11px] text-[#49423c]">
                    Al recibir el influjo de calcio (Ca²⁺), es liberado de las vesículas para correr a toda prisa por la hendidura sináptica.
                  </p>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-amber-200">
                  <span className="text-[10px] font-bold text-[#2b553c] uppercase tracking-wider block mb-1">Coprotagonista</span>
                  <span className="text-sm font-bold text-[#292420] block mb-1">Jennifer Aniston = Receptores</span>
                  <p className="text-[11px] text-[#49423c]">
                    En la membrana postsináptica: el neurotransmisor se "arrumaquea" un momento con ellas para activar el canal, y luego se despega.
                  </p>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-amber-200">
                  <span className="text-[10px] font-bold text-[#944920] uppercase tracking-wider block mb-1">Antagonista Celosa</span>
                  <span className="text-sm font-bold text-[#292420] block mb-1">Angelina Jolie ("La Yoli") = Enzimas</span>
                  <p className="text-[11px] text-[#49423c]">
                    Vigilan la hendidura para atrapar a los neurotransmisores libres y limpiar el mensaje para que el siguiente estímulo sea nuevo.
                  </p>
                </div>
              </div>

              {/* 3 Destinos de la Enzima */}
              <div className="mt-4 pt-3 border-t border-amber-200/80">
                <span className="text-xs font-bold text-[#704812] block mb-2">
                  Las 3 cosas que puede hacerle una enzima al neurotransmisor:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <div className="bg-[#fbf8f5] p-2 rounded border border-[#d4cbc2]">
                    <strong className="text-[#2b553c]">1. Recapturar:</strong> Devolverlo a la membrana presináptica.
                  </div>
                  <div className="bg-[#fbf8f5] p-2 rounded border border-[#d4cbc2]">
                    <strong className="text-[#205b76]">2. Inactivar:</strong> Ponerle un anclaje químico que le impida pegarse al receptor.
                  </div>
                  <div className="bg-[#fbf8f5] p-2 rounded border border-[#d4cbc2]">
                    <strong className="text-[#944920]">3. Degradar:</strong> Desbaratarlo químicamente para que deje de funcionar.
                  </div>
                </div>
              </div>
            </div>

            {/* Tipos de Receptores con Analogía de Construcción */}
            <div className="bg-white rounded-xl border border-[#d4cbc2] p-5 mb-6">
              <h4 className="text-sm font-bold text-[#292420] mb-3">
                Tipos de Receptores: Ionotrópicos vs Metabotrópicos
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="bg-[#fbf8f5] p-3.5 rounded-xl border border-[#d4cbc2]">
                  <span className="text-[10px] font-bold text-[#2b553c] uppercase tracking-wider block mb-1">Canal Directo</span>
                  <h5 className="font-bold text-sm text-[#292420] mb-1">Receptores Ionotrópicos</h5>
                  <p className="text-[#49423c] leading-relaxed mb-2">
                    Son receptor y canal a la vez. Al recibir la molécula neurotransmisora (la llave), el canal se abre directamente permitiendo el paso de iones (Na⁺, K⁺, Cl⁻).
                  </p>
                  <div className="bg-white p-2 rounded border border-[#d4cbc2] text-[11px] text-[#2b553c] font-medium">
                    🔨 <strong>Analogía:</strong> El Maestro Albañil. Le dices "hazme un muro" y él mismo pone los ladrillos directamente.
                  </div>
                </div>

                <div className="bg-[#fbf8f5] p-3.5 rounded-xl border border-[#d4cbc2]">
                  <span className="text-[10px] font-bold text-[#205b76] uppercase tracking-wider block mb-1">Segundos Mensajeros</span>
                  <h5 className="font-bold text-sm text-[#292420] mb-1">Receptores Metabotrópicos</h5>
                  <p className="text-[#49423c] leading-relaxed mb-2">
                    No son un canal en sí. Al activarse por el neurotransmisor, activan una <strong>Proteína G</strong> adherida:
                  </p>
                  <ul className="list-disc pl-4 text-[11px] text-[#49423c] space-y-1 mb-2">
                    <li><strong>Acoplados a canal:</strong> Le avisa al canal vecino "ábrete canal" (*El Arquitecto que coordina albañiles*).</li>
                    <li><strong>Acoplados a enzima:</strong> Desencadena cascadas enzimáticas, modifica segundos mensajeros o ADN (*El Diseñador de Interiores que coordina cuadrillas completas*).</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Variantes Anatómicas de Sinapsis */}
            <div>
              <h4 className="text-sm font-bold text-[#292420] mb-3">
                Clasificación por Lugar Anatómico de Contacto
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
                {synapseVariantsData.map((item, idx) => (
                  <div key={idx} className="p-3 bg-[#fbf8f5] rounded-xl border border-[#d4cbc2]">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-[#292420]">{item.type}</span>
                      <span className="text-[10px] bg-[#f5efe9] text-[#704812] px-1.5 py-0.5 rounded font-medium">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-[#49423c] text-[11px] mb-1.5 leading-normal">
                      {item.description}
                    </p>
                    <p className="text-[10px] text-[#787169] italic">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* SUBTAB 5: LOS 4 GRANDES SISTEMAS */}
      {activeSubTab === 'sistemas' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-[#d4cbc2] p-6 shadow-parchment">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#436d53]/10 text-[#436d53] flex items-center justify-center font-bold text-sm">
                05
              </span>
              <div>
                <h3 className="text-lg font-bold text-[#292420]">
                  Los 4 Grandes Sistemas Neuroquímicos
                </h3>
                <p className="text-xs text-[#787169]">
                  Tabla maestra clínica de clase: Colinérgico, Dopaminérgico, Noradrenérgico y Serotoninérgico
                </p>
              </div>
            </div>

            {/* Selector tabs for the 4 systems */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
              {neuroSystemsData.map((sys) => (
                <button
                  key={sys.id}
                  onClick={() => setSelectedSystem(sys)}
                  className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                    selectedSystem.id === sys.id
                      ? 'bg-white border-[#2b553c] ring-2 ring-[#2b553c]/20 shadow-xs'
                      : 'bg-[#fbf8f5] border-[#d4cbc2] hover:bg-[#f5efe9]'
                  }`}
                >
                  <span className="text-[10px] font-bold text-[#787169] uppercase tracking-wider block">
                    {sys.abbreviation}
                  </span>
                  <span className="text-xs font-bold text-[#292420] block truncate">
                    {sys.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Selected System Detail Card */}
            <div className="bg-[#fcfbf9] rounded-2xl border border-[#d4cbc2] p-5 shadow-2xs mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#d4cbc2]/70 mb-4 gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xl font-bold text-[#292420]">
                      {selectedSystem.name}
                    </h4>
                    <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-[#f5efe9] text-[#704812]">
                      {selectedSystem.abbreviation}
                    </span>
                  </div>
                  <span className="text-xs text-[#787169]">
                    Molécula activa: {selectedSystem.molecule}
                  </span>
                </div>
                <div className="text-xs bg-[#eef4f8] text-[#205b76] px-3 py-1.5 rounded-lg border border-[#205b76]/20 font-medium">
                  📍 Núcleos: {selectedSystem.producingNuclei.join(' • ')}
                </div>
              </div>

              {/* Grid 2x2: Functions, Hyper, Hypo, Clinical */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                
                {/* Functions */}
                <div className="bg-white p-4 rounded-xl border border-[#d4cbc2]">
                  <span className="text-[10px] font-bold text-[#2b553c] uppercase tracking-wider block mb-2">
                    Funciones Fisiológicas
                  </span>
                  <ul className="list-disc pl-4 space-y-1.5 text-[#38332e]">
                    {selectedSystem.functions.map((fn, idx) => (
                      <li key={idx}>{fn}</li>
                    ))}
                  </ul>
                </div>

                {/* Clinical note & synthesis */}
                <div className="bg-white p-4 rounded-xl border border-[#d4cbc2] flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-[#704812] uppercase tracking-wider block mb-2">
                      Detalle de Cátedra & Síntesis
                    </span>
                    <p className="text-[#38332e] leading-relaxed">
                      {selectedSystem.clinicalNote}
                    </p>
                  </div>
                </div>

                {/* Hyperactivity */}
                <div className="bg-[#fdf3ee] p-4 rounded-xl border border-[#944920]/30">
                  <span className="text-[10px] font-bold text-[#944920] uppercase tracking-wider block mb-1">
                    Hiperactividad (Exceso)
                  </span>
                  <p className="text-xs font-bold text-[#54210a] mb-1">
                    {selectedSystem.hyperactivity}
                  </p>
                </div>

                {/* Hypoactivity */}
                <div className="bg-[#f0f6f9] p-4 rounded-xl border border-[#205b76]/30">
                  <span className="text-[10px] font-bold text-[#205b76] uppercase tracking-wider block mb-1">
                    Hipoactividad (Déficit)
                  </span>
                  <p className="text-xs font-bold text-[#133c4e] mb-1">
                    {selectedSystem.hypoactivity}
                  </p>
                </div>

              </div>
            </div>

            {/* Complete Full Comparison Table from Class */}
            <div>
              <h4 className="text-sm font-bold text-[#292420] mb-3">
                Tabla Comparativa Completa (Literal de los Apuntes)
              </h4>
              <div className="overflow-x-auto rounded-xl border border-[#d4cbc2]">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-[#f5efe9] text-[#292420] font-bold border-b border-[#d4cbc2]">
                    <tr>
                      <th className="p-3">Sistema</th>
                      <th className="p-3">Molécula</th>
                      <th className="p-3">Función Principal</th>
                      <th className="p-3">Hiperactividad</th>
                      <th className="p-3">Hipoactividad</th>
                      <th className="p-3">Núcleos Productores</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#d4cbc2]/60 bg-white text-[#38332e]">
                    <tr className="hover:bg-[#fbf8f5]">
                      <td className="p-3 font-bold text-[#2b553c]">Colinérgico</td>
                      <td className="p-3 font-mono font-medium">Acetilcolina (ACh)</td>
                      <td className="p-3">Unión muscular, Memoria, actividad EEG</td>
                      <td className="p-3 text-red-700 font-medium">Convulsiones / Epilepsia</td>
                      <td className="p-3 text-blue-700 font-medium">Pérdida memoria = Demencia (Alzheimer)</td>
                      <td className="p-3">Prosencéfalo basal y Mesencefálicos</td>
                    </tr>
                    <tr className="hover:bg-[#fbf8f5]">
                      <td className="p-3 font-bold text-[#8a4b18]">Dopaminérgico</td>
                      <td className="p-3 font-mono font-medium">Dopamina (DA)</td>
                      <td className="p-3">Control motor central, Estabilidad mental</td>
                      <td className="p-3 text-red-700 font-medium">Psicosis = Esquizofrenia</td>
                      <td className="p-3 text-blue-700 font-medium">Temblores = Parkinson</td>
                      <td className="p-3">Sustancia Negra y ATV (Área Tegmental Ventral)</td>
                    </tr>
                    <tr className="hover:bg-[#fbf8f5]">
                      <td className="p-3 font-bold text-[#944920]">Noradrenérgico</td>
                      <td className="p-3 font-mono font-medium">Noradrenalina (NA) / Norepinefrina (NE)</td>
                      <td className="p-3">Estabilidad / tono emocional, Excitabilidad</td>
                      <td className="p-3 text-red-700 font-medium">Manía = TAB (acelere, insomnio, conductas de riesgo)</td>
                      <td className="p-3 text-blue-700 font-medium">Depresión endógena/bioquímica = TAB</td>
                      <td className="p-3">Locus Coeruleus (protuberancia)</td>
                    </tr>
                    <tr className="hover:bg-[#fbf8f5]">
                      <td className="p-3 font-bold text-[#205b76]">Serotoninérgico</td>
                      <td className="p-3 font-mono font-medium">Serotonina (5-HT)</td>
                      <td className="p-3">Control conductual, Vigilia, respuestas controladas</td>
                      <td className="p-3 text-red-700 font-medium">TOC, tics faciales/Tourette, psicosis</td>
                      <td className="p-3 text-blue-700 font-medium">Depresión Común / Situacional ("agüite")</td>
                      <td className="p-3">Núcleos del Rafe</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Litio Callout */}
            <div className="mt-4 bg-[#fdf7ea] p-4 rounded-xl border border-amber-300 text-xs text-[#52330a] flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-amber-700 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Aclaración Médica de la Profesora sobre el Litio:</strong> No se administra dopamina ni serotonina directa porque no cruzan la BHE adecuadamente. En el TAB se administra Litio porque interviene en la ruta metabólica primaria: <em>Tirosina hidroxilasa + Litio &rarr; L-DOPA &rarr; Dopamina &rarr; Noradrenalina</em>, restableciendo la química cerebral interna.
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
