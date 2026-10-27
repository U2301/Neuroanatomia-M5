import {
  NeuroNode,
  NeuroEdge,
  Flashcard,
  NeuroSystem,
  ActionPotentialStage,
  SynapseVariant
} from '../types';

export const neuroNodesData: NeuroNode[] = [
  // 1. Morfología & Neurona
  {
    id: 1,
    label: 'La Neurona',
    category: 'Morfología & Neurona',
    group: 'neurona',
    desc: 'Unidad anatómica y funcional del sistema nervioso ("la más chiquita que hace la chamba").',
    exam: 'Definición esencial para examen: unidad fundamental anatomofuncional.',
    analogia: 'La trabajadora básica del cerebro',
    colorGroup: '#2b553c'
  },
  {
    id: 2,
    label: 'Soma o Cuerpo',
    category: 'Morfología & Neurona',
    group: 'neurona',
    desc: 'Centro metabólico de la neurona. Contiene el núcleo celular y orgánulos.',
    exam: 'Tiene núcleo celular.',
    colorGroup: '#2b553c'
  },
  {
    id: 3,
    label: 'Dendritas & Espinas',
    category: 'Morfología & Neurona',
    group: 'neurona',
    desc: 'Típicamente absorben la información. Si la neurona está muy estimulada, crea espinas dendríticas para ampliar la superficie de activación.',
    exam: 'Crean espinas dendríticas bajo alta estimulación para aumentar superficie receptiva.',
    analogia: 'Antenas receptoras con ramitas extra',
    colorGroup: '#2b553c'
  },
  {
    id: 4,
    label: 'Axón & Mielina',
    category: 'Morfología & Neurona',
    group: 'neurona',
    desc: 'Típicamente libera y transmite información. Está mielinizado. Si está sobre-estimulado puede ramificarse.',
    exam: 'Termina en botones terminales (pie axónico). Se ramifica ante sobre-estimulación.',
    colorGroup: '#2b553c'
  },

  // 2. Tipos de Neuronas
  {
    id: 10,
    label: 'Por Forma (Piramidal, Granular...)',
    category: 'Tipos de Neuronas',
    group: 'tipos',
    desc: 'Clasificación morfológica: Piramidal, Granular, Horizontal y En Penacho.',
    exam: 'Pregunta recurrente de clase: 4 formas (Piramidal, Granular, Horizontal, En Penacho).',
    colorGroup: '#1d5e68'
  },
  {
    id: 11,
    label: 'Por Función (Sensorial, Interneurona, Motora)',
    category: 'Tipos de Neuronas',
    group: 'tipos',
    desc: 'Sensoriales (aferentes), Interneuronas (integradoras) y Motoras (eferentes).',
    exam: 'Tres roles cardinales en el circuito neuronal.',
    colorGroup: '#1d5e68'
  },
  {
    id: 12,
    label: 'Por Longitud de Axón (Golgi I vs II)',
    category: 'Tipos de Neuronas',
    group: 'tipos',
    desc: 'Golgi tipo I: Axón largo, requiere mucha mielina, función de envío a distancia. Golgi tipo II: Axón corto, función de procesamiento local.',
    exam: 'Golgi I = envío/largo con mielina; Golgi II = procesamiento local/corto.',
    colorGroup: '#1d5e68'
  },
  {
    id: 13,
    label: 'Por Prolongaciones (Unipolar, Bipolar, Multipolar)',
    category: 'Tipos de Neuronas',
    group: 'tipos',
    desc: 'Número de extensiones que emergen del soma: Unipolares, Bipolares y Multipolares.',
    exam: 'Clasificación estructural según prolongaciones directas del cuerpo.',
    colorGroup: '#1d5e68'
  },

  // 3. Glía / Neuroglia
  {
    id: 20,
    label: 'Glía ("Pegamento")',
    category: 'Glía / Neuroglia',
    group: 'glia',
    desc: 'Conjunto de células de soporte del sistema nervioso: ependimocitos, astrocitos, microglía y células mielinizantes.',
    exam: 'Etimológicamente significa pegamento o sostén.',
    colorGroup: '#8a4b18'
  },
  {
    id: 21,
    label: 'Astrocitos & Barrera Hematoencefálica',
    category: 'Glía / Neuroglia',
    group: 'glia',
    desc: 'Controlan qué "come" la neurona. Forman la Barrera Hematoencefálica (BHE) integrada por: 1) Pared del vaso sanguíneo, 2) Astrocito y 3) Membrana neuronal.',
    exam: 'Capas de la BHE: Pared del vaso + Astrocito + Membrana neuronal.',
    analogia: 'El filtro y catador de comida de la neurona',
    colorGroup: '#8a4b18'
  },
  {
    id: 22,
    label: 'Ependimocitos',
    category: 'Glía / Neuroglia',
    group: 'glia',
    desc: 'Células ovoidales encargadas de la producción de líquido cefalorraquídeo (LCR) en los ventrículos cerebrales.',
    exam: 'Forma ovoidal; producen LCR en ventrículos.',
    colorGroup: '#8a4b18'
  },
  {
    id: 23,
    label: 'Microglía',
    category: 'Glía / Neuroglia',
    group: 'glia',
    desc: 'Sistema de defensa inmune celular: identifica agentes invasores y los elimina hacia la sangre venosa.',
    exam: 'Elimina residuos e invasores hacia el drenaje venoso.',
    colorGroup: '#8a4b18'
  },
  {
    id: 24,
    label: 'Oligodendrocitos (SNC)',
    category: 'Glía / Neuroglia',
    group: 'glia',
    desc: 'Mielinización en el Sistema Nervioso Central (SNC). Un solo oligodendrocito abraza múltiples segmentos de mielina. Baja tasa de recuperación.',
    exam: 'SNC + Múltiples segmentos + Baja tasa de recuperación.',
    colorGroup: '#8a4b18'
  },
  {
    id: 25,
    label: 'Células de Schwann (SNP)',
    category: 'Glía / Neuroglia',
    group: 'glia',
    desc: 'Mielinización en el Sistema Nervioso Periférico (SNP). Mieliniza un único segmento. Mayor tasa de recuperación tras lesión.',
    exam: 'SNP + Único segmento + Mayor tasa de recuperación.',
    colorGroup: '#8a4b18'
  },

  // 4. Sinapsis & Receptores
  {
    id: 30,
    label: 'Sinapsis Química',
    category: 'Sinapsis & Receptores',
    group: 'sinapsis',
    desc: 'Punto de comunicación mediado por neurotransmisor. Predominante en humanos. No es inmediata pero sí rápida. Cuenta con membrana presináptica, hendidura sináptica y membrana postsináptica.',
    exam: 'Predominante en humanos; tiene espacio sináptico; no se tocan directamente.',
    colorGroup: '#205b76'
  },
  {
    id: 31,
    label: 'Sinapsis Eléctrica (Uniones GAP)',
    category: 'Sinapsis & Receptores',
    group: 'sinapsis',
    desc: 'Más primitiva (anfibios, reptiles, pocos mamíferos). Las membranas SÍ se tocan a través de canales / uniones GAP enviando iones directamente sin neurotransmisor.',
    exam: 'Uniones GAP; membranas se tocan; flujo iónico directo; respuesta automática sin modulación.',
    colorGroup: '#205b76'
  },
  {
    id: 32,
    label: 'Película: Brad Pitt, Jennifer & La Yoli',
    category: 'Sinapsis & Receptores',
    group: 'sinapsis',
    desc: 'Analogía pedagógica de clase: Brad Pitt = Neurotransmisor. Jennifer Aniston = Receptor postsináptico. Angelina Jolie ("La Yoli") = Enzima celosísima en la hendidura que limpia.',
    exam: 'La neurona postsináptica NO se traga al neurotransmisor, sólo se une ("arrumaquea") y se despega.',
    analogia: 'Brad Pitt (NT) corre a los receptores (Jennifer) esquivando a las enzimas (La Yoli).',
    colorGroup: '#205b76'
  },
  {
    id: 33,
    label: 'Destino Enzimático (3 Opciones)',
    category: 'Sinapsis & Receptores',
    group: 'sinapsis',
    desc: 'La enzima en la hendidura puede hacer 1 de 3 cosas: 1) Recapturar (devolver a presinapsis), 2) Inactivar (anclaje químico que bloquea unión) o 3) Degradar (desbaratar).',
    exam: 'Tres destinos clave: Recapturar, Inactivar, Degradar.',
    colorGroup: '#205b76'
  },
  {
    id: 34,
    label: 'Receptores Ionotrópicos vs Metabotrópicos',
    category: 'Sinapsis & Receptores',
    group: 'sinapsis',
    desc: 'Ionotrópico = Canal y receptor a la vez (analogía: Maestro albañil). Metabotrópico = Acoplado a canal (Arquitecto) o acoplado a enzima/proteína G (Diseñador de interiores).',
    exam: 'Ionotrópicos: paso directo de iones. Metabotrópicos: segundos mensajeros / acoplados.',
    colorGroup: '#205b76'
  },
  {
    id: 35,
    label: 'Lugares: Axosináptica ("Suegra Metiche") & Axosecretora',
    category: 'Sinapsis & Receptores',
    group: 'sinapsis',
    desc: 'Axosináptica: axón sobre sinapsis previa preactivándola ("suegra metiche"). Axosecretora: axón a vaso sanguíneo; al entrar al torrente se llama HORMONA (comunica órganos/glándulas).',
    exam: 'Axosecretora: el neurotransmisor pasa a llamarse hormona en la sangre sin cambiar su química.',
    colorGroup: '#205b76'
  },

  // 5. Sistemas Neuroquímicos
  {
    id: 40,
    label: 'Sistema Colinérgico (ACh)',
    category: 'Sistemas Neuroquímicos',
    group: 'sistemas',
    desc: 'Acetilcolina (ACh). Funciones: Unión neuromuscular, Memoria, actividad EEG. Hiper: Convulsiones / epilepsia. Hipo: Pérdida memoria / Alzheimer. Núcleos: Prosencéfalo basal y Mesencefálicos.',
    exam: 'ACh: Unión neuromuscular + memoria. Falta = Alzheimer; Exceso = Convulsiones.',
    colorGroup: '#436d53'
  },
  {
    id: 41,
    label: 'Sistema Dopaminérgico (DA)',
    category: 'Sistemas Neuroquímicos',
    group: 'sistemas',
    desc: 'Dopamina (DA). Funciones: Control motor fino y estabilidad mental. Hiper: Psicosis / Esquizofrenia. Hipo: Parkinson (pérdida control motor y temblores). Núcleos: Sustancia Nigra y Área Tegmental Ventral (ATV).',
    exam: 'DA: Control motor + estabilidad mental. Hiper = Esquizofrenia; Hipo = Parkinson.',
    colorGroup: '#436d53'
  },
  {
    id: 42,
    label: 'Sistema Noradrenérgico (NA / NE)',
    category: 'Sistemas Neuroquímicos',
    group: 'sistemas',
    desc: 'Noradrenalina / Norepinefrina. Tono emocional y excitabilidad. Hiper: Manía (TAB). Hipo: Depresión endógena/bioquímica (asociada a TAB, tratada con Litio en su ruta de síntesis). Núcleo: Locus Coeruleus.',
    exam: 'NA: Tono emocional. Hiper = Manía; Hipo = Depresión bioquímica (litio). Núcleo: Locus Coeruleus.',
    colorGroup: '#436d53'
  },
  {
    id: 43,
    label: 'Sistema Serotoninérgico (5-HT)',
    category: 'Sistemas Neuroquímicos',
    group: 'sistemas',
    desc: 'Serotonina (5-HT). Control conductual y vigilia. Hiper: TOC, tics faciales/Tourette, psicosis. Hipo: Depresión común ("agüite cotidiano"). Núcleo: Núcleos del Rafe.',
    exam: '5-HT: Control de respuesta. Hipo = Depresión situacional/común. Hiper = TOC / Tourette.',
    colorGroup: '#436d53'
  },

  // 6. Potencial de Acción
  {
    id: 50,
    label: 'Potencial de Reposo (-70 mV)',
    category: 'Potencial de Acción',
    group: 'potencial',
    desc: 'Interior neto negativo (-70 mV) por abundancia de Aniones Proteicos (gordos, no salen) y K+. Exterior positivo por abundancia de Na+ y Cl-.',
    exam: 'Valor clave de reposo: -70 mV. Los aniones proteicos no pueden salir.',
    colorGroup: '#944920'
  },
  {
    id: 51,
    label: 'Fuerzas: Gradiente Eléctrico vs Concentración',
    category: 'Potencial de Acción',
    group: 'potencial',
    desc: 'Gradiente eléctrico: cargas opuestas se atraen (Na+ atraído por aniones internos). Gradiente de concentración: busca igualar cantidades adentro y afuera.',
    exam: 'El Na+ está desesperado por entrar por ambos gradientes a la vez.',
    colorGroup: '#944920'
  },
  {
    id: 52,
    label: 'Potencial Umbral (-50 mV)',
    category: 'Potencial de Acción',
    group: 'potencial',
    desc: 'Mínimo indispensable para que la neurona se encienda. Al alcanzarse, la membrana sufre un "escalofrío" y abre todas las compuertas de sodio.',
    exam: 'Valor umbral exacto: -50 mV. Provoca apertura masiva de canales de Na+.',
    colorGroup: '#944920'
  },
  {
    id: 53,
    label: 'Despolarización (Entrada de Na+)',
    category: 'Potencial de Acción',
    group: 'potencial',
    desc: 'El sodio entra en grandes cantidades volviendo el interior positivo hasta el pico del potencial. Se cierran compuertas al equilibrarse.',
    exam: 'Fase 1: Entrada masiva de Sodio (Na+) que vuelve positivo el interior celular.',
    colorGroup: '#944920'
  },
  {
    id: 54,
    label: 'Repolarización (Salida de K+)',
    category: 'Potencial de Acción',
    group: 'potencial',
    desc: 'El interior positivo incomoda al potasio (cargas iguales se repelen). Los canales de potasio se abren y el K+ SALE volviendo a negativizar la neurona.',
    exam: 'Fase 2: Salida de Potasio (K+) para devolver la carga negativa interna.',
    colorGroup: '#944920'
  },
  {
    id: 55,
    label: 'Hiperpolarización & Bomba NaKa',
    category: 'Potencial de Acción',
    group: 'potencial',
    desc: 'El K+ sale de más ("encaprichado"). La Bomba Na+/K+ saca 3 Na+ y mete 2 K+, consumiendo energía para restablecer los -70 mV de reposo.',
    exam: 'Fórmula vital de examen: Bomba NaKa saca 3 Sodios (Na+) y mete 2 Potasios (K+).',
    colorGroup: '#944920'
  },
  {
    id: 56,
    label: 'Conducción Saltatoria (Nodos de Ranvier)',
    category: 'Potencial de Acción',
    group: 'potencial',
    desc: 'En axones mielinizados, el intercambio Na+/K+ solo ocurre en los Nodos de Ranvier entre vainas, acelerando drásticamente el impulso hacia el botón terminal.',
    exam: 'Conducción saltatoria: mucho más veloz que en axones amielínicos.',
    colorGroup: '#944920'
  }
];

