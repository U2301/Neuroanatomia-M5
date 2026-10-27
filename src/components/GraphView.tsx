import React, { useEffect, useRef, useState } from 'react';
import { Network } from 'vis-network/standalone';
import { DataSet } from 'vis-data';
import { NeuroNode } from '../types';
import { neuroNodesData, neuroEdgesData } from '../data/neuroData';
import { 
  Crosshair, 
  Plus, 
  Minus, 
  Sparkles, 
  Activity, 
  Network as NetworkIcon,
  HelpCircle,
  Zap,
  Layers,
  ArrowRight
} from 'lucide-react';

export const GraphView: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const networkInstanceRef = useRef<any>(null);
  const nodesDataSetRef = useRef<any>(null);
  const edgesDataSetRef = useRef<any>(null);

  const [selectedNode, setSelectedNode] = useState<NeuroNode>(() => {
    return neuroNodesData.find(n => n.id === 1) || neuroNodesData[0];
  });
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [nodeSearchTerm, setNodeSearchTerm] = useState<string>('');

  useEffect(() => {
    let isMounted = true;

    const initNetwork = () => {
      if (!containerRef.current) return;

      try {
        const formattedNodes = neuroNodesData.map(node => {
          let bgColor = "#fdfbf7";
          let borderColor = node.colorGroup || "#2b553c";
          let fontColor = "#231f1c";

          if (node.id === 1) {
            bgColor = "#2b553c";
            borderColor = "#1b3a28";
            fontColor = "#ffffff";
          } else if (node.group === "neurona") {
            bgColor = "#edf5f0";
            borderColor = "#2b553c";
            fontColor = "#162e21";
          } else if (node.group === "tipos") {
            bgColor = "#eaf3f5";
            borderColor = "#1d5e68";
            fontColor = "#0f3238";
          } else if (node.group === "glia") {
            bgColor = "#faf3e8";
            borderColor = "#8a4b18";
            fontColor = "#4a2408";
          } else if (node.group === "sinapsis") {
            bgColor = "#eef4f8";
            borderColor = "#205b76";
            fontColor = "#0e3444";
          } else if (node.group === "sistemas") {
            bgColor = "#f0f5f1";
            borderColor = "#436d53";
            fontColor = "#1d3a29";
          } else if (node.group === "potencial") {
            bgColor = "#fdf3ee";
            borderColor = "#944920";
            fontColor = "#54210a";
          }

          return {
            id: node.id,
            label: node.label,
            title: `${node.label} (${node.category})`,
            category: node.category,
            group: node.group,
            shape: node.id === 1 ? 'box' : 'dot',
            size: node.id === 1 ? 30 : 18,
            color: {
              background: bgColor,
              border: borderColor,
              highlight: {
                background: '#ffb692',
                border: '#944920'
              },
              hover: {
                background: '#faede6',
                border: borderColor
              }
            },
            font: {
              color: fontColor,
              face: 'Plus Jakarta Sans, system-ui, sans-serif',
              size: node.id === 1 ? 14 : 12,
              bold: {
                mod: 'bold'
              }
            },
            borderWidth: node.id === 1 ? 3 : 2,
            shadow: {
              enabled: true,
              color: 'rgba(35, 31, 28, 0.08)',
              size: 5,
              x: 1,
              y: 2
            }
          };
        });

        const formattedEdges = neuroEdgesData.map(edge => ({
          id: `${edge.from}-${edge.to}`,
          from: edge.from,
          to: edge.to,
          label: edge.label,
          arrows: edge.arrows || 'to',
          color: {
            color: '#b8afa6',
            highlight: '#944920',
            hover: '#704812'
          },
          font: {
            color: '#787169',
            size: 9,
            face: 'Plus Jakarta Sans',
            background: 'rgba(253, 251, 247, 0.85)',
            strokeWidth: 0
          },
          smooth: {
            type: 'continuous',
            roundness: 0.2
          },
          width: 1.5
        }));

        const nodesDataSet = new DataSet(formattedNodes as any);
        const edgesDataSet = new DataSet(formattedEdges as any);

        nodesDataSetRef.current = nodesDataSet;
        edgesDataSetRef.current = edgesDataSet;

        const data = {
          nodes: nodesDataSet,
          edges: edgesDataSet
        };

        const options = {
          physics: {
            enabled: true,
            solver: 'forceAtlas2Based',
            forceAtlas2Based: {
              gravitationalConstant: -45,
              centralGravity: 0.008,
              springLength: 130,
              springConstant: 0.08,
              damping: 0.75,
              avoidOverlap: 0.6
            },
            stabilization: {
              enabled: true,
              iterations: 150,
              updateInterval: 25
            }
          },
          interaction: {
            hover: true,
            tooltipDelay: 180,
            navigationButtons: false,
            keyboard: false,
            zoomView: true,
            dragView: true
          }
        };

        const network = new Network(containerRef.current, data, options);
        networkInstanceRef.current = network;

        network.on('click', (params) => {
          if (params.nodes && params.nodes.length > 0) {
            const nodeId = params.nodes[0];
            const clickedNode = neuroNodesData.find(n => n.id === nodeId);
            if (clickedNode && isMounted) {
              setSelectedNode(clickedNode);
            }
          }
        });

        network.once('stabilizationIterationsDone', () => {
          if (network && containerRef.current) {
            network.fit({
              animation: {
                duration: 600,
                easingFunction: 'easeInOutQuad'
              }
            });
          }
        });

      } catch (err) {
        console.error('Error initializing Vis Network:', err);
      }
    };

    const timer = setTimeout(() => {
      initNetwork();
    }, 50);

    return () => {
      isMounted = false;
      clearTimeout(timer);
      if (networkInstanceRef.current) {
        networkInstanceRef.current.destroy();
        networkInstanceRef.current = null;
      }
    };
  }, []);

  // Filter nodes on category click
  const handleFilter = (groupKey: string) => {
    setActiveFilter(groupKey);
    if (!nodesDataSetRef.current) return;

    if (groupKey === 'all') {
      const allUpdates = neuroNodesData.map(node => ({
        id: node.id,
        hidden: false
      }));
      nodesDataSetRef.current.update(allUpdates);
    } else {
      const updates = neuroNodesData.map(node => ({
        id: node.id,
        hidden: node.group !== groupKey && node.id !== 1 // keep root visible
      }));
      nodesDataSetRef.current.update(updates);
    }

    if (networkInstanceRef.current) {
      networkInstanceRef.current.fit({ animation: { duration: 400 } });
    }
  };

  // Node selection from search
  const handleSelectFromSearch = (nodeId: number) => {
    const found = neuroNodesData.find(n => n.id === nodeId);
    if (!found) return;
    setSelectedNode(found);
    if (networkInstanceRef.current) {
      networkInstanceRef.current.focus(nodeId, {
        scale: 1.25,
        animation: { duration: 500, easingFunction: 'easeInOutQuad' }
      });
      networkInstanceRef.current.selectNodes([nodeId]);
    }
  };

  const handleZoomIn = () => {
    if (networkInstanceRef.current) {
      const currentScale = networkInstanceRef.current.getScale();
      networkInstanceRef.current.moveTo({ scale: currentScale * 1.25, animation: { duration: 250 } });
    }
  };

  const handleZoomOut = () => {
    if (networkInstanceRef.current) {
      const currentScale = networkInstanceRef.current.getScale();
      networkInstanceRef.current.moveTo({ scale: currentScale / 1.25, animation: { duration: 250 } });
    }
  };

  const handleResetZoom = () => {
    if (networkInstanceRef.current) {
      networkInstanceRef.current.fit({ animation: { duration: 400 } });
    }
  };

  const filteredSearchList = neuroNodesData.filter(n =>
    nodeSearchTerm === '' ? false : (
      n.label.toLowerCase().includes(nodeSearchTerm.toLowerCase()) ||
      n.desc.toLowerCase().includes(nodeSearchTerm.toLowerCase())
    )
  );

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Network Canvas Column */}
      <div className="lg:w-2/3 flex flex-col space-y-4">
        
        {/* Controls & Filter Bar */}
        <div className="bg-white rounded-xl border border-[#d4cbc2] p-3 shadow-2xs flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-semibold text-[#787169] mr-1 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" />
              Categorías:
            </span>
            <button
              onClick={() => handleFilter('all')}
              className={`px-2.5 py-1 text-xs rounded-md transition cursor-pointer font-medium ${
                activeFilter === 'all'
                  ? 'bg-[#2b553c] text-white shadow-2xs'
                  : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ede3d8]'
              }`}
            >
              Todos ({neuroNodesData.length})
            </button>
            <button
              onClick={() => handleFilter('neurona')}
              className={`px-2.5 py-1 text-xs rounded-md transition cursor-pointer font-medium ${
                activeFilter === 'neurona'
                  ? 'bg-[#2b553c] text-white shadow-2xs'
                  : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ede3d8]'
              }`}
            >
              Morfología
            </button>
            <button
              onClick={() => handleFilter('tipos')}
              className={`px-2.5 py-1 text-xs rounded-md transition cursor-pointer font-medium ${
                activeFilter === 'tipos'
                  ? 'bg-[#1d5e68] text-white shadow-2xs'
                  : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ede3d8]'
              }`}
            >
              Tipos
            </button>
            <button
              onClick={() => handleFilter('glia')}
              className={`px-2.5 py-1 text-xs rounded-md transition cursor-pointer font-medium ${
                activeFilter === 'glia'
                  ? 'bg-[#8a4b18] text-white shadow-2xs'
                  : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ede3d8]'
              }`}
            >
              Glía
            </button>
            <button
              onClick={() => handleFilter('sinapsis')}
              className={`px-2.5 py-1 text-xs rounded-md transition cursor-pointer font-medium ${
                activeFilter === 'sinapsis'
                  ? 'bg-[#205b76] text-white shadow-2xs'
                  : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ede3d8]'
              }`}
            >
              Sinapsis
            </button>
            <button
              onClick={() => handleFilter('sistemas')}
              className={`px-2.5 py-1 text-xs rounded-md transition cursor-pointer font-medium ${
                activeFilter === 'sistemas'
                  ? 'bg-[#436d53] text-white shadow-2xs'
                  : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ede3d8]'
              }`}
            >
              4 Sistemas
            </button>
            <button
              onClick={() => handleFilter('potencial')}
              className={`px-2.5 py-1 text-xs rounded-md transition cursor-pointer font-medium ${
                activeFilter === 'potencial'
                  ? 'bg-[#944920] text-white shadow-2xs'
                  : 'bg-[#f5efe9] text-[#49423c] hover:bg-[#ede3d8]'
              }`}
            >
              Potencial de Acción
            </button>
          </div>

          {/* Quick Node Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar nodo..."
              value={nodeSearchTerm}
              onChange={(e) => setNodeSearchTerm(e.target.value)}
              className="text-xs px-2.5 py-1 border border-[#d4cbc2] rounded-md bg-[#fbf8f5] w-36 sm:w-44 focus:outline-none focus:ring-1 focus:ring-[#2b553c]"
            />
            {filteredSearchList.length > 0 && (
              <div className="absolute right-0 top-8 z-50 bg-white border border-[#d4cbc2] rounded-lg shadow-lg w-56 max-h-48 overflow-y-auto p-1 text-xs">
                {filteredSearchList.map(node => (
                  <button
                    key={node.id}
                    onClick={() => {
                      handleSelectFromSearch(node.id);
                      setNodeSearchTerm('');
                    }}
                    className="w-full text-left px-2 py-1.5 hover:bg-[#f5efe9] rounded flex items-center justify-between text-[#231f1c]"
                  >
                    <span className="font-medium truncate">{node.label}</span>
                    <span className="text-[10px] text-[#787169]">{node.category}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Graph Container */}
        <div className="relative bg-white rounded-2xl border border-[#d4cbc2] overflow-hidden shadow-parchment">
          <div
            id="network-container"
            ref={containerRef}
            className="w-full h-[520px] bg-[#fcfbf9] bg-notebook cursor-grab active:cursor-grabbing"
          />

          {/* Overlay Navigation Buttons */}
          <div className="absolute bottom-4 right-4 flex flex-col gap-1.5 bg-white/95 backdrop-blur-xs p-1.5 rounded-xl border border-[#d4cbc2] shadow-sm">
            <button
              onClick={handleZoomIn}
              title="Acercar mapa"
              className="p-1.5 hover:bg-[#f5efe9] rounded-lg text-[#49423c] transition cursor-pointer"
            >
              <Plus className="w-4 h-4" />
            </button>
            <button
              onClick={handleZoomOut}
              title="Alejar mapa"
              className="p-1.5 hover:bg-[#f5efe9] rounded-lg text-[#49423c] transition cursor-pointer"
            >
              <Minus className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetZoom}
              title="Centrar mapa completo"
              className="p-1.5 hover:bg-[#f5efe9] rounded-lg text-[#49423c] transition cursor-pointer"
            >
              <Crosshair className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Selected Node Details Drawer */}
      <div className="lg:w-1/3 flex flex-col space-y-4">
        <div className="bg-white rounded-2xl border border-[#d4cbc2] p-5 shadow-parchment flex flex-col justify-start">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#d4cbc2]/60 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: selectedNode.colorGroup }}></span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#787169]">
                  {selectedNode.category}
                </span>
              </div>
              <span className="text-[11px] bg-[#f5efe9] text-[#704812] px-2 py-0.5 rounded font-mono font-medium">
                #{selectedNode.id}
              </span>
            </div>

            <h2 className="text-xl font-bold text-[#292420] tracking-tight mb-3">
              {selectedNode.label}
            </h2>

            {/* Description */}
            <div className="bg-[#fbf8f5] p-3.5 rounded-xl border border-[#d4cbc2]/60 mb-3">
              <p className="text-xs sm:text-sm text-[#38332e] leading-relaxed">
                {selectedNode.desc}
              </p>
            </div>

            {/* Exam Highlight */}
            {selectedNode.exam && (
              <div className="bg-[#fdf7ea] p-3 rounded-xl border border-amber-300/80 mb-3">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#704812] mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" />
                  <span>Examen:</span>
                </div>
                <p className="text-xs text-[#52330a] leading-relaxed">
                  {selectedNode.exam}
                </p>
              </div>
            )}

            {/* Analogy if present */}
            {selectedNode.analogia && (
              <div className="bg-[#eef4f8] p-3 rounded-xl border border-[#205b76]/30">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#205b76] mb-1">
                  <Activity className="w-3.5 h-3.5 text-[#205b76]" />
                  <span>Analogía de clase:</span>
                </div>
                <p className="text-xs text-[#133c4e] italic">
                  "{selectedNode.analogia}"
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};
