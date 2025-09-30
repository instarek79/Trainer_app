import { useCallback, useState } from 'react';
import {
  ReactFlow,
  Node,
  Edge,
  addEdge,
  Connection,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  BackgroundVariant,
  MiniMap,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Database, 
  BarChart, 
  Code, 
  GitBranch, 
  Zap, 
  Target,
  CheckCircle,
  Lock,
  Play
} from 'lucide-react';

// Custom node component
interface NodeData {
  label: string;
  description: string;
  status: 'completed' | 'current' | 'available' | 'locked';
  progress?: number;
  difficulty: string;
  duration: string;
  xp: number;
  icon?: typeof Brain;
}

const CustomNode = ({ data }: { data: NodeData }) => {
  const getStatusIcon = () => {
    switch (data.status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'current':
        return <Play className="w-5 h-5 text-primary" />;
      case 'locked':
        return <Lock className="w-5 h-5 text-gray-400" />;
      default:
        return <Target className="w-5 h-5 text-gray-600" />;
    }
  };

  const getNodeStyle = () => {
    switch (data.status) {
      case 'completed':
        return 'bg-green-50 border-green-200 shadow-green-100';
      case 'current':
        return 'bg-primary/10 border-primary/30 shadow-primary/20 ring-2 ring-primary/20';
      case 'locked':
        return 'bg-gray-50 border-gray-200 opacity-60';
      default:
        return 'bg-background border-border hover:shadow-lg';
    }
  };

  const IconComponent = data.icon;

  return (
    <Card className={`p-4 w-64 transition-all duration-200 ${getNodeStyle()}`}>
      <div className="flex items-start gap-3">
        <div className="mt-1">
          {IconComponent ? <IconComponent className="w-6 h-6 text-primary" /> : getStatusIcon()}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-sm truncate">{data.label}</h4>
            <Badge variant="secondary" className="text-xs">{data.difficulty}</Badge>
          </div>
          <p className="text-xs text-muted-foreground mb-2">{data.description}</p>
          
          {data.progress !== undefined && (
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>Progress</span>
                <span>{data.progress}%</span>
              </div>
              <Progress value={data.progress} className="h-1.5" />
            </div>
          )}
          
          <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
            <span>⏱️ {data.duration}</span>
            <span>⭐ {data.xp} XP</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'custom',
    position: { x: 100, y: 100 },
    data: {
      label: 'Introduction to ML',
      description: 'Basic concepts and terminology',
      status: 'completed',
      progress: 100,
      difficulty: 'Beginner',
      duration: '2h',
      xp: 150,
      icon: Brain,
    },
  },
  {
    id: '2',
    type: 'custom',
    position: { x: 400, y: 100 },
    data: {
      label: 'Python Fundamentals',
      description: 'Programming basics for ML',
      status: 'completed',
      progress: 100,
      difficulty: 'Beginner',
      duration: '4h',
      xp: 200,
      icon: Code,
    },
  },
  {
    id: '3',
    type: 'custom',
    position: { x: 700, y: 100 },
    data: {
      label: 'Data Manipulation',
      description: 'Pandas and NumPy essentials',
      status: 'current',
      progress: 65,
      difficulty: 'Beginner',
      duration: '3h',
      xp: 180,
      icon: Database,
    },
  },
  {
    id: '4',
    type: 'custom',
    position: { x: 250, y: 300 },
    data: {
      label: 'Data Visualization',
      description: 'Creating charts and graphs',
      status: 'available',
      progress: 0,
      difficulty: 'Beginner',
      duration: '2.5h',
      xp: 160,
      icon: BarChart,
    },
  },
  {
    id: '5',
    type: 'custom',
    position: { x: 550, y: 300 },
    data: {
      label: 'Supervised Learning',
      description: 'Classification and regression',
      status: 'locked',
      progress: 0,
      difficulty: 'Intermediate',
      duration: '6h',
      xp: 300,
      icon: GitBranch,
    },
  },
  {
    id: '6',
    type: 'custom',
    position: { x: 400, y: 500 },
    data: {
      label: 'Neural Networks',
      description: 'Deep learning fundamentals',
      status: 'locked',
      progress: 0,
      difficulty: 'Advanced',
      duration: '8h',
      xp: 500,
      icon: Zap,
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    type: 'smoothstep',
    style: { stroke: '#10b981', strokeWidth: 3 },
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    type: 'smoothstep',
    style: { stroke: '#f97316', strokeWidth: 3 },
    animated: true,
  },
  {
    id: 'e2-4',
    source: '2',
    target: '4',
    type: 'smoothstep',
    style: { stroke: '#6b7280', strokeWidth: 2 },
  },
  {
    id: 'e3-5',
    source: '3',
    target: '5',
    type: 'smoothstep',
    style: { stroke: '#6b7280', strokeWidth: 2 },
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    type: 'smoothstep',
    style: { stroke: '#6b7280', strokeWidth: 2 },
  },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
    type: 'smoothstep',
    style: { stroke: '#6b7280', strokeWidth: 2 },
  },
];

export const ReactFlowRoadmap = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    setSelectedNode(node);
  }, []);

  return (
    <div className="w-full h-[600px] bg-background rounded-lg border shadow-lg">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        className="bg-gradient-to-br from-background to-primary/5"
      >
        <Controls className="bg-background border border-border rounded-lg shadow-lg" />
        <Background 
          variant={BackgroundVariant.Dots} 
          gap={20} 
          size={1}
          className="opacity-30"
        />
        <MiniMap 
          className="bg-background border border-border rounded-lg shadow-lg"
          nodeColor="#f97316"
          maskColor="rgba(255, 255, 255, 0.8)"
        />
      </ReactFlow>

      {selectedNode && (
        <Card className="absolute bottom-4 right-4 p-4 w-80 shadow-xl z-10">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">{(selectedNode.data as unknown as NodeData).label}</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedNode(null)}
            >
              ×
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            {(selectedNode.data as unknown as NodeData).description}
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Difficulty:</span>
              <Badge variant="outline">{(selectedNode.data as unknown as NodeData).difficulty}</Badge>
            </div>
            <div className="flex justify-between">
              <span>Duration:</span>
              <span>{(selectedNode.data as unknown as NodeData).duration}</span>
            </div>
            <div className="flex justify-between">
              <span>XP Reward:</span>
              <span className="font-semibold text-primary">{(selectedNode.data as unknown as NodeData).xp} XP</span>
            </div>
            {(selectedNode.data as unknown as NodeData).status === 'current' && (
              <Button className="w-full mt-3" size="sm">
                Continue Learning
              </Button>
            )}
            {(selectedNode.data as unknown as NodeData).status === 'available' && (
              <Button className="w-full mt-3" size="sm" variant="outline">
                Start Module
              </Button>
            )}
          </div>
        </Card>
      )}
    </div>
  );
};