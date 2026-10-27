export type ScreenId = 'atlas' | 'backup';

export type MainTab = 'graph' | 'disciplines' | 'timeline' | 'flashcards';

export interface NeuroNode {
  id: number;
  label: string;
  category: 
    | 'Morfología & Neurona'
    | 'Tipos de Neuronas'
    | 'Glía / Neuroglia'
    | 'Sinapsis & Receptores'
    | 'Sistemas Neuroquímicos'
    | 'Potencial de Acción';
  group: 'neurona' | 'tipos' | 'glia' | 'sinapsis' | 'sistemas' | 'potencial';
  desc: string;
  exam: string;
  analogia?: string;
  colorGroup: string;
}

export interface NeuroEdge {
  from: number;
  to: number;
  label: string;
  arrows?: string;
}

export interface Flashcard {
  id: string;
  category: string;
  subcategory: string;
  question: string;
  answer: string;
  examNote: string;
  tags?: string[];
}

export interface NeuroSystem {
  id: string;
  name: string;
  molecule: string;
  abbreviation: string;
  functions: string[];
  hyperactivity: string;
  hypoactivity: string;
  producingNuclei: string[];
  color: string;
  clinicalNote: string;
}

export interface ActionPotentialStage {
  step: number;
  name: string;
  voltage: string; // e.g. "-70 mV", "-50 mV", "+30 mV", "-80 mV"
  voltageNum: number;
  description: string;
  ionMovement: string;
  channelsState: string;
  analogyOrNote: string;
  badgeColor: string;
}

export interface SynapseVariant {
  type: string;
  description: string;
  detail: string;
  tag: string;
}
