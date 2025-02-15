
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { differenceInDays } from "date-fns";

export function TravelForm() {
  const [projectName, setProjectName] = useState("");
  const [date, setDate] = useState<Date>();
  const [email, setEmail] = useState("");
  const [reminderType, setReminderType] = useState("1");
  const [customDays, setCustomDays] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!projectName || !date || !email || !reminderType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (reminderType === "custom" && !customDays) {
      toast({
        title: "Missing Days",
        description: "Please specify the number of days for the reminder",
        variant: "destructive",
      });
      return;
    }

    const reminderDays = {
      "1": 1,
      "3": 3,
      "7": 7,
      "custom": parseInt(customDays),
    }[reminderType];

    const daysUntilProject = differenceInDays(date, new Date());

    if (daysUntilProject < 0) {
      toast({
        title: "Invalid Date",
        description: "Please select a future date for your project",
        variant: "destructive",
      });
      return;
    }

    // If project is due in less than 1 day
    if (daysUntilProject < 1) {
      toast({
        title: "Project Due Very Soon!",
        description: "Your project deadline is in less than 24 hours!",
        variant: "destructive",
      });
    } else {
      const reminderDate = new Date(date);
      reminderDate.setDate(reminderDate.getDate() - reminderDays);
      
      toast({
        title: "Reminder Set Successfully!",
        description: `You'll receive a reminder for "${projectName}" on ${reminderDate.toLocaleDateString()}`,
      });
      console.log("Email reminder will be sent to:", email, "for project:", projectName, "on:", reminderDate);
    }
  };

  return (
    <Card className="w-full max-w-md animate-fade-in bg-white/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Set Project Reminder</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Project Name</label>
            <Input
              type="text"
              placeholder="Enter project name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="w-full transition-all duration-200 focus:ring-2"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Project Deadline</label>
            <div className="border rounded-lg p-4 bg-white">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={{ before: new Date() }}
              />
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-sm font-medium">Reminder Preference</label>
            <RadioGroup 
              value={reminderType} 
              onValueChange={setReminderType}
              className="gap-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="1" id="day" />
                <Label htmlFor="day">Day before</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="3" id="three-days" />
                <Label htmlFor="three-days">3 days before</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="7" id="week" />
                <Label htmlFor="week">Week before</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="custom" id="custom" />
                <Label htmlFor="custom">Custom</Label>
              </div>
            </RadioGroup>

            {reminderType === "custom" && (
              <div className="pl-6">
                <Input
                  type="number"
                  placeholder="Number of days before"
                  value={customDays}
                  onChange={(e) => setCustomDays(e.target.value)}
                  min="1"
                  className="w-full max-w-[200px]"
                />
              </div>
            )}
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
            className="w-full transition-all duration-200 hover:shadow-lg bg-primary/90 hover:bg-primary"
          >
            Set Reminder
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