export const neuroEdgesData: NeuroEdge[] = [
  // Conexiones de morfología
  { from: 1, to: 2, label: 'contiene núcleo' },
  { from: 1, to: 3, label: 'antenas receptoras' },
  { from: 1, to: 4, label: 'libera información' },

  // Clasificaciones
  { from: 1, to: 10, label: 'forma' },
  { from: 1, to: 11, label: 'función' },
  { from: 1, to: 12, label: 'longitud axón' },
  { from: 1, to: 13, label: 'prolongaciones' },

  // Conexiones Glía
  { from: 1, to: 20, label: 'sostén y nutrición' },
  { from: 20, to: 21, label: 'filtra alimento / BHE' },
  { from: 20, to: 22, label: 'produce LCR' },
  { from: 20, to: 23, label: 'defensa inmune' },
  { from: 20, to: 24, label: 'mielina en SNC' },
  { from: 20, to: 25, label: 'mielina en SNP' },
  { from: 4, to: 24, label: 'mielinizan' },
  { from: 4, to: 25, label: 'mielinizan' },

  // Conexiones Sinapsis
  { from: 4, to: 30, label: 'punto de unión' },
  { from: 4, to: 31, label: 'uniones GAP' },
  { from: 30, to: 32, label: 'elementos activos' },
  { from: 30, to: 33, label: 'limpieza hendidura' },
  { from: 30, to: 34, label: 'mecanismo receptor' },
  { from: 30, to: 35, label: 'variantes anatómicas' },

  // Conexiones Sistemas
  { from: 30, to: 40, label: 'neurotransmisor' },
  { from: 30, to: 41, label: 'neurotransmisor' },
  { from: 30, to: 42, label: 'neurotransmisor' },
  { from: 30, to: 43, label: 'neurotransmisor' },

  // Conexiones Potencial de Acción
  { from: 1, to: 50, label: 'estado basal' },
  { from: 50, to: 51, label: 'fuerzas bioeléctricas' },
  { from: 30, to: 52, label: 'apertura de canales' },
  { from: 52, to: 53, label: 'alcanza umbral' },
  { from: 53, to: 54, label: 'cierra Na+, abre K+' },
  { from: 54, to: 55, label: 'sale K+ y bomba NaKa' },
  { from: 55, to: 50, label: 'retorno a reposo' },
  { from: 4, to: 56, label: 'transmisión rápida' },
  { from: 56, to: 30, label: 'libera NT en terminal' }
];

