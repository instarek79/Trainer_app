import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import {
  Brain,
  ChevronRight,
  ChevronsRight,
  ChevronsLeft,
  ChevronLeft,
  CheckCircle,
  Play,
  BookOpen,
  Target,
  Lightbulb,
  Database,
  BarChart
} from 'lucide-react';
import LogisticRegression3D from './visualization/LogisticRegression3D';
import { Content } from 'vaul';
import ContentComponent from './ContentComponent';
import { QuizQuestion, TopicContent, topics } from './Content';

export const MLIntroduction = () => {
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const [currentChunkIndex, setCurrentChunkIndex] = useState(0);
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<string>>(new Set());
  // const [progress, setProgress] = useState(0);

  const currentTopic = topics[currentTopicIndex];
  const currentQuestion = currentTopic.questions[currentQuestionIndex];
  const currentChunk = currentTopic.content[currentChunkIndex];
  const progress = (completedTopics.size / topics.length) * 100;
  const handleNextTopic = () => {
    if (currentTopicIndex < topics.length - 1) {
      setCurrentTopicIndex(currentTopicIndex + 1);
      setCurrentChunkIndex(0);
      setShowQuiz(false);
      setCurrentQuestionIndex(0);
      setCurrentChunkIndex(0);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setQuizScore(0);
      setAnsweredQuestions(new Set());
    }
  };

  const handlePrevTopic = () => {
    if (currentTopicIndex > 0) {
      setCurrentTopicIndex(currentTopicIndex - 1);
      setCurrentChunkIndex(0);
      setShowQuiz(false);

      setCurrentQuestionIndex(0);
      setCurrentChunkIndex(0);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setQuizScore(0);
      setAnsweredQuestions(new Set());
    }
  };

  const handleStartQuiz = () => {
    setShowQuiz(true);
    setCurrentQuestionIndex(0);
    setCurrentChunkIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setQuizScore(0);
    setAnsweredQuestions(new Set());
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer !== null) {
      setShowExplanation(true);
      if (selectedAnswer === currentQuestion.correctAnswer) {
        setQuizScore(quizScore + 1);
      }
      setAnsweredQuestions(prev => new Set(prev).add(currentQuestion.id));
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentTopic.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      // Quiz completed
      setCompletedTopics(prev => new Set(prev).add(currentTopic.id));
      setShowQuiz(false);
    }
  };
  const handleNextChunk = () => {
    if (currentChunkIndex < currentTopic.content.length - 1) {
      setCurrentChunkIndex(currentChunkIndex + 1);
    } else {
      // Quiz completed
      // setCompletedTopics(prev => new Set(prev).add(currentTopic.id));
      setShowQuiz(true);
    }
  };

  return (
    <div className="max-w-8xl mx-auto p-6 space-y-6">
      {/* Header */}
      <Card className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 " />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Machine Learning Introduction</h1>
              <p className="text-muted-foreground">Master the fundamentals step by step</p>
            </div>
          </div>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            {Math.round(progress)}% Complete
          </Badge>
        </div>
        <Progress value={progress} className="h-2" />
      </Card>

      {/* Topic Navigation */}
      <Card className="p-4"
      style={{    width: '84vw',
        // width:"80%",
      }}
       >
        <div className="flex items-center justify-between mb-4"
        // style={{ overflowX: 'auto' ,
        //   scrollbarWidth: 'thin',
        //   // width:"80%",
        // }}
        >
          <h3 className="font-semibold">Topics</h3>
          <span className="text-sm text-muted-foreground">
            {currentTopicIndex + 1} of {topics.length}
          </span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {topics.map((topic, index) => (
            <Button
              key={topic.id}
              variant={index === currentTopicIndex ? "default" : "outline"}
              size="sm"
              className={`flex-shrink-0 ${completedTopics.has(topic.id) ? 'border-green-500' : ''}`}
              onClick={() => {
                setCurrentTopicIndex(index);
                setCurrentChunkIndex(0);
                setShowQuiz(false);
              }}
            >
              <topic.icon className="w-4 h-4 mr-2" />
              {topic.title}
              {completedTopics.has(topic.id) && (
                <CheckCircle className="w-4 h-4 ml-2 text-green-600" />
              )}
            </Button>
          ))}
        </div>
      </Card>

      {!showQuiz ? (
        /* Topic Content */
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <currentTopic.icon className="w-8 h-8 text-primary" />
              <div>
                <h2 className="text-xl font-bold">{currentTopic.title}</h2>
                <p className="text-muted-foreground">{currentTopic.description}</p>
              </div>
            </div>
            <Badge variant="outline" className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              {currentTopic.duration}
            </Badge>
          </div>

          <div className="prose prose-sm max-w-none mb-8">
            {/* Quiz Interface */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div>
                    <h2 className="text-lg font-bold">{ }</h2>
                    <p className="text-muted-foreground">
                      Part {currentChunkIndex + 1} of {currentTopic.content.length}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <Progress
                  value={((currentChunkIndex + 1) / currentTopic.content.length) * 100}
                  className="h-2 mb-4"
                />

              </div>

              <div className="flex justify-between  mb-4" style={{ alignItems: 'center' }}>
                <Button onClick={() => setCurrentChunkIndex(currentChunkIndex - 1)} variant="outline"
                  style={{ border: 'none' }}
                  disabled={currentChunkIndex === 0}>
                  <ChevronsLeft className="w-4 h-4 mr-2" />
                  {/* Previous */}
                </Button>
                <Card className="p-4 mb-6 bg-muted/50" style={{ flex: 1, margin: '0 16px', height: '45vh', overflow: 'auto' }}>
                  {currentChunk.content ? (
                    currentChunk.content
                  ) : (
                    currentChunk.visualization
                  )}
                </Card>
                <Button onClick={handleNextChunk} style={{ border: 'none' }} variant="outline">

                  <ChevronsRight className="w-1 h-1 ml-2" />
                </Button>

              </div>
            </Card>
          </div>

          <Separator className="my-6" />

          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={handlePrevTopic}
              disabled={currentTopicIndex === 0}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous Topic
            </Button>

            <Button
              onClick={handleStartQuiz}
              className="flex items-center gap-2"
            >
              <Target className="w-4 h-4" />
              Take Quiz ({currentTopic.questions.length} questions)
            </Button>

            <Button
              onClick={handleNextTopic}
              // disabled={currentTopicIndex === topics.length - 1}
              className="flex items-center gap-2"
            >
              {currentTopicIndex < topics.length - 1
                ? ' Next Topic'
                : 'Complete'
              }


              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      ) : (
        /* Quiz Interface */
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Target className="w-8 h-8 text-primary" />
              <div>
                <h2 className="text-xl font-bold">Quiz: {currentTopic.title}</h2>
                <p className="text-muted-foreground">
                  Question {currentQuestionIndex + 1} of {currentTopic.questions.length}
                </p>
              </div>
            </div>
            <Badge variant="outline">
              Score: {quizScore}/{answeredQuestions.size}
            </Badge>
          </div>

          <div className="mb-6">
            <Progress
              value={((currentQuestionIndex + 1) / currentTopic.questions.length) * 100}
              className="h-2 mb-4"
            />

            <h3 className="text-lg font-semibold mb-4">{currentQuestion.question}</h3>

            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <Button
                  key={index}
                  variant={
                    selectedAnswer === index
                      ? showExplanation
                        ? index === currentQuestion.correctAnswer
                          ? "default"
                          : "destructive"
                        : "default"
                      : "outline"
                  }
                  className="w-full justify-start text-left h-auto p-4"
                  onClick={() => !showExplanation && handleAnswerSelect(index)}
                  disabled={showExplanation}
                >
                  <span className="mr-3 font-semibold">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                  {showExplanation && index === currentQuestion.correctAnswer && (
                    <CheckCircle className="w-5 h-5 ml-auto text-green-600" />
                  )}
                </Button>
              ))}
            </div>
          </div>

          {showExplanation && (
            <Card className="p-4 mb-6 bg-muted/50">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Explanation</h4>
                  <p className="text-sm text-muted-foreground">
                    {currentQuestion.explanation}
                  </p>
                </div>
              </div>
            </Card>
          )}

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => setShowQuiz(false)}
            >
              Back to Content
            </Button>

            {!showExplanation ? (
              <Button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
              >
                Submit Answer
              </Button>
            ) : (
              <Button onClick={handleNextQuestion}>
                {currentQuestionIndex < currentTopic.questions.length - 1
                  ? 'Next Question'
                  : 'Complete Quiz'
                }
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </Card>
      )}
    </div>
  );
};