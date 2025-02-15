
import { TravelForm } from "@/components/TravelForm";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-background via-background to-background relative overflow-hidden">
      <div className="floating-circle circle-1" />
      <div className="floating-circle circle-2" />
      <div className="floating-circle circle-3" />
      <div className="floating-circle circle-4" />
      
      <div className="container px-4 py-12 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto space-y-10">
          <header className="text-center space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-2">
              Never Miss A Deadline
            </div>
            <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Project Reminder
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stay organized and focused with intelligent project reminders that help you meet every deadline with confidence.
            </p>
          </header>
          
          <div className="flex flex-col items-center justify-center mt-8">
            <div className="w-full backdrop-blur-sm bg-white/30 rounded-2xl p-1">
              <TravelForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