export const neuroSystemsData: NeuroSystem[] = [
  {
    id: 'colinergico',
    name: 'Sistema Colinérgico',
    molecule: 'Acetilcolina',
    abbreviation: 'ACh',
    functions: [
      'Unión neuromuscular (contracción de músculo)',
      'Memoria y formación de recuerdos',
      'Mantenimiento de actividad eléctrica cerebral y electroencefalograma (EEG)',
      'Regulación de excitabilidad neuronal basal'
    ],
    hyperactivity: 'Convulsiones y, en su forma más severa, Epilepsia (por excesiva excitabilidad y contracción)',
    hypoactivity: 'Pérdida de memoria y Demencia (patología arquetípica: Enfermedad de Alzheimer)',
    producingNuclei: [
      'Núcleos del Prosencéfalo Basal',
      'Núcleos del Mesencéfalo'
    ],
    color: '#2b553c',
    clinicalNote: 'La clase resalta que más acetilcolina no produce "supermemoria", sino desestabilización en forma de convulsiones.'
  },
  {
    id: 'dopaminergico',
    name: 'Sistema Dopaminérgico',
    molecule: 'Dopamina',
    abbreviation: 'DA',
    functions: [
      'Control motor central (afinación y coordinación de movimientos finos)',
      'Estabilidad mental y contacto con la realidad'
    ],
    hyperactivity: 'Psicosis y pérdida de estabilidad mental (la manifestación crónica más representativa es la Esquizofrenia)',
    hypoactivity: 'Pérdida de afinación del control motor y temblores involuntarios (Enfermedad de Parkinson)',
    producingNuclei: [
      'Sustancia Negra (Substantia Nigra) en mesencéfalo',
      'Área Tegmental Ventral (ATV) en mesencéfalo'
    ],
    color: '#8a4b18',
    clinicalNote: 'Equilibrio crítico: exceso = psicosis/esquizofrenia; defecto = temblores/Parkinson.'
  },
  {
    id: 'noradrenergico',
    name: 'Sistema Noradrenérgico',
    molecule: 'Noradrenalina / Norepinefrina',
    abbreviation: 'NA / NE',
    functions: [
      'Regulación del tono emocional y humor basal',
      'Excitabilidad general del sistema nervioso'
    ],
    hyperactivity: 'Manía (acelere psicomotor, insomnio prolongado sin cansancio, conductas impulsivas de riesgo como efecto de cocaína, característico de fases maníacas del TAB)',
    hypoactivity: 'Depresión endógena / bioquímica (asociada al Trastorno Bipolar TAB, no originada por eventos ambientales)',
    producingNuclei: [
      'Locus Coeruleus (ubicado en la protuberancia / puente)'
    ],
    color: '#944920',
    clinicalNote: 'Ruta de síntesis explicada: Tirosina hidroxilasa -> se une con Litio -> L-DOPA -> Dopamina -> Noradrenalina. Por eso el Litio es el estabilizador cardinal en el TAB.'
  },
  {
    id: 'serotoninergico',
    name: 'Sistema Serotoninérgico',
    molecule: 'Serotonina',
    abbreviation: '5-HT',
    functions: [
      'Mantenimiento de regularidad en actividad cerebral y vigilia',
      'Control conductual e inhibición de impulsos / respuestas controladas'
    ],
    hyperactivity: 'Trastorno Obsesivo Compulsivo (TOC), tics faciales/guturales, Síndrome de Gilles de la Tourette y síntomas psicóticos por hipercontrol fallido',
    hypoactivity: 'Depresión común o situacional ("el agüite de la vida cotidiana": reprobar, ruptura sentimental, asaltos, falta de sueño o poca luz solar)',
    producingNuclei: [
      'Núcleos del Rafe (en el tallo cerebral)'
    ],
    color: '#205b76',
    clinicalNote: 'Diferencia clave de examen: Depresión por Serotonina = situacional/ambiental; Depresión por Noradrenalina = bioquímica/endógena del TAB.'
  }
];

