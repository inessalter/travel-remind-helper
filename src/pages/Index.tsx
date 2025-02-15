
import { TravelForm } from "@/components/TravelForm";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-[#FCFAFF] relative overflow-hidden">
      <div className="floating-circle circle-1" />
      <div className="floating-circle circle-2" />
      <div className="floating-circle circle-3" />
      <div className="floating-circle circle-4" />
      
      <div className="container px-4 py-16 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <header className="text-center space-y-8 mb-16 animate-fade-in">
            <span className="inline-flex items-center px-3 py-1 space-x-2 bg-[#8B5CF6]/10 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B5CF6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B5CF6]"></span>
              </span>
              <span className="text-sm font-medium text-[#8B5CF6]">Smart Project Management</span>
            </span>
            <div className="space-y-6">
              <h1 className="text-6xl font-bold tracking-tight text-[#1A1F2C]">
                Your Projects,
                <br />
                <span className="text-[#8B5CF6]">Always On Time</span>
              </h1>
              <p className="text-[#64748B] text-xl max-w-2xl mx-auto leading-relaxed">
                Transform your project management with intelligent reminders that ensure every deadline is met with precision.
              </p>
            </div>
          </header>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/5 to-[#EC4899]/5 rounded-3xl transform -rotate-1"></div>
            <div className="relative bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-[#E2E8F0]">
              <TravelForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
