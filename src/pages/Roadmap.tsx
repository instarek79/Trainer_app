import { ReactFlowRoadmap } from "@/components/ReactFlowRoadmap";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Target, Trophy, Clock } from "lucide-react";

const Roadmap = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Brain className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text ">
            Machine Learning Roadmap
          </h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Your personalized learning journey through Machine Learning. 
          Navigate through interconnected modules and track your progress in real-time.
        </p>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <Target className="w-6 h-6 text-green-600" />
            <div>
              <div className="text-2xl font-bold">65%</div>
              <div className="text-sm text-muted-foreground">Overall Progress</div>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <Trophy className="w-6 h-6 text-yellow-600" />
            <div>
              <div className="text-2xl font-bold">3/6</div>
              <div className="text-sm text-muted-foreground">Modules Completed</div>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-blue-600" />
            <div>
              <div className="text-2xl font-bold">12h</div>
              <div className="text-sm text-muted-foreground">Time Invested</div>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <Brain className="w-6 h-6 text-purple-600" />
            <div>
              <div className="text-2xl font-bold">1,030</div>
              <div className="text-sm text-muted-foreground">XP Earned</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Interactive Roadmap */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Interactive Learning Path</h2>
          <Badge variant="outline" className="animate-pulse">Live View</Badge>
        </div>
        <ReactFlowRoadmap />
      </Card>
    </div>
  );
};

export default Roadmap;