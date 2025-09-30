// import React, { useState } from 'react';
// import { Card } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Progress } from '@/components/ui/progress';
// import { Badge } from '@/components/ui/badge';
// import { Brain, CheckCircle, ChevronRight, Lightbulb, Target } from 'lucide-react';

// interface Question {
//   question: string;
//   options: string[];
//   correctAnswer: number; // index of the correct answer in options
//   explanation: string;
// }
// interface QuizQuestion {
//   id: string;
//   question: string;
//   options: string[];
//   correctAnswer: number;
//   explanation: string;
// }
// interface Topic {
//   id: string;
//   title: string;
//   description: string;
//   content: React.ReactNode;   // ✅ changed to ReactNode
//   duration: string;
//   icon: typeof Brain;
//   questions: QuizQuestion[];
// }
// interface QuizProps {
//   topic: Topic;
//   onQuizComplete: (score: number, total: number) => void;
//   onBackToContent: () => void;
// }

// function Quiz({ topic, onQuizComplete, onBackToContent }: QuizProps) {
//   return (
//      /* Quiz Interface */
//         <Card className="p-6">
//           <div className="flex items-center justify-between mb-6">
//             <div className="flex items-center gap-3">
//               <Target className="w-8 h-8 text-primary" />
//               <div>
//                 <h2 className="text-xl font-bold">Quiz: {topic.title}</h2>
//                 <p className="text-muted-foreground">
//                   Question {currentQuestionIndex + 1} of {topic.questions.length}
//                 </p>
//               </div>
//             </div>
//             <Badge variant="outline">
//               Score: {quizScore}/{answeredQuestions.size}
//             </Badge>
//           </div>

//           <div className="mb-6">
//             <Progress 
//               value={((currentQuestionIndex + 1) / topic.questions.length) * 100} 
//               className="h-2 mb-4" 
//             />
            
//             <h3 className="text-lg font-semibold mb-4">{currentQuestion.question}</h3>
            
//             <div className="space-y-3">
//               {currentQuestion.options.map((option, index) => (
//                 <Button
//                   key={index}
//                   variant={
//                     selectedAnswer === index 
//                       ? showExplanation 
//                         ? index === currentQuestion.correctAnswer 
//                           ? "default" 
//                           : "destructive"
//                         : "default"
//                       : "outline"
//                   }
//                   className="w-full justify-start text-left h-auto p-4"
//                   onClick={() => !showExplanation && handleAnswerSelect(index)}
//                   disabled={showExplanation}
//                 >
//                   <span className="mr-3 font-semibold">
//                     {String.fromCharCode(65 + index)}.
//                   </span>
//                   {option}
//                   {showExplanation && index === currentQuestion.correctAnswer && (
//                     <CheckCircle className="w-5 h-5 ml-auto text-green-600" />
//                   )}
//                 </Button>
//               ))}
//             </div>
//           </div>

//           {showExplanation && (
//             <Card className="p-4 mb-6 bg-muted/50">
//               <div className="flex items-start gap-3">
//                 <Lightbulb className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
//                 <div>
//                   <h4 className="font-semibold mb-2">Explanation</h4>
//                   <p className="text-sm text-muted-foreground">
//                     {currentQuestion.explanation}
//                   </p>
//                 </div>
//               </div>
//             </Card>
//           )}

//           <div className="flex justify-between">
//             <Button
//               variant="outline"
//               onClick={() => setShowQuiz(false)}
//             >
//               Back to Content
//             </Button>
            
//             {!showExplanation ? (
//               <Button
//                 onClick={handleSubmitAnswer}
//                 disabled={selectedAnswer === null}
//               >
//                 Submit Answer
//               </Button>
//             ) : (
//               <Button onClick={handleNextQuestion}>
//                 {currentQuestionIndex < currentTopic.questions.length - 1 
//                   ? 'Next Question' 
//                   : 'Complete Quiz'
//                 }
//                 <ChevronRight className="w-4 h-4 ml-2" />
//               </Button>
//             )}
//           </div>
//         </Card>
//   );
// }

// export default Quiz;