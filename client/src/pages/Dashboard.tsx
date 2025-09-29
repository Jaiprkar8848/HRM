import { Users, Clock, TrendingUp, ArrowRight, Target, Heart, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

//todo: remove mock functionality
import officeWorkspaceImg from "@assets/stock_images/modern_office_worksp_c0b11ee1.jpg";
import teamMeetingImg from "@assets/stock_images/diverse_business_tea_2fd6804d.jpg";
import recruitmentImg from "@assets/stock_images/human_resources_recr_9832f1b5.jpg";

export default function Dashboard() {

  //todo: remove mock functionality
  const hrQuotes = [
    {
      quote: "The way your employees feel is the way your customers will feel.",
      author: "Sybil F. Stershic",
      icon: Heart
    },
    {
      quote: "Take care of your employees and they'll take care of your business.",
      author: "Richard Branson", 
      icon: Star
    },
    {
      quote: "Human resources isn't a thing we do, it's the thing that runs our business.",
      author: "Steve Wynn",
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div 
        className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${officeWorkspaceImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll',
        }}
      >
        <div className="text-white space-y-3 sm:space-y-4 max-w-4xl px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            HR Management System
          </h1>
          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Empowering People, Driving Success
          </p>
          <Button 
            size="lg" 
            className="mt-4 sm:mt-6 w-full sm:w-auto"
            data-testid="button-get-started"
            onClick={() => console.log('Get started clicked')}
          >
            Get Started
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Button>
        </div>
      </div>

      {/* Quote Section with Team Meeting Background */}
      <div 
        className="relative py-12 sm:py-16 md:py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${teamMeetingImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Our HR Philosophy</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {hrQuotes.map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 h-full">
                <CardContent className="p-4 sm:p-6 text-center h-full flex flex-col justify-center">
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4 text-white" />
                  <blockquote className="text-sm sm:text-base md:text-lg italic mb-3 sm:mb-4 text-white leading-relaxed">
                    "{item.quote}"
                  </blockquote>
                  <cite className="text-xs sm:text-sm text-white/80">— {item.author}</cite>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Action Section with Recruitment Background */}
      <div 
        className="relative py-12 sm:py-16 md:py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${recruitmentImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Ready to Transform Your HR?</h2>
          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Streamline your human resources processes with our comprehensive management system.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-black w-full sm:w-auto"
              data-testid="button-learn-more"
              onClick={() => console.log('Learn more clicked')}
            >
              Learn More
            </Button>
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground w-full sm:w-auto"
              data-testid="button-start-free-trial"
              onClick={() => console.log('Start free trial clicked')}
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="p-6 sm:p-8 md:p-12 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
            HR Management Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card className="hover-elevate h-full">
              <CardContent className="p-4 sm:p-6 text-center h-full flex flex-col">
                <Users className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-base sm:text-lg">Recruitment</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-grow">
                  Streamline your hiring process with job posting management and applicant tracking.
                </p>
              </CardContent>
            </Card>
            <Card className="hover-elevate h-full">
              <CardContent className="p-4 sm:p-6 text-center h-full flex flex-col">
                <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-base sm:text-lg">Performance</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-grow">
                  Track and evaluate employee performance with comprehensive appraisal tools.
                </p>
              </CardContent>
            </Card>
            <Card className="hover-elevate h-full">
              <CardContent className="p-4 sm:p-6 text-center h-full flex flex-col">
                <Clock className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-base sm:text-lg">Evaluation</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-grow">
                  Conduct thorough employee evaluations with structured review processes.
                </p>
              </CardContent>
            </Card>
            <Card className="hover-elevate h-full">
              <CardContent className="p-4 sm:p-6 text-center h-full flex flex-col">
                <Target className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-base sm:text-lg">Job Descriptions</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-grow">
                  Create and manage detailed job descriptions and role specifications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}