export const actionPotentialStagesData: ActionPotentialStage[] = [
  {
    step: 1,
    name: 'Potencial de Reposo',
    voltage: '-70 mV',
    voltageNum: -70,
    description: 'La neurona está quieta y negativa por dentro respecto al exterior. Hay abundancia de aniones proteicos negativos (gordos, no pueden salir) y potasio (K+) dentro; mientras afuera abundan sodio (Na+) y cloro (Cl-).',
    ionMovement: 'Poco flujo. Canales cerrados. Cargas equilibradas en reposo.',
    channelsState: 'Compuertas de Na+ cerradas. Canales de fuga de K+ con leve permeabilidad.',
    analogyOrNote: 'La calma antes de la tormenta. Dos gradientes en conflicto: el gradiente eléctrico y el de concentración.',
    badgeColor: 'bg-[#2b553c] text-white'
  },
  {
    step: 2,
    name: 'Sumatoria de Estímulos & Entrada Inicial de Na+',
    voltage: '-65 a -55 mV',
    voltageNum: -60,
    description: 'La neurona recibe múltiples estímulos sinápticos simultáneos: excitatorios (verdes) e inhibitorios (rosas). La unión del neurotransmisor al receptor abre canales que dejan entrar sodio poco a poco.',
    ionMovement: 'El Na+ empieza a ingresar atraído por el gradiente eléctrico (negatividad interna) y de concentración.',
    channelsState: 'Canales dependientes de ligando abiertos por neurotransmisores.',
    analogyOrNote: 'Promedio algebraico: ¿ganan los estímulos excitatorios o los inhibitorios?',
    badgeColor: 'bg-[#1d5e68] text-white'
  },
  {
    step: 3,
    name: 'Potencial Umbral',
    voltage: '-50 mV',
    voltageNum: -50,
    description: 'Es el mínimo indispensable para que la neurona se encienda. Al tocar los -50 mV, toda la membrana de la neurona sufre un "escalofrío" en automático y abre todas sus compuertas de sodio sin requerir más estímulos.',
    ionMovement: 'Inicio del flujo torrencial de Sodio (Na+).',
    channelsState: 'Apertura sincronizada masiva de canales de Na+ dependientes de voltaje.',
    analogyOrNote: 'Punto de no retorno: la neurona responde bajo la ley del "todo o nada".',
    badgeColor: 'bg-amber-600 text-white'
  },
  {
    step: 4,
    name: 'Fase 1: Despolarización',
    voltage: 'Hasta +30 / +40 mV',
    voltageNum: 35,
    description: 'El Sodio (Na+) entra desesperadamente en masa. El interior de la neurona se vuelve fuertemente positivo (+30 a +40 mV). El flash de luz viaja por la membrana. El sodio se equilibra y se cierran sus compuertas.',
    ionMovement: 'Entrada masiva de Na+ hacia el líquido intracelular.',
    channelsState: 'Canales de Na+ abiertos al máximo y luego se inactivan/cierran.',
    analogyOrNote: 'La llama que se propaga a lo largo del axón.',
    badgeColor: 'bg-red-600 text-white'
  },
  {
    step: 5,
    name: 'Fase 2: Repolarización',
    voltage: 'Descenso a -70 mV',
    voltageNum: -55,
    description: 'Con el interior ahora positivo, el Potasio (K+) se siente sumamente incómodo (cargas iguales se repelen). Los canales de potasio se abren de par en par y el Potasio SALE disparado, negativizando de nuevo el interior.',
    ionMovement: 'Salida masiva de Potasio (K+) hacia el líquido extracelular.',
    channelsState: 'Canales de Na+ cerrados/inactivados; Canales de K+ abiertos de par en par.',
    analogyOrNote: 'Salen cargas positivas para restaurar la negatividad interna.',
    badgeColor: 'bg-blue-600 text-white'
  },
  {
    step: 6,
    name: 'Fase 3: Hiperpolarización & Bomba NaKa',
    voltage: '-80 a -85 mV',
    voltageNum: -82,
    description: 'El potasio sigue saliendo "encaprichado" de más antes de cerrarse, llevando el voltaje por debajo de los -70 mV. Se activa intensamente la Bomba Na+/K+ ("Bomba NaKa"), que saca 3 iones de Sodio (Na+) y mete 2 de Potasio (K+).',
    ionMovement: 'Bomba NaKa transporta activamente: 3 Na+ hacia afuera y 2 K+ hacia adentro.',
    channelsState: 'Canales de K+ cerrándose lentamente; Bomba Na+/K+ ATPasa trabajando a tope.',
    analogyOrNote: 'Bomba NaKa: regla mnemotécnica 3 afuera (Na+) y 2 adentro (K+).',
    badgeColor: 'bg-purple-600 text-white'
  },
  {
    step: 7,
    name: 'Restablecimiento del Reposo & Liberación de Vesículas',
    voltage: '-70 mV',
    voltageNum: -70,
    description: 'La neurona queda restablecida a -70 mV lista para el próximo ciclo. Cuando la despolarización llega al botón terminal, activa la entrada de Calcio (Ca2+), el cual arrastra las vesículas hacia la membrana para liberar neurotransmisores.',
    ionMovement: 'Entrada de iones de Calcio (Ca2+) en el botón terminal axónico.',
    channelsState: 'Canales de Ca2+ activados por voltaje en el pie axónico.',
    analogyOrNote: 'El Calcio lanza a Brad Pitt a la hendidura sináptica para repetir la comunicación.',
    badgeColor: 'bg-[#2b553c] text-white'
  }
];

