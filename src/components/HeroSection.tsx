import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, Zap, Users, Target, ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-education.jpg';

export const HeroSection = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="px-6 py-4 border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 " />
            </div>
            <span className="text-xl font-bold">EduAI</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#roadmap" className="text-muted-foreground hover:text-foreground transition-colors">Roadmap</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                🚀 AI-Powered Learning Platform
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Master{' '}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Machine Learning
                </span>{' '}
                Through Interactive Journeys
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transform your learning experience with personalized AI roadmaps, gamified challenges, 
                and interactive assessments designed for high school and college students.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Learning
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-muted-foreground">Modules</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-hero rounded-3xl opacity-20 blur-3xl transform scale-110"></div>
            <img 
              src={heroImage} 
              alt="Students learning AI and machine learning through interactive platform"
              className="relative z-10 w-full h-auto rounded-3xl shadow-2xl"
            />
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 z-20">
              <div className="bg-card border rounded-xl p-4 shadow-lg learning-card">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <div className="font-semibold">Progress Tracking</div>
                    <div className="text-sm text-muted-foreground">Real-time updates</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 z-20">
              <div className="bg-card border rounded-xl p-4 shadow-lg learning-card">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Gamification</div>
                    <div className="text-sm text-muted-foreground">Earn rewards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose EduAI?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform combines cutting-edge AI with proven educational methods to create 
            an engaging and effective learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="learning-card p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">AI-Powered Roadmaps</h3>
            <p className="text-muted-foreground">
              Personalized learning paths that adapt to your progress and learning style.
            </p>
          </div>

          <div className="learning-card p-8 text-center">
            <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-success" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Interactive Assessments</h3>
            <p className="text-muted-foreground">
              Gamified quizzes and challenges that make learning fun and engaging.
            </p>
          </div>

          <div className="learning-card p-8 text-center">
            <div className="w-16 h-16 bg-warning/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-warning" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Collaborative Learning</h3>
            <p className="text-muted-foreground">
              Connect with peers, share progress, and learn together in a supportive community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};