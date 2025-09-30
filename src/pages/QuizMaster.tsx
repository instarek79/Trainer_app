import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { 
  Brain, 
  Trophy, 
  Target, 
  Clock, 
  CheckCircle, 
  X, 
  Zap,
  Star,
  TrendingUp,
  Award
} from 'lucide-react';

interface Quiz {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  questions: number;
  timeLimit: number; // in minutes
  xpReward: number;
  category: string;
  completed: boolean;
  bestScore?: number;
}

const quizzes: Quiz[] = [
  {
    id: 'ml-basics',
    title: 'Machine Learning Fundamentals',
    description: 'Test your understanding of basic ML concepts',
    difficulty: 'Beginner',
    questions: 10,
    timeLimit: 15,
    xpReward: 100,
    category: 'Fundamentals',
    completed: true,
    bestScore: 85
  },
  {
    id: 'supervised-learning',
    title: 'Supervised Learning Deep Dive',
    description: 'Advanced concepts in classification and regression',
    difficulty: 'Intermediate',
    questions: 15,
    timeLimit: 20,
    xpReward: 200,
    category: 'Supervised Learning',
    completed: true,
    bestScore: 92
  },
  {
    id: 'neural-networks',
    title: 'Neural Networks & Deep Learning',
    description: 'Understanding neural network architectures',
    difficulty: 'Advanced',
    questions: 20,
    timeLimit: 30,
    xpReward: 300,
    category: 'Deep Learning',
    completed: false
  },
  {
    id: 'data-preprocessing',
    title: 'Data Preprocessing Techniques',
    description: 'Data cleaning, transformation, and feature engineering',
    difficulty: 'Intermediate',
    questions: 12,
    timeLimit: 18,
    xpReward: 150,
    category: 'Data Science',
    completed: false
  },
  {
    id: 'model-evaluation',
    title: 'Model Evaluation & Metrics',
    description: 'Understanding accuracy, precision, recall, and more',
    difficulty: 'Intermediate',
    questions: 14,
    timeLimit: 22,
    xpReward: 180,
    category: 'Evaluation',
    completed: false
  },
  {
    id: 'unsupervised-learning',
    title: 'Unsupervised Learning',
    description: 'Clustering, dimensionality reduction, and pattern discovery',
    difficulty: 'Advanced',
    questions: 18,
    timeLimit: 25,
    xpReward: 250,
    category: 'Unsupervised Learning',
    completed: false
  }
];