export const synapseVariantsData: SynapseVariant[] = [
  {
    type: 'Axodendrítica',
    description: 'Contacto entre un axón (botón terminal) y una dendrita (o espina dendrítica).',
    detail: 'Es la sinapsis prototípica más abundante y estudiada en el sistema nervioso.',
    tag: 'Prototípica'
  },
  {
    type: 'Axosomática',
    description: 'Contacto directo entre el axón presináptico y el cuerpo celular (soma) de la neurona.',
    detail: 'Tiene gran influencia inhibitoria o moduladora sobre la generación de potenciales de acción.',
    tag: 'Moduladora central'
  },
  {
    type: 'Axoaxónica',
    description: 'Contacto entre el axón de una neurona y el axón de otra.',
    detail: 'Permite regular directamente la cantidad de neurotransmisor que liberará la segunda neurona.',
    tag: 'Control directo'
  },
  {
    type: 'Dendrodendrítica',
    description: 'Comunicación directa entre dendritas de neuronas contiguas.',
    detail: 'Intercambio dendrita con dendrita para sincronización local de circuitos.',
    tag: 'Sincronía local'
  },
  {
    type: 'Axoextracelular',
    description: 'Ocurre cuando un axón está en crecimiento hacia el espacio extracelular.',
    detail: 'Busca activamente establecer un nuevo punto de comunicación sináptica.',
    tag: 'Desarrollo / Crecimiento'
  },
  {
    type: 'Axosináptica ("La Suegra Metiche")',
    description: 'Un axón que hace contacto sobre una sinapsis ya establecida.',
    detail: 'Preactiva y modula esa sinapsis para que encienda con mayor facilidad cuando llegue el impulso.',
    tag: 'Apodo de clase: "Suegra metiche"'
  },
  {
    type: 'Axosecretora',
    description: 'Contacto directo de un axón con un vaso sanguíneo para verter su contenido al torrente.',
    detail: 'Al ingresar a la sangre, la molécula ya no se llama neurotransmisor sino HORMONA (comunicación entre órganos y glándulas). Su química no cambia, sólo su nombre y destino.',
    tag: 'Transición a Hormona'
  }
];

