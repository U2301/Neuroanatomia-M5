import React from 'react';
import { X, BookOpen, Sparkles, Check, Zap, Layers, AlertCircle } from 'lucide-react';

interface ExamGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExamGuideModal: React.FC<ExamGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/45 backdrop-blur-xs flex items-center justify-center p-4 font-sans"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full border border-[#d4cbc2] p-6 sm:p-7 shadow-2xl relative max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 text-[#787169] hover:text-[#231f1c] text-base p-1 transition cursor-pointer"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-[#2b553c] text-xs font-bold uppercase tracking-wider mb-1">
          <BookOpen className="w-3.5 h-3.5 text-[#2b553c]" />
          <span>Guía de Estudio</span>
        </div>

        <h3 className="text-xl font-bold text-[#292420] mb-2">
          Resumen de Examen: Neurona, Sinapsis & Potencial
        </h3>
        <p className="text-xs text-[#787169] mb-4">
          Definiciones, mnemotecnias, valores en mV y tabla comparativa.
        </p>

        <div className="space-y-4 text-xs sm:text-sm text-[#231f1c] leading-relaxed">
          
          {/* Cornell Summary */}
          <div className="p-4 bg-[#fbf8f5] rounded-xl border border-[#d4cbc2]">
            <p className="font-bold text-[#292420] mb-2 flex items-center gap-2 text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#2b553c]" />
              <span>Resumen Ejecutivo (Método Cornell):</span>
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 text-xs text-[#49423c]">
              <li className="leading-relaxed">
                <strong>La Neurona y la Glía:</strong> La neurona es la unidad funcional y anatómica del SN ("la más chiquita que hace la chamba"). Está sostenida por la glía: ependimocitos (LCR), astrocitos (BHE de 3 capas), microglía (defensa inmune venosa) y mielina (oligodendrocitos en SNC vs Schwann en SNP).
              </li>
              <li className="leading-relaxed">
                <strong>Sinapsis y los 4 Sistemas:</strong> La sinapsis humana es predominantemente química (neurotransmisor Brad Pitt, receptores Jennifer Aniston y enzimas limpiadoras La Yoli que recapturan, inactivan o degradan). Se rige por 4 sistemas cardinales: Colinérgico (ACh), Dopaminérgico (DA), Noradrenérgico (NA/NE con litio en TAB) y Serotoninérgico (5-HT).
              </li>
              <li className="leading-relaxed">
                <strong>Bioelectricidad del Potencial de Acción:</strong> Reposo en -70 mV determinado por aniones proteicos y K+ intracelular vs Na+ y Cl- extracelular. Al alcanzar el umbral de -50 mV, la membrana sufre un "escalofrío" de apertura de sodio (despolarización), seguido de salida de potasio (repolarización) e hiperpolarización restablecida por la Bomba NaKa (3 Na+ fuera, 2 K+ dentro).
              </li>
            </ol>
          </div>

          {/* Checklist de Examen */}
          <div className="p-3.5 bg-[#fef7e6] rounded-xl border border-amber-300">
            <p className="font-bold text-amber-950 mb-2 flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <Check className="w-4 h-4 text-amber-800" />
              <span>Checklist de Preguntas Fijas de Cátedra:</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="bg-white p-2.5 rounded-lg border border-amber-200">
                <span className="font-bold text-[#704812] block">1. Las 3 Capas de la BHE:</span>
                <span className="text-[#49423c] text-[11px]">1) Pared del vaso sanguíneo, 2) Pie del astrocito, 3) Membrana neuronal.</span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-amber-200">
                <span className="font-bold text-[#704812] block">2. Golgi Tipo I vs Tipo II:</span>
                <span className="text-[#49423c] text-[11px]">Golgi I = axón largo, mielina, envío. Golgi II = axón corto, procesamiento local.</span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-amber-200">
                <span className="font-bold text-[#704812] block">3. Sinapsis Eléctrica vs Química:</span>
                <span className="text-[#49423c] text-[11px]">Eléctrica = uniones GAP (sí se tocan). Química = hendidura sináptica y neurotransmisor.</span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-amber-200">
                <span className="font-bold text-[#704812] block">4. 3 Destinos de la Enzima:</span>
                <span className="text-[#49423c] text-[11px]">1) Recapturar, 2) Inactivar (anclaje químico), 3) Degradar (desbaratar).</span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-amber-200">
                <span className="font-bold text-[#704812] block">5. Fórmulas de Voltaje:</span>
                <span className="text-[#49423c] text-[11px]">Reposo = -70 mV. Umbral = -50 mV. Pico = +30/+40 mV.</span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-amber-200">
                <span className="font-bold text-[#704812] block">6. Bomba NaKa:</span>
                <span className="text-[#49423c] text-[11px]">Saca 3 iones de Na+ y mete 2 iones de K+ consumiendo ATP.</span>
              </div>
            </div>
          </div>

          {/* Tabla de los 4 Sistemas */}
          <div className="p-3.5 bg-white rounded-xl border border-[#d4cbc2]">
            <p className="font-bold text-[#292420] mb-2 text-xs uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#2b553c]" />
              <span>Tabla de los 4 Sistemas Neuroquímicos:</span>
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-[#d4cbc2] rounded-lg overflow-hidden">
                <thead className="bg-[#f5efe9] text-[#292420] font-bold">
                  <tr>
                    <th className="p-2 border-b border-[#d4cbc2]">Sistema</th>
                    <th className="p-2 border-b border-[#d4cbc2]">Función</th>
                    <th className="p-2 border-b border-[#d4cbc2]">Hiper</th>
                    <th className="p-2 border-b border-[#d4cbc2]">Hipo</th>
                    <th className="p-2 border-b border-[#d4cbc2]">Núcleos</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#d4cbc2]/50 text-[11px]">
                  <tr>
                    <td className="p-2 font-bold text-[#2b553c]">Colinérgico (ACh)</td>
                    <td className="p-2">Unión muscular, memoria, EEG</td>
                    <td className="p-2 text-red-700">Convulsiones</td>
                    <td className="p-2 text-blue-700">Alzheimer</td>
                    <td className="p-2">Prosencéfalo basal, Mesencefálicos</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold text-[#8a4b18]">Dopaminérgico (DA)</td>
                    <td className="p-2">Control motor, estabilidad mental</td>
                    <td className="p-2 text-red-700">Esquizofrenia</td>
                    <td className="p-2 text-blue-700">Parkinson</td>
                    <td className="p-2">Sustancia Nigra, ATV</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold text-[#944920]">Noradrenérgico (NA)</td>
                    <td className="p-2">Tono emocional, excitabilidad</td>
                    <td className="p-2 text-red-700">Manía (TAB)</td>
                    <td className="p-2 text-blue-700">Depresión endógena (TAB)</td>
                    <td className="p-2">Locus Coeruleus</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold text-[#205b76]">Serotoninérgico (5-HT)</td>
                    <td className="p-2">Control conductual, vigilia</td>
                    <td className="p-2 text-red-700">TOC, Tourette</td>
                    <td className="p-2 text-blue-700">Depresión común</td>
                    <td className="p-2">Núcleos de Rafe</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Recordatorio de Examen */}
          <div className="p-3 bg-[#edf5f0] border border-[#2b553c]/30 rounded-xl text-xs text-[#162e21] flex items-center justify-between">
            <div>
              <strong>Fecha de Evaluación:</strong> Jueves • Examen presencial con cámara y micrófono activados. No es a cuaderno abierto.
            </div>
            <button
              onClick={onClose}
              className="px-3 py-1 bg-[#2b553c] text-white font-bold rounded-lg cursor-pointer hover:bg-[#1f3f2c]"
            >
              ¡Entendido!
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
