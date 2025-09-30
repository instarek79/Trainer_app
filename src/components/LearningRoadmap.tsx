import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Brain, CheckCircle, Lock, Play, Star, Trophy, Target } from 'lucide-react';

interface RoadmapNode {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'locked';
  level: number;
  points: number;
  prerequisites?: string[];
  estimatedTime: string;
}

const mlRoadmapData: RoadmapNode[] = [
  {
    id: 'intro-ml',
    title: 'Introduction to ML',
    description: 'Fundamental concepts of machine learning and AI',
    status: 'completed',
    level: 1,
    points: 100,
    estimatedTime: '2 hours'
  },
  {
    id: 'python-basics',
    title: 'Python for ML',
    description: 'Essential Python programming for data science',
    status: 'completed',
    level: 1,
    points: 150,
    estimatedTime: '3 hours'
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    description: 'Pandas, NumPy, and data manipulation techniques',
    status: 'current',
    level: 2,
    points: 200,
    prerequisites: ['python-basics'],
    estimatedTime: '4 hours'
  },
  {
    id: 'visualization',
    title: 'Data Visualization',
    description: 'Creating meaningful charts and graphs',
    status: 'locked',
    level: 2,
    points: 150,
    prerequisites: ['data-analysis'],
    estimatedTime: '2.5 hours'
  },
  {
    id: 'supervised-learning',
    title: 'Supervised Learning',
    description: 'Classification and regression algorithms',
    status: 'locked',
    level: 3,
    points: 300,
    prerequisites: ['data-analysis', 'visualization'],
    estimatedTime: '5 hours'
  },
  {
    id: 'unsupervised-learning',
    title: 'Unsupervised Learning',
    description: 'Clustering and dimensionality reduction',
    status: 'locked',
    level: 3,
    points: 300,
    prerequisites: ['supervised-learning'],
    estimatedTime: '4.5 hours'
  }
];

export const LearningRoadmap = () => {
  const [selectedNode, setSelectedNode] = useState<RoadmapNode | null>(null);
  const [userProgress] = useState({
    totalPoints: 250,
    completedModules: 2,
    currentLevel: 2,
    streak: 7
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6" />;
      case 'current':
        return <Play className="w-6 h-6" />;
      case 'locked':
        return <Lock className="w-6 h-6" />;
      default:
        return <Target className="w-6 h-6" />;
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'completed':
        return 'roadmap-node-complete';
      case 'current':
        return 'roadmap-node-current';
      case 'locked':
        return 'roadmap-node-locked';
      default:
        return 'roadmap-node-locked';
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      {/* Header with Progress */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-gradient-hero rounded-2xl p-8 text-white mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
                <Brain className="w-10 h-10" />
                Machine Learning Journey
              </h1>
              <p className="text-white/90 text-lg">Master AI and ML concepts through interactive learning</p>
            </div>
            
            <div className="flex gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">{userProgress.totalPoints}</div>
                <div className="text-white/80">Points</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{userProgress.currentLevel}</div>
                <div className="text-white/80">Level</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{userProgress.streak}</div>
                <div className="text-white/80">Day Streak</div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="flex justify-between text-white/90 mb-2">
              <span>Progress to Level {userProgress.currentLevel + 1}</span>
              <span>{Math.round((userProgress.totalPoints % 500) / 5)}%</span>
            </div>
            <div className="progress-bar bg-white/20">
              <div 
                className="progress-fill bg-white/80" 
                style={{ width: `${(userProgress.totalPoints % 500) / 5}%` }}
              />
            </div>
          </div>
        </div>

        {/* Achievement Badges */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-300 px-4 py-2 badge-glow">
            <Trophy className="w-4 h-4 mr-2" />
            First Steps
          </Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-300 px-4 py-2">
            <Star className="w-4 h-4 mr-2" />
            Python Pro
          </Badge>
          <Badge variant="outline" className="px-4 py-2 border-dashed">
            <Target className="w-4 h-4 mr-2" />
            Data Master (Locked)
          </Badge>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        {/* Roadmap Visualization */}
        <div className="lg:col-span-2">
          <Card className="learning-card p-6">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Learning Path</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {/* Roadmap Nodes */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  {mlRoadmapData.map((node, index) => (
                    <div key={node.id} className="relative">
                      {/* Connection Lines */}
                      {index > 0 && (
                        <div className="absolute -left-4 top-8 w-8 h-0.5 bg-border transform -translate-y-1/2" />
                      )}
                      
                      <div
                        className={`roadmap-node ${getStatusClass(node.status)}`}
                        onClick={() => setSelectedNode(node)}
                      >
                        {getStatusIcon(node.status)}
                      </div>
                      
                      <div className="text-center mt-3">
                        <h3 className="font-semibold text-sm">{node.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{node.estimatedTime}</p>
                        <Badge 
                          variant="outline" 
                          className="mt-2 text-xs"
                        >
                          {node.points} pts
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interactive Path Lines */}
                <svg 
                  className="absolute inset-0 pointer-events-none" 
                  width="100%" 
                  height="100%"
                >
                  {/* Add animated path connections here */}
                </svg>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Module Details Panel */}
        <div className="space-y-6">
          {selectedNode ? (
            <Card className="learning-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{selectedNode.title}</CardTitle>
                  <Badge 
                    variant={selectedNode.status === 'completed' ? 'default' : 'secondary'}
                    className={selectedNode.status === 'completed' ? 'bg-success text-white' : ''}
                  >
                    {selectedNode.status}
                  </Badge>
                </div>
                <CardDescription>{selectedNode.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Level {selectedNode.level}</span>
                  <span>{selectedNode.points} points</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span>Estimated Time</span>
                  <span>{selectedNode.estimatedTime}</span>
                </div>

                {selectedNode.prerequisites && (
                  <div>
                    <h4 className="font-medium mb-2">Prerequisites</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedNode.prerequisites.map((prereq) => (
                        <Badge key={prereq} variant="outline" className="text-xs">
                          {mlRoadmapData.find(n => n.id === prereq)?.title}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <Button 
                  className="w-full" 
                  disabled={selectedNode.status === 'locked'}
                  variant={selectedNode.status === 'current' ? 'default' : 'secondary'}
                >
                  {selectedNode.status === 'completed' ? 'Review' : 
                   selectedNode.status === 'current' ? 'Continue Learning' : 
                   'Locked'}
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="learning-card">
              <CardContent className="p-8 text-center">
                <Brain className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">Select a Module</h3>
                <p className="text-muted-foreground">
                  Click on any roadmap node to see details and start learning
                </p>
              </CardContent>
            </Card>
          )}

          {/* Quick Stats */}
          <Card className="learning-card">
            <CardHeader>
              <CardTitle className="text-lg">Your Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Modules Completed</span>
                <span className="font-semibold">{userProgress.completedModules}/6</span>
              </div>
              <Progress value={(userProgress.completedModules / 6) * 100} className="h-2" />
              
              <div className="flex justify-between">
                <span>Current Streak</span>
                <span className="font-semibold">{userProgress.streak} days</span>
              </div>
              
              <div className="flex justify-between">
                <span>Next Milestone</span>
                <span className="font-semibold">500 points</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};