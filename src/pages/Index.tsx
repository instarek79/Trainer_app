import { CreativeHero } from "@/components/CreativeHero";
import { 
  DailyChallenge, 
  LearningStreak, 
  AchievementShowcase, 
  LearningStats, 
  LeaderboardWidget, 
  MotivationalQuote 
} from "@/components/EngagementWidgets";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, ArrowRight, Play, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="space-y-8">
      <CreativeHero />
      
      {/* ML Introduction Featured Card */}
      <div className="max-w-7xl mx-auto px-6">
        <Card className="p-8 bg-gradient-to-r from-primary/10 via-blue-50 to-purple-50 border-primary/20 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center shadow-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold">Machine Learning Introduction</h2>
                  <Badge variant="secondary" className="px-3 py-1">
                    Interactive Demo
                  </Badge>
                </div>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  Start your ML journey with our comprehensive introduction. Learn fundamental concepts, 
                  explore different types of learning, and understand the complete ML workflow through 
                  interactive content and quizzes.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    3 Topics
                  </span>
                  <span className="flex items-center gap-1">
                    <Play className="w-4 h-4" />
                    60 min
                  </span>
                  <span>13 Practice Questions</span>
                </div>
              </div>
            </div>
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl">
              <Link to="/ml-introduction">
                Start Learning
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </Card>
      </div>
      
      {/* Engagement Widgets Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DailyChallenge />
          <LearningStreak />
          <AchievementShowcase />
          <LearningStats />
          <LeaderboardWidget />
          <MotivationalQuote />
        </div>
      </div>
    </div>
  );
};

export default Index;
