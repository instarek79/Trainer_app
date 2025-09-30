import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, Clock, Zap, Trophy } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
}

const sampleQuestions: Question[] = [
  {
    id: '1',
    question: 'What is the main goal of supervised learning?',
    options: [
      'To find hidden patterns in data without labels',
      'To learn from labeled training data to make predictions',
      'To cluster similar data points together',
      'To reduce the dimensionality of data'
    ],
    correctAnswer: 1,
    explanation: 'Supervised learning uses labeled training data to learn patterns and make predictions on new, unseen data.',
    difficulty: 'easy',
    points: 10
  },
  {
    id: '2',
    question: 'Which Python library is primarily used for numerical computations in machine learning?',
    options: [
      'Pandas',
      'Matplotlib',
      'NumPy',
      'Seaborn'
    ],
    correctAnswer: 2,
    explanation: 'NumPy is the fundamental library for numerical computing in Python, providing support for arrays and mathematical functions.',
    difficulty: 'easy',
    points: 10
  },
  {
    id: '3',
    question: 'What is overfitting in machine learning?',
    options: [
      'When a model performs well on training data but poorly on test data',
      'When a model performs poorly on both training and test data',
      'When a model takes too long to train',
      'When a model uses too many features'
    ],
    correctAnswer: 0,
    explanation: 'Overfitting occurs when a model learns the training data too well, including noise, leading to poor generalization on new data.',
    difficulty: 'medium',
    points: 15
  }
];

export const QuizInterface = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);

  const question = sampleQuestions[currentQuestion];

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
    
    if (answerIndex === question.correctAnswer) {
      setScore(score + question.points);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setTimeLeft(30);
    } else {
      setQuizCompleted(true);
    }
  };

  const getScoreColor = () => {
    const percentage = (score / (sampleQuestions.length * 15)) * 100;
    if (percentage >= 80) return 'text-success';
    if (percentage >= 60) return 'text-warning';
    return 'text-destructive';
  };

  const getPerformanceBadge = () => {
    const percentage = (score / (sampleQuestions.length * 15)) * 100;
    if (percentage >= 90) return { text: 'Excellent!', variant: 'default' as const, color: 'bg-success' };
    if (percentage >= 70) return { text: 'Great Job!', variant: 'secondary' as const, color: 'bg-warning' };
    if (percentage >= 50) return { text: 'Good Effort', variant: 'outline' as const, color: 'bg-primary' };
    return { text: 'Keep Learning', variant: 'outline' as const, color: 'bg-muted' };
  };

  if (quizCompleted) {
    const badge = getPerformanceBadge();
    const percentage = Math.round((score / (sampleQuestions.length * 15)) * 100);
    
    return (
      <div className="min-h-screen bg-background p-6 flex items-center justify-center">
        <Card className="learning-card max-w-2xl w-full">
          <CardHeader className="text-center pb-8">
            <div className="mx-auto mb-6 w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-3xl mb-4">Quiz Completed!</CardTitle>
            <Badge variant={badge.variant} className={`${badge.color} text-white px-6 py-2 text-lg`}>
              {badge.text}
            </Badge>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className={`text-6xl font-bold ${getScoreColor()} mb-2`}>
                {score}/{sampleQuestions.length * 15}
              </div>
              <p className="text-muted-foreground">
                You scored {percentage}% • {answers.filter((answer, index) => answer === sampleQuestions[index].correctAnswer).length} out of {sampleQuestions.length} correct
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-secondary rounded-lg">
                <div className="text-2xl font-bold text-success">{answers.filter((answer, index) => answer === sampleQuestions[index].correctAnswer).length}</div>
                <div className="text-sm text-muted-foreground">Correct</div>
              </div>
              <div className="text-center p-4 bg-secondary rounded-lg">
                <div className="text-2xl font-bold text-destructive">{answers.filter((answer, index) => answer !== sampleQuestions[index].correctAnswer).length}</div>
                <div className="text-sm text-muted-foreground">Incorrect</div>
              </div>
              <div className="text-center p-4 bg-secondary rounded-lg">
                <div className="text-2xl font-bold text-primary">{score}</div>
                <div className="text-sm text-muted-foreground">Points Earned</div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" className="flex-1">
                Review Answers
              </Button>
              <Button className="flex-1">
                Next Module
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        {/* Quiz Header */}
        <div className="bg-gradient-hero rounded-2xl p-6 text-white mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Machine Learning Quiz</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">{timeLeft}s</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">{score} pts</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between text-white/90 mb-2">
            <span>Question {currentQuestion + 1} of {sampleQuestions.length}</span>
            <span>{Math.round(((currentQuestion + 1) / sampleQuestions.length) * 100)}% Complete</span>
          </div>
          
          <div className="progress-bar bg-white/20">
            <div 
              className="progress-fill bg-white/80" 
              style={{ width: `${((currentQuestion + 1) / sampleQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <Card className="learning-card mb-6">
          <CardHeader>
            <div className="flex justify-between items-start mb-4">
              <Badge 
                variant="outline" 
                className={`${
                  question.difficulty === 'easy' ? 'border-success text-success' :
                  question.difficulty === 'medium' ? 'border-warning text-warning' :
                  'border-destructive text-destructive'
                }`}
              >
                {question.difficulty}
              </Badge>
              <Badge variant="secondary">{question.points} points</Badge>
            </div>
            <CardTitle className="text-xl leading-relaxed">{question.question}</CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {question.options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className={`w-full p-6 h-auto text-left justify-start transition-all ${
                  selectedAnswer === index
                    ? index === question.correctAnswer
                      ? 'border-success bg-success-light text-success-foreground'
                      : 'border-destructive bg-destructive/10 text-destructive'
                    : selectedAnswer !== null && index === question.correctAnswer
                    ? 'border-success bg-success-light text-success-foreground'
                    : 'hover:bg-secondary'
                }`}
                onClick={() => handleAnswerSelect(index)}
                disabled={selectedAnswer !== null}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-semibold ${
                    selectedAnswer === index
                      ? index === question.correctAnswer
                        ? 'border-success bg-success text-white'
                        : 'border-destructive bg-destructive text-white'
                      : selectedAnswer !== null && index === question.correctAnswer
                      ? 'border-success bg-success text-white'
                      : 'border-muted-foreground text-muted-foreground'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="flex-1">{option}</span>
                  {selectedAnswer !== null && (
                    <div>
                      {index === question.correctAnswer ? (
                        <CheckCircle className="w-6 h-6 text-success" />
                      ) : selectedAnswer === index ? (
                        <XCircle className="w-6 h-6 text-destructive" />
                      ) : null}
                    </div>
                  )}
                </div>
              </Button>
            ))}

            {showExplanation && (
              <div className="mt-6 p-4 bg-secondary rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  Explanation
                </h4>
                <p className="text-muted-foreground">{question.explanation}</p>
              </div>
            )}

            {showExplanation && (
              <Button 
                onClick={handleNextQuestion}
                className="w-full"
                size="lg"
              >
                {currentQuestion < sampleQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};