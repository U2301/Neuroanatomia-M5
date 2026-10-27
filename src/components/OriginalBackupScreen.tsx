import React, { useState, useEffect } from 'react';
import { ArrowLeft, FileText, Mic, Search, Rat } from 'lucide-react';
import { classLectureNotesMarkdown } from '../data/neuroData';

interface OriginalBackupScreenProps {
  onNavigateToAtlas: () => void;
}

export const OriginalBackupScreen: React.FC<OriginalBackupScreenProps> = ({ onNavigateToAtlas }) => {
  const [activeTab, setActiveTab] = useState<'apuntes' | 'transcripcion'>('apuntes');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [transcriptContent, setTranscriptContent] = useState<string>('');

  useEffect(() => {
    fetch('./assets/aistudio/Sinapsis__neurotransmisores_y_Poten_89c9706c.txt')
      .then(res => res.text())
      .then(text => {
        if (text && text.length > 50) {
          setTranscriptContent(text);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div
      id="original-backup-screen"
      data-xpath="//body"
      className="min-h-screen w-full bg-[#fdfbf7] text-[#231f1c] p-4 sm:p-6 font-sans"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-xl border border-[#d4cbc2] p-5 sm:p-8 shadow-xs">
        {/* Top Header with Rat Icon on Top-Left */}
        <div className="flex items-center justify-between border-b border-[#d4cbc2]/70 pb-4 mb-4">
          <div className="flex items-center gap-2.5">
            <div 
              className="w-9 h-9 rounded-lg bg-[#2b553c] flex items-center justify-center text-white flex-shrink-0"
              title="Neuroanatomía"
            >
              <Rat className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-[#292420] leading-none">
                Apuntes Originales & Transcripción
              </h1>
              <p className="text-[11px] text-[#787169] mt-0.5">Clase de Neuroanatomía</p>
            </div>
          </div>

          <button
            id="back-to-atlas-btn"
            onClick={onNavigateToAtlas}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#2b553c] bg-[#edf5f0] border border-[#2b553c]/30 rounded-lg hover:bg-[#2b553c] hover:text-white transition cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver</span>
          </button>
        </div>

        {/* Tab Switcher & Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 bg-[#fbf8f5] p-2 rounded-lg border border-[#d4cbc2]">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setActiveTab('apuntes')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'apuntes'
                  ? 'bg-[#2b553c] text-white'
                  : 'text-[#49423c] hover:bg-[#ede3d8]'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Notas de Clase (Markdown)</span>
            </button>
            <button
              onClick={() => setActiveTab('transcripcion')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'transcripcion'
                  ? 'bg-[#2b553c] text-white'
                  : 'text-[#49423c] hover:bg-[#ede3d8]'
              }`}
            >
              <Mic className="w-3.5 h-3.5" />
              <span>Transcripción de Audio</span>
            </button>
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#787169]" />
            <input
              type="text"
              placeholder="Buscar en el texto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-xs pl-8 pr-3 py-1 border border-[#d4cbc2] rounded-md bg-white w-full sm:w-48 focus:outline-none focus:ring-1 focus:ring-[#2b553c]"
            />
          </div>
        </div>

        {/* TAB 1: Markdown Notes */}
        {activeTab === 'apuntes' && (
          <div className="bg-[#fcfbf9] p-4 sm:p-5 rounded-lg border border-[#d4cbc2] font-mono text-xs text-[#292420] whitespace-pre-wrap leading-relaxed max-h-[640px] overflow-y-auto">
            {classLectureNotesMarkdown}
          </div>
        )}

        {/* TAB 2: Transcription */}
        {activeTab === 'transcripcion' && (
          <div className="space-y-3 max-h-[640px] overflow-y-auto p-1">
            <div className="p-2.5 bg-[#eef4f8] rounded-lg border border-[#205b76]/20 text-xs text-[#133c4e] flex items-center justify-between">
              <span>Grabación: "Sinapsis, neurotransmisores y Potencial de Acción"</span>
              <span className="font-mono text-[11px] bg-white px-2 py-0.5 rounded border border-[#205b76]/20">1:06:14</span>
            </div>

            <div className="bg-[#fbf8f5] p-4 rounded-lg border border-[#d4cbc2] font-sans text-xs text-[#38332e] leading-relaxed whitespace-pre-line">
              {transcriptContent ? transcriptContent : (
                <div className="space-y-3">
                  <p><strong>0:02</strong> — Seres humanos tenemos la mayor cantidad de sinapsis químicas y las sinapsis eléctricas son sinapsis que se consideran como más primitivas...</p>
                  <p><strong>0:56</strong> — Es el punto o el lugar de la comunicación entre 2 neuronas, puede ser eléctrica o química.</p>
                  <p><strong>1:42</strong> — En una sinapsis eléctrica sí toca a la otra neurona a través de uniones gap...</p>
                  <p><strong>3:55</strong> — 3 elementos: Brad Pitt como el neurotransmisor, Jennifer Aniston como los receptores, y Angelina Jolie ("La Yoli") como las enzimas...</p>
                  <p><strong>10:27</strong> — 3 destinos enzimáticos: 1) Recapturar, 2) Inactivar o 3) Degradar...</p>
                  <p><strong>15:27</strong> — Receptores: Ionotrópicos (maestro albañil) y Metabotrópicos (acoplados a canal = arquitecto; acoplados a enzima = diseñador de interiores)...</p>
                  <p><strong>20:54</strong> — Los 4 Grandes Sistemas: Colinérgico (ACh), Dopaminérgico (DA), Noradrenérgico (NA) y Serotoninérgico (5-HT)...</p>
                  <p><strong>39:42</strong> — Potencial de Reposo en promedio -70 mV...</p>
                  <p><strong>48:16</strong> — Potencial Umbral en promedio -50 mV... despolarización con entrada de sodio, repolarización con salida de potasio e hiperpolarización con la Bomba NaKa (3 Na+ fuera, 2 K+ dentro)...</p>
                  <p><strong>56:10</strong> — Conducción saltatoria en Nodos de Ranvier...</p>
                  <p><strong>1:02:40</strong> — "Hasta este tema voy a estar en el examen, así es... no es examen a cuaderno abierto nomás es para que repasen".</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
