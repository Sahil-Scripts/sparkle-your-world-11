import { Search, Users, Plus, Filter, ChevronDown, TrendingUp, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TaskCard } from "./TaskCard";

const mockTasks = [
  {
    title: "Meeting with joes members",
    description: "Description about the team meeting with members. Good team has more than 100 followers.",
    status: "in-progress" as const,
    priority: "high" as const,
    assignees: [
      { name: "John", initials: "JM" },
      { name: "Alice", initials: "AS" },
      { name: "Bob", initials: "BK" }
    ],
    hasAttachment: true,
    dueDate: "All People"
  },
  {
    title: "Design System",
    description: "Description Responsive Design system for sending pages in mobile applications and create component libraries.",
    progress: 60,
    status: "in-progress" as const,
    priority: "medium" as const,
    assignees: [
      { name: "Design team", initials: "DT" },
      { name: "Marketing team", initials: "MT" }
    ],
    dueDate: "All People"
  },
  {
    title: "Meeting With The Sales Team",
    description: "Checking the sales of the recent month and discussing the goals and vision of the new team.",
    status: "todo" as const,
    priority: "medium" as const,
    assignees: [
      { name: "Sales", initials: "ST" },
      { name: "Alice", initials: "AL" }
    ],
    hasAttachment: true,
    dueDate: "All People"
  }
];

export const Dashboard = () => {
  return (
    <div className="flex-1 p-8 cosmic-scroll overflow-y-auto">
      {/* Professional Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground tracking-tight">
              Project Dashboard
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              Streamlined project management for enhanced team productivity
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 px-3 py-2 glass-card rounded-lg">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center ring-2 ring-background">
                  <Users className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center ring-2 ring-background">
                  <span className="text-xs font-medium text-secondary-foreground">5</span>
                </div>
              </div>
              <span className="text-sm font-medium text-muted-foreground">Active Members</span>
            </div>
            
            <Button className="gap-2 glow-button">
              <Search className="w-4 h-4" />
              Quick Search
            </Button>
            
            <Button variant="outline" className="glass-card border-border/50">
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="glass-card border-border/30 hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Tasks</p>
                  <p className="text-2xl font-bold text-foreground">12</p>
                  <p className="text-xs text-accent flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" />
                    +2 this week
                  </p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-border/30 hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Team Members</p>
                  <p className="text-2xl font-bold text-foreground">8</p>
                  <p className="text-xs text-accent flex items-center gap-1 mt-1">
                    <Users className="w-3 h-3" />
                    All active
                  </p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <Users className="w-6 h-6 text-secondary-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-border/30 hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Priority Items</p>
                  <p className="text-2xl font-bold text-foreground">3</p>
                  <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    Needs attention
                  </p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-destructive/20 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-destructive" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Refined Controls */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Button variant="default" className="gap-2 glass-card bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20">
            <Filter className="w-4 h-4" />
            All Tasks
            <ChevronDown className="w-4 h-4" />
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground transition-colors">
            In Progress
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground transition-colors">
            High Priority
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground transition-colors">
            Due Soon
          </Button>
        </div>
        
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-medium text-foreground">{mockTasks.length}</span> tasks
        </div>
      </div>

      {/* Enhanced Task Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockTasks.map((task, index) => (
          <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <TaskCard {...task} />
          </div>
        ))}
      </div>
    </div>
  );
};