import { Card, CardBody, Button } from "@nextui-org/react";
import { Upload, Brain, Lightbulb, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Resume",
      description: "Drag and drop your PDF or Word document. Our system supports all major resume formats.",
      gradient: "from-primary-500 to-secondary-500",
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Our ML models analyze your resume for ATS compatibility, keyword density, and formatting.",
      gradient: "from-secondary-500 to-success-500",
    },
    {
      icon: Lightbulb,
      title: "Get Insights",
      description: "Receive detailed feedback with actionable suggestions to improve your resume's performance.",
      gradient: "from-success-500 to-warning-500",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 gradient-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">How It Works</h2>
          <p className="text-lg text-foreground-600 max-w-2xl mx-auto">
            Get professional resume feedback in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
              <Card className="card-hover border-0 shadow-lg bg-background/50 backdrop-blur-sm h-full">
                <CardBody className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{step.title}</h3>
                  <p className="text-foreground-600 leading-relaxed">{step.description}</p>
                </CardBody>
                
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
              </Card>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                  <ArrowRight className="h-6 w-6 text-foreground-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="bg-gradient-to-r from-primary-50 to-secondary-50 border-0">
            <CardBody className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to optimize your resume?</h3>
              <p className="text-foreground-600 mb-6">
                Join thousands of job seekers who have improved their resume performance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  color="primary"
                  size="lg"
                  className="btn-hero font-medium"
                >
                  Start Free Analysis
                </Button>
                <Button
                  variant="bordered"
                  size="lg"
                  className="font-medium border-default-300"
                >
                  View Sample Report
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;