export const flashcardsData: Flashcard[] = [
  {
    id: 'fc-1',
    category: 'Morfología Neuronal',
    subcategory: 'Definición & Estructura',
    question: '¿Cuál es la definición anatómica y funcional de la neurona según la clase?',
    answer: 'Es la unidad anatómica y funcional del sistema nervioso ("la más chiquita que hace la chamba").',
    examNote: 'Concepto base esencial para el examen.',
    tags: ['neurona', 'definicion', 'soma']
  },
  {
    id: 'fc-2',
    category: 'Morfología Neuronal',
    subcategory: 'Plasticidad & Estimulación',
    question: '¿Qué le sucede a las dendritas y al axón cuando la neurona está sobre-estimulada?',
    answer: 'Las dendritas crean ESPINAS DENDRÍTICAS para aumentar la superficie de activación. El axón puede RAMIFICARSE para multiplicar sus contactos de salida.',
    examNote: 'Detalle de examen: espinas dendríticas en dendritas; ramificaciones en axón.',
    tags: ['dendritas', 'espinas', 'axon']
  },
  {
    id: 'fc-3',
    category: 'Tipos de Neuronas',
    subcategory: 'Clasificación por Axón',
    question: '¿Cuál es la diferencia cardinal entre una neurona Golgi tipo I y una Golgi tipo II?',
    answer: 'Golgi tipo I: Tiene axón largo, requiere mucha mielina y su función es de ENVÍO a distancia.\nGolgi tipo II: Tiene axón corto y su función es de PROCESAMIENTO local.',
    examNote: 'Golgi I = envío/largo/mielina; Golgi II = procesamiento/corto.',
    tags: ['golgi', 'axon', 'clasificacion']
  },
  {
    id: 'fc-4',
    category: 'Tipos de Neuronas',
    subcategory: 'Clasificación por Forma y Prolongaciones',
    question: '¿Cuáles son las 4 formas de neuronas citadas en clase y sus 3 tipos por prolongaciones?',
    answer: 'Por forma: 1) Piramidal, 2) Granular, 3) Horizontal y 4) En Penacho.\nPor prolongaciones desde el soma: 1) Unipolares, 2) Bipolares y 3) Multipolares.',
    examNote: 'Revisar la diapositiva de formas: piramidal, granular, horizontal, en penacho.',
    tags: ['forma', 'prolongaciones', 'piramidal']
  },
  {
    id: 'fc-5',
    category: 'Glía / Neuroglia',
    subcategory: 'Barrera Hematoencefálica',
    question: '¿Qué célula glial forma la Barrera Hematoencefálica (BHE) y cuáles son sus 3 capas?',
    answer: 'El ASTROCITO (controla qué come la neurona). La BHE está compuesta por 3 capas:\n1) Pared del vaso sanguíneo\n2) Astrocito\n3) Membrana neuronal',
    examNote: 'Pregunta de examen segura: las 3 capas de la barrera hematoencefálica.',
    tags: ['astrocito', 'bhe', 'glia']
  },
  {
    id: 'fc-6',
    category: 'Glía / Neuroglia',
    subcategory: 'Mielina: Oligodendrocito vs Schwann',
    question: '¿Qué diferencia a los Oligodendrocitos de las Células de Schwann?',
    answer: 'Oligodendrocitos: Mielinizan en el SNC, abarcan MÚLTIPLES segmentos con baja tasa de recuperación.\nCélulas de Schwann: Mielinizan en el SNP, cubren un ÚNICO segmento con MAYOR tasa de recuperación.',
    examNote: 'SNC vs SNP; Múltiples vs Único segmento; Baja vs Alta recuperación.',
    tags: ['mielina', 'oligodendrocito', 'schwann']
  },
  {
    id: 'fc-7',
    category: 'Glía / Neuroglia',
    subcategory: 'Ependimocitos & Microglía',
    question: '¿Cuál es la función específica de los ependimocitos y de la microglía?',
    answer: 'Ependimocitos: Células ovoidales que producen Líquido Cefalorraquídeo (LCR) en los ventrículos.\nMicroglía: Células inmunitarias que identifican agentes invasores y los eliminan hacia la sangre venosa.',
    examNote: 'Ependimocitos = LCR ventricular; Microglía = fagocitosis/defensa venosa.',
    tags: ['ependimocitos', 'microglia', 'lcr']
  },
  {
    id: 'fc-8',
    category: 'Sinapsis',
    subcategory: 'Sinapsis Eléctrica vs Química',
    question: '¿En qué se diferencian la sinapsis eléctrica y la sinapsis química?',
    answer: 'Sinapsis Eléctrica: Las membranas SÍ se tocan mediante UNIONES GAP. El flujo de iones es directo sin neurotransmisor, inmediato y más primitivo (anfibios/reptiles).\nSinapsis Química: Hay una hendidura sináptica (no se tocan). Requiere neurotransmisor, receptores y enzimas. Es la predominante en el ser humano.',
    examNote: 'Uniones GAP = Eléctrica; Neurotransmisores = Química.',
    tags: ['sinapsis', 'gap', 'quimica']
  },
  {
    id: 'fc-9',
    category: 'Sinapsis',
    subcategory: 'La Película de la Sinapsis',
    question: '¿Qué papel representan Brad Pitt, Jennifer Aniston y La Yoli en la metáfora de clase?',
    answer: 'Brad Pitt: El Neurotransmisor (actor principal).\nJennifer Aniston: Los Receptores en la membrana postsináptica.\nAngelina Jolie ("La Yoli"): Las Enzimas en la hendidura sináptica, celosísimas, que limpian el mensaje.',
    examNote: 'La neurona postsináptica NO se come al neurotransmisor: sólo se une al receptor, activa el cambio y se despega.',
    tags: ['analogia', 'bradpitt', 'enzimas']
  },
  {
    id: 'fc-10',
    category: 'Sinapsis',
    subcategory: 'Destino Enzimático & Fármacos',
    question: '¿Cuáles son las 3 cosas que una enzima puede hacer con el neurotransmisor libre en la hendidura?',
    answer: '1) RECAPTURARLO: devolverlo a la membrana presináptica.\n2) INACTIVARLO: colocarle un anclaje químico que le impida acoplarse al receptor.\n3) DEGRADARLO: desbaratarlo químicamente.',
    examNote: 'Los ISRS impiden la limpieza enzimática para que el neurotransmisor siga actuando.',
    tags: ['enzima', 'recaptura', 'isrs']
  },
  {
    id: 'fc-11',
    category: 'Receptores',
    subcategory: 'Ionotrópicos vs Metabotrópicos',
    question: '¿Cómo funcionan los receptores ionotrópicos y metabotrópicos según la analogía de construcción?',
    answer: 'Ionotrópico: Es receptor y canal a la vez. Al recibir al neurotransmisor, se abre directamente (Maestro Albañil).\nMetabotrópico acoplado a canal: El receptor activa una proteína G que le avisa al canal vecino "ábrete" (Arquitecto).\nMetabotrópico acoplado a enzima: Activa segundos mensajeros/ADN para respuestas complejas (Diseñador de interiores).',
    examNote: 'Ionotrópico = canal directo; Metabotrópico = segundos mensajeros / acoplado.',
    tags: ['receptores', 'ionotropico', 'metabotropico']
  },
  {
    id: 'fc-12',
    category: 'Sinapsis Anatómica',
    subcategory: 'Variantes Especiales',
    question: '¿Qué es una sinapsis Axosináptica y qué ocurre en una Axosecretora?',
    answer: 'Axosináptica ("La suegra metiche"): Un axón hace contacto sobre una sinapsis ya existente, preactivándola para que encienda con facilidad.\nAxosecretora: El axón vierte su contenido a un vaso sanguíneo; al entrar al torrente se denomina HORMONA (comunicación entre órganos/glándulas).',
    examNote: 'Misma química, diferente nombre: en sinapsis es neurotransmisor; en sangre es hormona.',
    tags: ['suegrametiche', 'axosecretora', 'hormona']
  },
  {
    id: 'fc-13',
    category: 'Sistemas Neuroquímicos',
    subcategory: 'Sistema Colinérgico (ACh)',
    question: 'Funciones, efectos de hiper/hipoactividad y núcleos del Sistema Colinérgico (ACh):',
    answer: 'Molécula: Acetilcolina (ACh).\nFunciones: Unión neuromuscular, memoria y ritmo EEG.\nHiperactividad: Convulsiones / epilepsia.\nHipoactividad: Pérdida de memoria / Alzheimer.\nNúcleos productores: Prosencéfalo Basal y núcleos Mesencefálicos.',
    examNote: 'Mucho ACh no da más memoria: da convulsiones.',
    tags: ['acetilcolina', 'alzheimer', 'convulsiones']
  },
  {
    id: 'fc-14',
    category: 'Sistemas Neuroquímicos',
    subcategory: 'Sistema Dopaminérgico (DA)',
    question: 'Funciones, efectos de hiper/hipoactividad y núcleos del Sistema Dopaminérgico (DA):',
    answer: 'Molécula: Dopamina (DA).\nFunciones: Control motor central y estabilidad mental.\nHiperactividad: Psicosis y Esquizofrenia.\nHipoactividad: Temblores y Enfermedad de Parkinson.\nNúcleos productores: Sustancia Negra y Área Tegmental Ventral (ATV) en mesencéfalo.',
    examNote: 'Hiper = Esquizofrenia; Hipo = Parkinson.',
    tags: ['dopamina', 'parkinson', 'esquizofrenia']
  },
  {
    id: 'fc-15',
    category: 'Sistemas Neuroquímicos',
    subcategory: 'Sistema Noradrenérgico (NA / NE)',
    question: 'Funciones, hiper/hipoactividad, síntesis con Litio y núcleo de Noradrenalina:',
    answer: 'Molécula: Noradrenalina (NA) o Norepinefrina (NE).\nFunciones: Tono emocional y excitabilidad.\nHiperactividad: Manía (Trastorno Afectivo Bipolar - TAB, conductas de riesgo, insomnio).\nHipoactividad: Depresión endógena/bioquímica (asociada al TAB).\nSíntesis: Tirosina hidroxilasa + Litio -> L-DOPA -> Dopamina -> Noradrenalina. (Por eso se receta Litio en el TAB).\nNúcleo productor: Locus Coeruleus (protuberancia).',
    examNote: 'Núcleo: Locus Coeruleus. Manejo con Litio en el TAB.',
    tags: ['noradrenalina', 'tab', 'locuscoeruleus', 'litio']
  },
  {
    id: 'fc-16',
    category: 'Sistemas Neuroquímicos',
    subcategory: 'Sistema Serotoninérgico (5-HT)',
    question: 'Funciones, efectos de hiper/hipoactividad y núcleos de la Serotonina (5-HT):',
    answer: 'Molécula: Serotonina (5-HT).\nFunciones: Control conductual, respuestas controladas y vigilia.\nHiperactividad: TOC, tics faciales/guturales, Gilles de la Tourette y psicosis.\nHipoactividad: Depresión común / situacional ("el agüite cotidiano").\nNúcleos productores: Núcleos del Rafe.',
    examNote: 'Diferencia de examen: Depresión situacional = 5-HT; Depresión bioquímica endógena = NA.',
    tags: ['serotonina', 'toc', 'depresion', 'rafe']
  },
  {
    id: 'fc-17',
    category: 'Potencial de Acción',
    subcategory: 'Potencial de Reposo',
    question: '¿Cuál es el valor del Potencial de Reposo y qué iones determinan su carga?',
    answer: 'Es de -70 mV en promedio.\nInterior: Aniones proteicos (carga negativa, moléculas gordas que no pueden salir) y Potasio (K+ positivo). Ganan los aniones = interior negativo.\nExterior: Sodio (Na+ positivo) y Cloro (Cl- negativo). Gana el sodio = exterior positivo.',
    examNote: 'Reposo = -70 mV. Aniones proteicos confinados en el interior.',
    tags: ['reposo', '70mv', 'potencial']
  },
  {
    id: 'fc-18',
    category: 'Potencial de Acción',
    subcategory: 'Potencial Umbral',
    question: '¿Cuál es el Potencial Umbral y qué desencadena en la neurona?',
    answer: 'Es de -50 mV en promedio. Es el mínimo indispensable para que la neurona se encienda. Al alcanzarse, toda la membrana abre de golpe sus canales de Sodio (Na+) produciendo el "escalofrío" bioeléctrico.',
    examNote: 'Umbral = -50 mV. Provoca la apertura masiva de canales de sodio.',
    tags: ['umbral', '50mv', 'canales']
  },
  {
    id: 'fc-19',
    category: 'Potencial de Acción',
    subcategory: 'Las 3 Fases del Potencial',
    question: '¿Cuáles son las 3 fases del potencial de acción y qué ion protagoniza cada una?',
    answer: '1) DESPOLARIZACIÓN: Entrada masiva de Sodio (Na+), interior se vuelve positivo (+30 a +40 mV).\n2) REPOLARIZACIÓN: Salida de Potasio (K+), repeliéndose por la carga positiva del sodio y negativizando la neurona.\n3) HIPERPOLARIZACIÓN: El Potasio sigue saliendo de más ("encaprichado") pasando de -70 mV, activándose la Bomba Na+/K+.',
    examNote: '1) Entra Na+ -> 2) Sale K+ -> 3) Sale K+ extra + Bomba NaKa.',
    tags: ['despolarizacion', 'repolarizacion', 'hiperpolarizacion']
  },
  {
    id: 'fc-20',
    category: 'Potencial de Acción',
    subcategory: 'Bomba Na+/K+ (Bomba NaKa)',
    question: '¿Qué hace exactamente la Bomba Na+/K+ ("Bomba NaKa")?',
    answer: 'Saca 3 iones de Sodio (Na+) del interior de la neurona y mete 2 iones de Potasio (K+). Esto restablece el gradiente original y el potencial de reposo en -70 mV.',
    examNote: 'Regla de oro de examen: 3 Sodios hacia afuera, 2 Potasios hacia adentro.',
    tags: ['bomba', 'naka', 'sodio', 'potasio']
  },
  {
    id: 'fc-21',
    category: 'Potencial de Acción',
    subcategory: 'Conducción Saltatoria & Calcio',
    question: '¿Qué rol juegan los Nodos de Ranvier y el Calcio al final del axón?',
    answer: 'Nodos de Ranvier: Puntos sin mielina donde ocurre exclusivamente el intercambio iónico, haciendo que el impulso "brinque" con enorme rapidez.\nIones de Calcio (Ca2+): Al llegar el impulso al botón terminal, el Ca2+ entra y empuja/arrastra las vesículas hacia la membrana para liberar al neurotransmisor.',
    examNote: 'Mielina acelera por saltos en Nodos de Ranvier; el Calcio libera vesículas.',
    tags: ['ranvier', 'calcio', 'conduccion']
  }
];

