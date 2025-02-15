
import { TravelForm } from "@/components/TravelForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container px-4 py-8 mx-auto">
        <div className="max-w-4xl mx-auto space-y-8">
          <header className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl font-semibold tracking-tight">Travel Reminder</h1>
            <p className="text-muted-foreground">Plan ahead and never miss the best time to book your trips.</p>
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