const QuizMaster = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(quizzes.map(q => q.category)))];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredQuizzes = quizzes.filter(quiz => {
    const categoryMatch = selectedCategory === 'All' || quiz.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'All' || quiz.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const totalQuizzes = quizzes.length;
  const completedQuizzes = quizzes.filter(q => q.completed).length;
  const totalXP = quizzes.filter(q => q.completed).reduce((sum, q) => sum + q.xpReward, 0);
  const averageScore = quizzes.filter(q => q.bestScore).reduce((sum, q, _, arr) => sum + (q.bestScore || 0) / arr.length, 0);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-50 border-green-200';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'Advanced': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <Card className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Quiz Master</h1>
              <p className="text-lg text-muted-foreground">Test your knowledge and earn XP</p>
            </div>
          </div>
          <div className="text-right">
            <Badge variant="secondary" className="text-lg px-4 py-2 mb-2">
              Level: Quiz Expert
            </Badge>
            <p className="text-sm text-muted-foreground">Total XP: {totalXP}</p>
          </div>
        </div>
      </Card>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 text-center">
          <Trophy className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
          <div className="text-2xl font-bold">{completedQuizzes}</div>
          <div className="text-sm text-muted-foreground">Completed</div>
        </Card>
        <Card className="p-4 text-center">
          <Target className="w-8 h-8 mx-auto mb-2 text-blue-600" />
          <div className="text-2xl font-bold">{Math.round(averageScore)}%</div>
          <div className="text-sm text-muted-foreground">Avg Score</div>
        </Card>
        <Card className="p-4 text-center">
          <Star className="w-8 h-8 mx-auto mb-2 text-purple-600" />
          <div className="text-2xl font-bold">{totalXP}</div>
          <div className="text-sm text-muted-foreground">Total XP</div>
        </Card>
        <Card className="p-4 text-center">
          <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-600" />
          <div className="text-2xl font-bold">{Math.round((completedQuizzes / totalQuizzes) * 100)}%</div>
          <div className="text-sm text-muted-foreground">Progress</div>
        </Card>
      </div>

      {/* Progress Bar */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold">Overall Progress</h3>
          <span className="text-sm text-muted-foreground">
            {completedQuizzes} of {totalQuizzes} quizzes completed
          </span>
        </div>
        <Progress value={(completedQuizzes / totalQuizzes) * 100} className="h-3" />
      </Card>

      {/* Filters */}
      <Card className="p-4">
        <h3 className="font-semibold mb-4">Filter Quizzes</h3>
        <div className="flex flex-wrap gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Category</label>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          <Separator orientation="vertical" className="h-16" />
          <div className="space-y-2">
            <label className="text-sm font-medium">Difficulty</label>
            <div className="flex flex-wrap gap-2">
              {difficulties.map(difficulty => (
                <Button
                  key={difficulty}
                  variant={selectedDifficulty === difficulty ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDifficulty(difficulty)}
                >
                  {difficulty}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Quiz Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredQuizzes.map(quiz => (
          <Card key={quiz.id} className={`p-6 hover:shadow-lg transition-all duration-300 ${
            quiz.completed ? 'border-green-200 bg-green-50/30' : ''
          }`}>
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg leading-tight">{quiz.title}</h3>
                  <p className="text-sm text-muted-foreground">{quiz.description}</p>
                </div>
                {quiz.completed && (
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                )}
              </div>

              {/* Quiz Info */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge className={getDifficultyColor(quiz.difficulty)}>
                    {quiz.difficulty}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{quiz.category}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Target className="w-4 h-4 text-blue-500" />
                    <span>{quiz.questions} questions</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-purple-500" />
                    <span>{quiz.timeLimit} min</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>{quiz.xpReward} XP</span>
                  </div>
                  {quiz.bestScore && (
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4 text-green-500" />
                      <span>{quiz.bestScore}% best</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <Button 
                className="w-full" 
                variant={quiz.completed ? "outline" : "default"}
              >
                {quiz.completed ? (
                  <>
                    <Trophy className="w-4 h-4 mr-2" />
                    Retake Quiz
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 mr-2" />
                    Start Quiz
                  </>
                )}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {filteredQuizzes.length === 0 && (
        <Card className="p-8 text-center">
          <X className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">No quizzes found</h3>
          <p className="text-muted-foreground">
            Try adjusting your filters to see more quiz options.
          </p>
        </Card>
      )}

      {/* Achievement Badges */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-600" />
          Achievement Badges
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className={`p-4 rounded-lg border text-center ${
            completedQuizzes >= 1 ? 'bg-yellow-50 border-yellow-200' : 'bg-gray-50 border-gray-200 opacity-50'
          }`}>
            <div className="text-2xl mb-2">🏆</div>
            <div className="font-medium text-sm">First Quiz</div>
            <div className="text-xs text-muted-foreground">Complete 1 quiz</div>
          </div>
          <div className={`p-4 rounded-lg border text-center ${
            completedQuizzes >= 5 ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200 opacity-50'
          }`}>
            <div className="text-2xl mb-2">🎯</div>
            <div className="font-medium text-sm">Quiz Explorer</div>
            <div className="text-xs text-muted-foreground">Complete 5 quizzes</div>
          </div>
          <div className={`p-4 rounded-lg border text-center ${
            averageScore >= 90 ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200 opacity-50'
          }`}>
            <div className="text-2xl mb-2">⭐</div>
            <div className="font-medium text-sm">High Achiever</div>
            <div className="text-xs text-muted-foreground">90% average score</div>
          </div>
          <div className={`p-4 rounded-lg border text-center ${
            totalXP >= 1000 ? 'bg-purple-50 border-purple-200' : 'bg-gray-50 border-gray-200 opacity-50'
          }`}>
            <div className="text-2xl mb-2">🚀</div>
            <div className="font-medium text-sm">XP Master</div>
            <div className="text-xs text-muted-foreground">Earn 1000+ XP</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default QuizMaster;