export const classLectureNotesMarkdown = `---
fecha: 2026-10-26
materia: Neuroanatomía
tema: La Neurona, Glía, Sinapsis, Neurotransmisores y Potencial de Acción
estado: 🟢 Completo
tags:
  - notas-clase
  - neuroanatomia
  - neurona-sinapsis
---

## 🎯 Objetivos de la Clase
- [x] Comprender la neurona como unidad anatómica y funcional del SN.
- [x] Clasificar las neuronas por forma, función, neurotransmisor, longitud de axón y prolongaciones.
- [x] Detallar las células de la neuroglia (astrocitos, ependimocitos, microglía, oligodendrocitos, Schwann).
- [x] Analizar la sinapsis química y eléctrica (uniones GAP).
- [x] Dominar los 4 grandes sistemas neuroquímicos (ACh, DA, NA/NE, 5-HT) con su tabla clínica.
- [x] Describir paso a paso el potencial de reposo (-70 mV), umbral (-50 mV), despolarización, repolarización, hiperpolarización y la bomba Na+/K+.

---

## 📝 Apuntes Principales de Clase

### 1. La Neurona
- **Definición:** La unidad anatómica y funcional del sistema nervioso ("la más chiquita que hace la chamba").
- **Partes estructurales:**
  - **Soma / Cuerpo:** Contiene el núcleo y centros metabólicos.
  - **Dendritas:** Típicamente absorben la información. Cuando está muy estimulada, crea **espinas dendríticas** para aumentar la superficie de activación.
  - **Axón:** Típicamente libera información, mielinizado. El axón se puede ramificar cuando está sobre-estimulado. Botón terminal / pie axónico.

### 2. Tipos de Neuronas
- **Según su forma:**
  - Piramidal
  - Granular
  - Horizontal
  - En Penacho
- **Según su función:**
  - Sensorial (aferente)
  - Interneurona (asociación)
  - Motora (eferente)
- **Según su neurotransmisor:**
  - Colinérgicas, Dopamínicas, Noradrenérgicas, Gabaérgicas... (hasta 52 identificados en Pinel).
- **Según la longitud de su axón:**
  - **Golgi tipo I:** Axón largo, necesita mucha mielina, función de envío / proyección a distancia.
  - **Golgi tipo II:** Axón corto, función de procesamiento local.
- **Según su número de prolongaciones desde el soma:**
  - Unipolares
  - Bipolares
  - Multipolares

### 3. Glía / Neuroglia ("Pegamento")
- **Ependimocitos:** Células ovoidales encargadas de la producción de líquido cefalorraquídeo (LCR) en los ventrículos cerebrales.
- **Astrocito:** Forma la barrera hematoencefálica (BHE) y controla qué "come" la neurona.
  - **Barrera Hematoencefálica (3 capas):**
    1. Pared del vaso sanguíneo
    2. Astrocito
    3. Membrana neuronal
- **Microglía:** Identifica agentes invasores y los elimina hacia la sangre venosa.
- **Mielina (célula de consistencia grasa):**
  - **Oligodendrocitos:** En el SNC, cubren múltiples segmentos de mielina, baja tasa de recuperación.
  - **Célula de Schwann:** En el SNP, cubre un único segmento de mielina, mayor tasa de recuperación.
  - **Nodos de Ranvier:** Espacios sin mielina que permiten la conducción saltatoria veloz.

### 4. Sinapsis
- **Lugar de comunicación entre neuronas.**
- **Según su modo:**
  - **Sinapsis Eléctrica:** Membrana presináptica y postsináptica SÍ se tocan mediante **uniones GAP**. Envían iones directamente; más primitiva (anfibios, reptiles, pocos mamíferos); inmediata y sin modulación química.
  - **Sinapsis Química:** Predominante en el ser humano. Hay separación (hendidura sináptica). Requiere neurotransmisor. No es inmediata pero sí rápida.
- **Estructuras de la Sinapsis Química:**
  1. Membrana presináptica (vesículas con neurotransmisor).
  2. Hendidura o espacio sináptico (enzimas).
  3. Membrana postsináptica (receptores).
- **Metáfora de la Película de Clase:**
  - **Brad Pitt:** Neurotransmisor (actor principal).
  - **Jennifer Aniston:** Receptores postsinápticos.
  - **Angelina Jolie ("La Yoli"):** Enzimas celosísimas en la hendidura que atrapan al neurotransmisor para limpiar el mensaje.
  - *La neurona siguiente no se traga al neurotransmisor:* solo se une temporalmente al receptor, genera el cambio y se despega.
- **Acciones de las enzimas sobre el neurotransmisor (3 destinos):**
  1. **Recapturar:** Devolver a la membrana presináptica.
  2. **Inactivar:** Anclaje químico que le impide acoplarse al receptor.
  3. **Degradar:** Desbaratar químicamente.
- **Fármacos de engaño:**
  - *ISRS:* Evitan que las enzimas limpien/recapturen para mantener activo el efecto.
  - *Bloqueadores (antipsicóticos):* Mantienen ocupados los receptores impidiendo su activación.
- **Según sus efectos:**
  - *Tipo I:* Excitatorio ("enciéndete", vuelve la carga más positiva).
  - *Tipo II:* Inhibitorio ("apágate", vuelve la carga más negativa).
- **Según el lugar anatómico:**
  - *Axodendrítica:* Axón con dendrita (prototípica).
  - *Axosomática:* Axón con soma.
  - *Axoaxónica:* Axón con axón.
  - *Dendrodendrítica:* Dendrita con dendrita.
  - *Axoextracelular:* Axón en crecimiento buscando conexión.
  - *Axosináptica ("La suegra metiche"):* Axón que preactiva una sinapsis establecida.
  - *Axosecretora:* Axón con un vaso sanguíneo; al entrar al torrente sanguíneo el transmisor pasa a llamarse **HORMONA** (comunicador entre órganos y glándulas).

### 5. Tipos de Receptores
- **Ionotrópicos:** Son receptor y canal a la vez. Al acoplarse el neurotransmisor, se abren directamente y permiten el paso de iones (*Analogía: Maestro albañil*).
- **Metabotrópicos:** No son un canal directo; están acoplados a mecanismos intracelulares:
  - *Acoplados a canal:* Activan una proteína G que le ordena al canal vecino abrirse (*Analogía: Arquitecto*).
  - *Acoplados a enzima:* Activan una enzima y segundos mensajeros para modular procesos metabólicos o ADN (*Analogía: Diseñador de interiores*).

### 6. Clasificación de Neurotransmisores (52 en Pinel)
- **Aminoácidos:** Glutamato, GABA, Glicina, Aspartato.
- **Monoaminas:**
  - *Catecolaminas:* Dopamina, Adrenalina, Noradrenalina.
  - *Indolaminas:* Serotonina.
- **Gases solubles:** Óxido nítrico, Monóxido de carbono.
- **Acetilcolina:** Grupo propio.
- **Neuropéptidos:** Endorfinas.

### 7. Los 4 Grandes Sistemas Neuroquímicos

| Sistema | Neurotransmisor | Función Principal | Hiperactividad | Hipoactividad | Núcleos Productores |
|---|---|---|---|---|---|
| **Colinérgico** | Acetilcolina (ACh) | - Unión muscular<br>- Memoria<br>- Ritmo electroencefalográfico (EEG) | Convulsiones / Epilepsia | Pérdida de memoria / Alzheimer | - Prosencéfalo basal<br>- Núcleos mesencefálicos |
| **Dopaminérgico** | Dopamina (DA) | - Control motor fino<br>- Estabilidad mental | Psicosis = Esquizofrenia | Pérdida de control motor / Parkinson | - Sustancia Negra<br>- Área Tegmental Ventral (ATV) |
| **Noradrenérgico** | Noradrenalina (NA) / Norepinefrina (NE) | - Tono emocional<br>- Excitabilidad del sistema | Manía = TAB (acelere, conductas de riesgo) | Depresión endógena/bioquímica = TAB | Locus Coeruleus (protuberancia) |
| **Serotoninérgico** | Serotonina (5-HT) | - Control conductual<br>- Respuestas controladas<br>- Vigilia | TOC, tics de Tourette, psicosis | Depresión común / situacional ("el agüite cotidiano") | Núcleos del Rafe |

> **Nota sobre el Litio y el TAB:** La ruta de síntesis requiere Tirosina hidroxilasa que se une con Litio para formar L-DOPA -> Dopamina -> Noradrenalina. Por ello, a pacientes con TAB se les prescribe Litio.

### 8. Potencial de Acción & Bioelectricidad
- **Potencial de Reposo (-70 mV):**
  - *Interior celular:* Muchos aniones proteicos con carga negativa (moléculas de proteína gordas que no pueden salir) + Potasio (K+ positivo). Resultado neto = negativo (-70 mV).
  - *Exterior celular:* Mucho Sodio (Na+ positivo) y Cloro (Cl- negativo). Resultado neto = positivo.
- **Las 2 Energías Opuestas:**
  1. *Gradiente Eléctrico:* Cargas iguales se repelen, cargas opuestas se atraen (el Sodio Na+ se siente fuertemente atraído por los aniones proteicos negativos internos).
  2. *Gradiente de Concentración:* Quiere equilibrar las cantidades de cada ion adentro y afuera.
  - El Sodio (Na+) está desesperado por entrar por ambas fuerzas combinadas.
- **Potencial Umbral (-50 mV):** Mínimo indispensable para que la neurona se encienda. Al tocar los -50 mV, la membrana sufre un "escalofrío" y abre todas sus compuertas de sodio.
- **Fases del Potencial de Acción:**
  1. **Despolarización:** Entrada masiva de Sodio (Na+), volviendo el interior positivo hasta +30/+40 mV.
  2. **Repolarización:** El Sodio se detiene y cierra; las cargas positivas internas repelen al Potasio (K+). Los canales de potasio se abren y el K+ SALE, negativizando la neurona.
  3. **Hiperpolarización:** El Potasio sigue saliendo de más ("encaprichado") pasando los -70 mV.
- **Bomba Na+/K+ (Bomba "NaKa"):**
  - Saca **3 iones de Sodio (Na+)** y mete **2 iones de Potasio (K+)**.
  - Restablece el potencial de reposo en -70 mV.
- **Conducción Saltatoria:** En axones mielinizados, el intercambio ocurre únicamente en los **Nodos de Ranvier**, saltando el impulso a gran velocidad.
- **Liberación final:** Al llegar al botón axónico, el cambio de carga hace que los **iones de Calcio (Ca2+)** arrastren las vesículas para liberarlas a la hendidura sináptica.
`;
