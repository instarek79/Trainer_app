import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Award, Star, Target } from "lucide-react";
import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const achievements = [
  {
    id: 1,
    title: "First Steps",
    description: "Completed your first module",
    icon: Trophy,
    progress: 100,
    badge: "Beginner",
  },
  {
    id: 2,
    title: "Quiz Master",
    description: "Scored 80%+ in 5 quizzes",
    icon: Award,
    progress: 60,
    badge: "In Progress",
  },
  {
    id: 3,
    title: "Consistency",
    description: "Logged in 7 days in a row",
    icon: Star,
    progress: 30,
    badge: "Locked",
  },
  {
    id: 4,
    title: "Sharpshooter",
    description: "Completed 3 modules without retries",
    icon: Target,
    progress: 0,
    badge: "Locked",
  },
];

// Chart data
const xpProgressData = [
  { day: "Mon", xp: 20 },
  { day: "Tue", xp: 40 },
  { day: "Wed", xp: 65 },
  { day: "Thu", xp: 90 },
  { day: "Fri", xp: 120 },
  { day: "Sat", xp: 150 },
  { day: "Sun", xp: 180 },
];

const quizVsLessonsData = [
  { type: "Quizzes", completed: 12 },
  { type: "Lessons", completed: 18 },
];

const Achievements = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Achievements</h1>
        <p className="text-muted-foreground">
          Track your milestones, badges, and progress earned through learning.
        </p>
      </div>

      {/* Achievements Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((ach) => (
          <Card key={ach.id} className="p-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <ach.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="font-semibold">{ach.title}</h2>
                <p className="text-sm text-muted-foreground">{ach.description}</p>
              </div>
              <Badge
                variant={ach.progress === 100 ? "default" : "secondary"}
                className="ml-auto"
              >
                {ach.badge}
              </Badge>
            </div>

            <Progress value={ach.progress} className="h-2" />
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* XP Progress Chart */}
        <Card className="p-5">
          <h2 className="font-semibold mb-4">XP Progress (Weekly)</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={xpProgressData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="xp" stroke="#f97316" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Quiz vs Lessons Chart */}
        <Card className="p-5">
          <h2 className="font-semibold mb-4">Quizzes vs Lessons Completed</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <ReBarChart data={quizVsLessonsData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="completed" fill="#f97316" radius={[6, 6, 0, 0]} />
              </ReBarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Achievements;
