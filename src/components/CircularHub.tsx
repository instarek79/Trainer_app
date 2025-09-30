import { Link } from "react-router-dom";
import { ComponentType } from "react";
import { cn } from "@/lib/utils";
import { BookOpen, Brain, Map, ListChecks, Settings, Sparkles, ClipboardList } from "lucide-react";

interface HubItem {
  label: string;
  to: string;
  icon: ComponentType<{ className?: string }>;
  gradient: string; // tailwind gradient classes
  ring?: string; // optional ring color
  size?: "sm" | "md" | "lg";
}

const items: HubItem[] = [
  {
    label: "ML Introduction",
    to: "/ml-introduction",
    icon: BookOpen,
    gradient: "from-pink-400 to-rose-500",
    ring: "ring-rose-300/60",
    size: "md",
  },
  {
    label: "Roadmap",
    to: "/roadmap",
    icon: Map,
    gradient: "from-sky-400 to-indigo-500",
    ring: "ring-sky-300/60",
    size: "md",
  },
  {
    label: "Quiz",
    to: "/quiz",
    icon: Brain,
    gradient: "from-violet-400 to-fuchsia-500",
    ring: "ring-fuchsia-300/60",
    size: "md",
  },
  {
    label: "Quiz Master",
    to: "/quizmaster",
    icon: Sparkles,
    gradient: "from-amber-400 to-orange-500",
    ring: "ring-amber-300/60",
    size: "md",
  },
  {
    label: "My Tasks",
    to: "/tasks",
    icon: ClipboardList,
    gradient: "from-teal-400 to-emerald-500",
    ring: "ring-emerald-300/60",
    size: "sm",
  },
  {
    label: "User Settings",
    to: "/settings",
    icon: Settings,
    gradient: "from-cyan-400 to-blue-500",
    ring: "ring-cyan-300/60",
    size: "sm",
  },
];

export function CircularHub() {
  return (
    <div className="relative mx-auto max-w-5xl aspect-[16/10]">
      {/* background arcs */}
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#1B0D2A] via-[#0E1742] to-[#0A0F2B]" />
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-8 -left-8 h-64 w-64 rounded-full border border-fuchsia-500/30" />
        <div className="absolute -bottom-10 -right-10 h-72 w-72 rounded-full border border-cyan-400/30" />
      </div>

      {/* center circle */}
      <Link
        to="/ml-introduction"
        className={cn(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
          "flex h-44 w-44 items-center justify-center rounded-full",
          "bg-gradient-to-b from-rose-400 to-pink-500 text-white shadow-2xl",
          "ring-4 ring-pink-300/50 hover:ring-pink-200/80",
          "transition-transform duration-200 hover:scale-105"
        )}
      >
        <div className="text-center">
          <div className="text-lg font-semibold">Start</div>
          <div className="text-sm opacity-90">ML Journey</div>
        </div>
      </Link>

      {/* orbital items */}
      <div className="absolute inset-0">
        <Orb index={0} item={items[0]} className="left-[8%] top-[12%]" />
        <Orb index={1} item={items[1]} className="left-[70%] top-[16%]" />
        <Orb index={2} item={items[2]} className="left-[12%] top-[60%]" />
        <Orb index={3} item={items[3]} className="left-[66%] top-[62%]" />
        <Orb index={4} item={items[4]} className="left-[78%] top-[40%]" small />
        <Orb index={5} item={items[5]} className="left-[22%] top-[34%]" small />
      </div>
    </div>
  );
}

function Orb({ item, className, index, small }: { item: HubItem; className?: string; index: number; small?: boolean }) {
  const Icon = item.icon;
  const sizeCls = small || item.size === "sm" ? "h-24 w-24" : item.size === "lg" ? "h-40 w-40" : "h-32 w-32";
  return (
    <Link
      to={item.to}
      className={cn(
        "group absolute",
        className,
        sizeCls,
        "rounded-full flex flex-col items-center justify-center text-white",
        "bg-gradient-to-br",
        item.gradient,
        "shadow-xl ring-4",
        item.ring,
        "transition-transform duration-200 hover:scale-105"
      )}
      title={item.label}
    >
      <Icon className="h-6 w-6 drop-shadow-sm" />
      <span className="mt-1 text-xs font-medium text-white/95 text-center px-2 leading-tight">
        {item.label}
      </span>
    </Link>
  );
}

export default CircularHub;
