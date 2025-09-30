import { QuizInterface } from "@/components/QuizInterface";

const Quiz = () => {
  return (
    <div className="p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
          Interactive Quiz
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Test your knowledge with our adaptive quiz system. 
          Get instant feedback and personalized recommendations.
        </p>
      </div>
      <QuizInterface />
    </div>
  );
};

export default Quiz;