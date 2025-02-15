
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { differenceInDays } from "date-fns";

export function TravelForm() {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState<Date>();
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!destination || !date || !email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const daysUntilTravel = differenceInDays(date, new Date());

    if (daysUntilTravel <= 61) {
      toast({
        title: "Book Now!",
        description: "Your travel date is approaching. We recommend booking your trip now!",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Reminder Set!",
        description: `We'll remind you about your trip to ${destination} 61 days before your travel date.`,
      });
      // Here you would typically integrate with an email service
      console.log("Email reminder will be sent to:", email);
    }
  };

  return (
    <Card className="w-full max-w-md animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Plan Your Trip</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Destination</label>
            <Input
              type="text"
              placeholder="Where do you want to go?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full transition-all duration-200 focus:ring-2"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Travel Date</label>
            <div className="border rounded-lg p-4">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={{ before: new Date() }}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full transition-all duration-200 focus:ring-2"
            />
          </div>
          
          <Button 
            type="submit"
            className="w-full transition-all duration-200 hover:shadow-lg"
          >
            Set Reminder
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
