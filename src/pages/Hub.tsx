import { Link } from "react-router-dom";
import {
  BookOpen,
  Brain,
  Map,
  Settings,
  Trophy,
  TrendingUp,
} from "lucide-react";

const Hub = () => {
  // const userName = "Zeinab";
  const userName = localStorage.getItem("username") ||"";
  const cards = [
    {
      to: "/ml-introduction",
      title: "ML Journey",
      description:
        "Begin your machine learning adventure with interactive lessons, projects, and challenges designed to build a strong foundation.",
      icon: <BookOpen className="h-6 w-6" />,
      image: "./assets/ML-journey.jpg",
    },
    {
      to: "/practice",
      title: "Practice",
      description:
        "Sharpen your skills with hands-on exercises and quizzes. Practice makes mastery in the world of AI and data science.",
      icon: <Brain className="h-6 w-6" />,
      image: "./assets/practical.png",
    },
    {
      to: "/roadmap",
      title: "Roadmap",
      description:
        "Follow a structured learning path tailored for beginners and advanced learners, helping you stay on track with your goals.",
      icon: <Map className="h-6 w-6" />,
      image: "./assets/roadmap.jpg",
    },
    {
      to: "/settings",
      title: "User Settings",
      description:
        "Customize your profile, adjust preferences, and manage your account in one simple dashboard.",
      icon: <Settings className="h-6 w-6" />,
      image: "./assets/settings.png",
    },
    {
      to: "/achievements",
      title: "Rewards",
      description:
        "Track your milestones and celebrate achievements. Unlock trophies and badges as you progress.",
      icon: <Trophy className="h-6 w-6" />,
      image: "./assets/Reward.png",
    },
    // {
    //   to: "/progress",
    //   title: "Progress",
    //   description:
    //     "Keep an eye on your learning journey with analytics and insights into your module completion and skill growth.",
    //   icon: <TrendingUp className="h-6 w-6" />,
    //   image: "./assets/progress.png",
    // },
  ];

  return (
    <div className="relative min-h-screen  text-white px-6 py-12">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1
          className="text-4xl font-bold"
          style={{ color: "hsl(20, 90%, 58%)" }}
        >
          {userName==="" ? "Welcome to Diabetes Trainer 👋" : `Welcome, ${userName} 👋`}
        </h1>
        <p className="mt-2 text-lg text-gray-500">
          Jump back into your learning journey. Choose a module below.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {cards.map((card) => (
          <Link
            key={card.to}
            to={card.to}
            className="rounded-xl overflow-hidden bg-gray-900 hover:bg-gray-800 shadow-xl transition-all duration-300 border border-gray-800 hover:border-[hsl(20,90%,58%)]"
          >
            {/* Image */}
            <div className="h-40 w-full overflow-hidden">
              <img
                src={card.image}
                alt={card.title}

                className="h-full w-full object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-lg bg-[hsl(20,90%,58%)] text-black">
                  {card.icon}
                </div>
                <h2 className="text-xl font-semibold">{card.title}</h2>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hub;
