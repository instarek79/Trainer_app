import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Sparkles, Target, TrendingUp, Users, Clock, ArrowRight, Play, Star } from 'lucide-react';
import { Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const floatingElements = [
  { icon: Brain, delay: '0s', duration: '3s' },
  { icon: Sparkles, delay: '0.5s', duration: '4s' },
  { icon: Target, delay: '1s', duration: '3.5s' },
  { icon: TrendingUp, delay: '1.5s', duration: '4.5s' },
];

const achievements = [
  { title: "Fast Learner", description: "Complete 5 modules in a week", icon: "🚀", progress: 80 },
  { title: "Quiz Master", description: "Score 90%+ on 3 quizzes", icon: "🎯", progress: 60 },
  { title: "Consistent", description: "7-day learning streak", icon: "🔥", progress: 100 },
];

const stats = [
  { label: "Active Learners", value: "247", icon: Users, color: "text-blue-600" },
  { label: "Course Completion", value: "89%", icon: Target, color: "text-green-600" },
  { label: "Avg. Study Time", value: "1.2h", icon: Clock, color: "text-purple-600" },
];

export const CreativeHero = () => {
  const [currentAchievement, setCurrentAchievement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAchievement((prev) => (prev + 1) % achievements.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className={`absolute animate-float opacity-10`}
            style={{
              left: `${20 + index * 20}%`,
              top: `${10 + index * 15}%`,
              animationDelay: element.delay,
              animationDuration: element.duration,
            }}
          >
            <element.icon className="w-16 h-16 text-primary" />
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Main Hero Section */}
        <div className="text-center space-y-8 mb-16">
          <div className="space-y-4">
            <Badge variant="secondary" className="px-6 py-3 text-lg font-semibold animate-fade-in">
              🚀 BEDO AI TRAINER - Smart Learning Platform
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-hero bg-clip-text text-transparent animate-fade-in">
              Learn Smarter,
              <br />
              <span className="relative">
                Grow Faster
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-hero rounded-full animate-scale-in"></div>
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              Embark on your Machine Learning journey with personalized roadmaps, 
              interactive quizzes, and gamified learning experiences designed for 
              high school and junior college students.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button asChild size="lg" className="group shadow-lg hover:shadow-xl transition-all">
              <Link to="/roadmap">
                Start Learning
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="group shadow-sm hover:shadow-md">
              <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Interactive Stats - Compact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="p-4 text-center hover:shadow-lg transition-all duration-300 animate-fade-in group">
              <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color} group-hover:scale-110 transition-transform`} />
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Dynamic Achievement Showcase */}
        <Card className="p-8 mb-16 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 animate-fade-in">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Trophy className="w-6 h-6 text-primary" />
              Achievement Spotlight
            </h3>
            <Badge variant="outline" className="animate-pulse">Live</Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border transition-all duration-500 ${
                  index === currentAchievement 
                    ? 'bg-primary/10 border-primary/30 scale-105 shadow-lg' 
                    : 'bg-background/50 border-border/50'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{achievement.icon}</span>
                  <div>
                    <h4 className="font-semibold">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                  <div 
                    className="bg-gradient-hero h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${achievement.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Brain,
              title: "AI-Powered",
              description: "Personalized learning paths adapted to your pace",
              color: "text-blue-600"
            },
            {
              icon: Target,
              title: "Goal-Oriented", 
              description: "Clear milestones and progress tracking",
              color: "text-green-600"
            },
            {
              icon: Sparkles,
              title: "Gamified",
              description: "Earn points, badges, and climb leaderboards",
              color: "text-purple-600"
            }
          ].map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 group animate-fade-in">
              <feature.icon className={`w-12 h-12 mx-auto mb-4 ${feature.color} group-hover:scale-110 transition-transform`} />
              <h4 className="font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Star className="w-4 h-4 text-yellow-500" />
            <span>Join thousands of students already learning</span>
            <Star className="w-4 h-4 text-yellow-500" />
          </div>
          
          <Button asChild size="lg" variant="outline" className="shadow-lg hover:shadow-xl">
            <Link to="/roadmap">
              Explore Learning Paths
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};