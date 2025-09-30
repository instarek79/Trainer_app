import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Zap, 
  Target, 
  Brain, 
  Trophy, 
  TrendingUp, 
  Clock, 
  Users, 
  Medal,
  Sparkles,
  Flame,
  Star,
  ChevronRight
} from 'lucide-react';

// Daily Challenge Widget
export const DailyChallenge = () => {
  const [timeLeft, setTimeLeft] = useState(86400); // 24 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 86400));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);

  return (
    <Card className="p-6 bg-gradient-to-br from-primary/10 via-orange-50 to-yellow-50 border-primary/20 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Daily Challenge</h3>
        </div>
        <Badge variant="secondary" className="animate-pulse">
          {hours}h {minutes}m left
        </Badge>
      </div>
      
      <div className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Complete 3 quiz questions about Neural Networks
        </p>
        <Progress value={33} className="h-2" />
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">1/3 completed</span>
          <span className="text-primary font-medium">+50 XP</span>
        </div>
        <Button size="sm" className="w-full group">
          Continue Challenge
          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </Card>
  );
};

// Learning Streak Widget
export const LearningStreak = () => {
  const streakDays = 7;
  const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const completedDays = [true, true, true, true, true, true, true];

  return (
    <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50 border-orange-200 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Flame className="w-5 h-5 text-orange-500" />
          <h3 className="font-semibold">Learning Streak</h3>
        </div>
        <Badge className="bg-orange-500 text-white">{streakDays} days</Badge>
      </div>
      
      <div className="flex justify-between mb-4">
        {weekDays.map((day, index) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <span className="text-xs text-muted-foreground">{day}</span>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all ${
              completedDays[index] 
                ? 'bg-orange-500 text-white shadow-md' 
                : 'bg-muted text-muted-foreground'
            }`}>
              {completedDays[index] ? '✓' : day}
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-xs text-center text-muted-foreground">
        Keep it up! You're on fire! 🔥
      </p>
    </Card>
  );
};

// Achievement Showcase Widget
export const AchievementShowcase = () => {
  const [currentAchievement, setCurrentAchievement] = useState(0);
  
  const achievements = [
    {
      title: "Quick Learner",
      description: "Complete 5 lessons in one day",
      icon: Zap,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
      earned: true,
      progress: 100
    },
    {
      title: "Quiz Master",
      description: "Score 90%+ on 5 consecutive quizzes",
      icon: Brain,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      earned: false,
      progress: 60
    },
    {
      title: "Consistency King",
      description: "Maintain 14-day learning streak",
      icon: Medal,
      color: "text-green-500",
      bgColor: "bg-green-50",
      earned: false,
      progress: 50
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAchievement(prev => (prev + 1) % achievements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [achievements.length]);

  const current = achievements[currentAchievement];

  return (
    <Card className={`p-6 ${current.bgColor} border-primary/20 animate-fade-in transition-all duration-500`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Achievement Focus</h3>
        </div>
        <Badge variant={current.earned ? "default" : "secondary"}>
          {current.earned ? "Earned" : "In Progress"}
        </Badge>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 ${current.bgColor} rounded-xl flex items-center justify-center border-2 border-white shadow-sm`}>
            <current.icon className={`w-6 h-6 ${current.color}`} />
          </div>
          <div className="flex-1">
            <h4 className="font-medium">{current.title}</h4>
            <p className="text-sm text-muted-foreground">{current.description}</p>
          </div>
        </div>
        
        <div className="space-y-1">
          <Progress value={current.progress} className="h-2" />
          <div className="flex justify-between items-center text-xs">
            <span className="text-muted-foreground">{current.progress}% complete</span>
            {current.earned && <span className="text-primary">🎉 Completed!</span>}
          </div>
        </div>
      </div>
    </Card>
  );
};

// Learning Stats Widget
export const LearningStats = () => {
  const stats = [
    { label: "Today's XP", value: 125, icon: Star, change: "+15%" },
    { label: "Time Spent", value: "1.2h", icon: Clock, change: "+0.3h" },
    { label: "Modules Done", value: 3, icon: Target, change: "+1" },
    { label: "Accuracy", value: "87%", icon: TrendingUp, change: "+3%" }
  ];

  return (
    <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-500" />
          <h3 className="font-semibold">Today's Progress</h3>
        </div>
        <Badge variant="outline" className="text-blue-600 border-blue-300">Live</Badge>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-3 bg-white/50 rounded-lg">
            <stat.icon className="w-4 h-4 mx-auto mb-1 text-blue-500" />
            <div className="text-lg font-bold">{stat.value}</div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
            <div className="text-xs text-green-600 font-medium">{stat.change}</div>
          </div>
        ))}
      </div>
    </Card>
  );
};

// Leaderboard Widget
export const LeaderboardWidget = () => {
const leaderboard = [
    { name: "Alex Chen", xp: 1247, avatar: "🧠", rank: 1 },
    { name: "You", xp: 892, avatar: "🎯", rank: 2, isUser: true },
    { name: "Sarah Kim", xp: 756, avatar: "⚡", rank: 3 },
    { name: "Mike Johnson", xp: 623, avatar: "🚀", rank: 4 }
  ];

  return (
    <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-purple-500" />
          <h3 className="font-semibold">Weekly Leaderboard</h3>
        </div>
        <Badge variant="outline" className="text-purple-600 border-purple-300">Top 10</Badge>
      </div>
      
      <div className="space-y-2">
        {leaderboard.map((user, index) => (
          <div key={index} className={`flex items-center gap-3 p-2 rounded-lg transition-all ${
            user.isUser ? 'bg-primary/10 border border-primary/20' : 'bg-white/50'
          }`}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
              user.rank === 1 ? 'bg-yellow-400 text-yellow-900' :
              user.rank === 2 ? 'bg-gray-300 text-gray-700' :
              user.rank === 3 ? 'bg-orange-400 text-orange-900' :
              'bg-muted text-muted-foreground'
            }`}>
              {user.rank}
            </div>
            <span className="text-lg">{user.avatar}</span>
            <div className="flex-1">
              <p className={`text-sm font-medium ${user.isUser ? 'text-primary' : ''}`}>
                {user.name}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold">{user.xp} XP</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

// Motivational Quote Widget
export const MotivationalQuote = () => {
  const quotes = [
    {
      text: "The only way to learn mathematics is to do mathematics.",
      author: "Paul Halmos",
      category: "Mathematics"
    },
    {
      text: "Machine learning is the next Internet.",
      author: "Tony Tether",
      category: "AI & ML"
    },
    {
      text: "Data is the new oil, but machine learning is the refinery.",
      author: "Peter Sondergaard",
      category: "Data Science"
    }
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % quotes.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [quotes.length]);

  const quote = quotes[currentQuote];

  return (
    <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-green-500" />
          <h3 className="font-semibold">Daily Inspiration</h3>
        </div>
        <Badge variant="outline" className="text-green-600 border-green-300">
          {quote.category}
        </Badge>
      </div>
      
      <div className="space-y-3">
        <blockquote className="text-sm italic text-foreground/80 leading-relaxed">
          "{quote.text}"
        </blockquote>
        <p className="text-xs text-muted-foreground text-right">
          — {quote.author}
        </p>
      </div>
    </Card>
  );
};