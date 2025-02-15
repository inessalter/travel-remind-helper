
import { TravelForm } from "@/components/TravelForm";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-accent/30 to-secondary/30 relative overflow-hidden">
      <div className="floating-circle circle-1" />
      <div className="floating-circle circle-2" />
      <div className="floating-circle circle-3" />
      <div className="floating-circle circle-4" />
      
      <div className="container px-4 py-8 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <header className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl font-semibold tracking-tight">Project Reminder</h1>
            <p className="text-muted-foreground">Never miss your project deadlines with smart reminders.</p>
          </header>
          
          <div className="flex flex-col items-center justify-center">
            <TravelForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
