import { Brain, Home, Map, BookOpen, Trophy, User, TrendingUp, ClipboardList, Settings, Cpu } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Map, label: 'Learning Path', path: '/roadmap' },
  { icon: BookOpen, label: 'Practice', path: '/practice' },
  { icon: Cpu, label: 'ML Journey', path: '/ml-introduction' },
  // { icon: Cpu, label: 'Simulation', path: '/simulation' },
  // { icon: Brain, label: 'Quiz Master', path: '/quizmaster' },
  { icon: Trophy, label: 'Achievements', path: '/achievements' },
  // { icon: TrendingUp, label: 'Progress', path: '/progress' },
  // { icon: ClipboardList, label: 'My Tasks', path: '/tasks' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const isCollapsed = state === 'collapsed';
  const isActive = (path: string) => location.pathname === path;
  const userName = localStorage.getItem("username") || "User";
  
  // Mock user data - replace with real data from backend
  const userProgress = 65;
  // const userName = "Zeinab Moawa";
  const currentLevel = "Intermediate";
  const streakDays = 7;

  return (
    <Sidebar className="border-r border-border/50 bg-gradient-to-b from-background to-background/95">
      <SidebarHeader className="p-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center shadow-lg">
            <Brain className="w-6 h-6" />
          </div>
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-hero bg-clip-text ">
                 Diabetes Trainer
              </span>
              {/* <span className="text-sm text-muted-foreground font-medium">AI Trainer</span> */}
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        {!isCollapsed && (
          <SidebarGroup className="px-4 py-3">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 " />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-semibold truncate">{userName}</p>
                  <p className="text-sm text-muted-foreground">{currentLevel}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground font-medium">Progress</span>
                  <Badge variant="secondary" className="text-sm font-semibold">{userProgress}%</Badge>
                </div>
                <Progress value={userProgress} className="h-2" />
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground font-medium">🔥 {streakDays} day streak</span>
                <span className="text-muted-foreground font-medium">⭐ 1,247 XP</span>
              </div>
            </div>
          </SidebarGroup>
        )}

        <SidebarGroup>
          {/* <SidebarGroupLabel>Navigation</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild tooltip={isCollapsed ? item.label : undefined}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                          isActive
                            ? 'bg-primary/10 text-primary font-medium shadow-sm'
                            : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                        }`
                      }
                    >
                      <item.icon className="w-4 h-4 flex-shrink-0" />
                      {!isCollapsed && <span className="font-medium">{item.label}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!isCollapsed && (
          <SidebarGroup className="mt-auto">
            <SidebarGroupLabel>Quick Stats</SidebarGroupLabel>
            <SidebarGroupContent>
              <div className="px-3 space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Modules Completed</span>
                  <span className="font-medium">12/18</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Quiz Score Avg</span>
                  <span className="font-medium text-green-600">87%</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Time Spent</span>
                  <span className="font-medium">24h 32m</span>
                </div>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-border/50">
        {!isCollapsed && (
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Keep learning, keep growing! 🚀
            </p>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}