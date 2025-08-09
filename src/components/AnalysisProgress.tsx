import { useState, useEffect } from "react";
import { Card, CardBody, Progress, Chip } from "@nextui-org/react";
import { CheckCircle, Clock, Brain, FileText, Target, Sparkles } from "lucide-react";

interface AnalysisStep {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  duration: number;
}

const steps: AnalysisStep[] = [
  {
    id: "parsing",
    title: "Parsing Resume",
    description: "Extracting text and structure from your document",
    icon: FileText,
    duration: 2000,
  },
  {
    id: "extracting",
    title: "Extracting Features",
    description: "Identifying skills, experience, and key information",
    icon: Brain,
    duration: 3000,
  },
  {
    id: "scoring",
    title: "ML Scoring",
    description: "Running AI models to analyze compatibility",
    icon: Target,
    duration: 2500,
  },
  {
    id: "suggestions",
    title: "Generating Suggestions",
    description: "Creating personalized improvement recommendations",
    icon: Sparkles,
    duration: 2000,
  },
];

interface AnalysisProgressProps {
  onComplete?: () => void;
}

const AnalysisProgress = ({ onComplete }: AnalysisProgressProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);

  useEffect(() => {
    if (currentStep >= steps.length) {
      setTimeout(() => {
        onComplete?.();
      }, 1000);
      return;
    }

    const step = steps[currentStep];
    const startTime = Date.now();
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const stepProgress = Math.min((elapsed / step.duration) * 100, 100);
      const totalProgress = ((currentStep * 100) + stepProgress) / steps.length;
      
      setProgress(totalProgress);
      
      if (elapsed >= step.duration) {
        setCompletedSteps(prev => [...prev, step.id]);
        setCurrentStep(prev => prev + 1);
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [currentStep, onComplete]);

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card className="shadow-lg">
        <CardBody className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2 text-foreground">Analyzing Your Resume</h2>
            <p className="text-foreground-600">
              Our AI is processing your resume to provide detailed insights
            </p>
          </div>

          {/* Overall Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-foreground">Overall Progress</span>
              <span className="text-sm text-foreground-500">{Math.round(progress)}%</span>
            </div>
            <Progress 
              value={progress} 
              color="primary"
              className="h-3"
              classNames={{
                track: "border border-default-300",
                indicator: "bg-gradient-to-r from-primary-500 to-secondary-500"
              }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => {
              const isCompleted = completedSteps.includes(step.id);
              const isCurrent = index === currentStep;

              return (
                <div
                  key={step.id}
                  className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 ${
                    isCurrent ? 'bg-primary-50 border-l-4 border-l-primary' :
                    isCompleted ? 'bg-success-50' :
                    'bg-default-50'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${
                    isCompleted ? 'bg-success text-white' :
                    isCurrent ? 'bg-primary text-white animate-pulse-soft' :
                    'bg-default-200 text-foreground-400'
                  }`}>
                    {isCompleted ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : isCurrent ? (
                      <step.icon className="h-5 w-5" />
                    ) : (
                      <Clock className="h-5 w-5" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`font-medium ${
                      isCompleted ? 'text-success' :
                      isCurrent ? 'text-primary' :
                      'text-foreground-400'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-foreground-500">
                      {step.description}
                    </p>
                  </div>

                  {isCurrent && (
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                      <Chip
                        size="sm"
                        color="primary"
                        variant="flat"
                        className="text-xs"
                      >
                        Processing...
                      </Chip>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {progress === 100 && (
            <div className="mt-8 p-4 bg-success-50 rounded-lg border border-success-200 animate-fade-in">
              <div className="flex items-center space-x-2 text-success font-medium">
                <CheckCircle className="h-5 w-5" />
                <span>Analysis Complete!</span>
              </div>
              <p className="text-sm text-foreground-500 mt-1">
                Preparing your detailed results...
              </p>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default AnalysisProgress;