import { Card, CardBody, Button, Progress, Chip } from "@nextui-org/react";
import { ChevronRight, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { useState, useEffect } from "react";

interface ScoreCardProps {
  title: string;
  score: number;
  maxScore: number;
  icon: React.ElementType;
  description: string;
  trend?: "up" | "down" | "neutral";
  onClick?: () => void;
}

const ScoreCard = ({ title, score, maxScore, icon: Icon, description, trend, onClick }: ScoreCardProps) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  const percentage = (score / maxScore) * 100;

  // Determine score category and colors
  const getScoreCategory = (percent: number) => {
    if (percent >= 80) return { category: "excellent", color: "success" as const };
    if (percent >= 60) return { category: "good", color: "primary" as const };
    if (percent >= 40) return { category: "warning", color: "warning" as const };
    return { category: "poor", color: "danger" as const };
  };

  const { color } = getScoreCategory(percentage);

  // Animate score on mount
  useEffect(() => {
    const duration = 1500;
    const steps = 60;
    const increment = score / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= score) {
        setAnimatedScore(score);
        clearInterval(timer);
      } else {
        setAnimatedScore(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [score]);

  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-success" />;
      case "down":
        return <TrendingDown className="h-4 w-4 text-danger" />;
      default:
        return <Minus className="h-4 w-4 text-foreground-400" />;
    }
  };

  const getTrendChip = () => {
    if (!trend || trend === "neutral") return null;
    
    return (
      <Chip
        size="sm"
        color={trend === "up" ? "success" : "danger"}
        variant="flat"
        startContent={getTrendIcon()}
        className="text-xs"
      >
        {trend === "up" ? "Improving" : "Declining"}
      </Chip>
    );
  };

  return (
    <Card className="card-hover cursor-pointer" isPressable onClick={onClick}>
      <CardBody className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl transition-transform duration-200 group-hover:scale-110 ${
            color === 'success' ? 'bg-success-100 text-success' :
            color === 'primary' ? 'bg-primary-100 text-primary' :
            color === 'warning' ? 'bg-warning-100 text-warning' :
            'bg-danger-100 text-danger'
          }`}>
            <Icon className="h-6 w-6" />
          </div>
          {getTrendChip()}
        </div>

        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg text-foreground">{title}</h3>
            <p className="text-sm text-foreground-500">{description}</p>
          </div>

          {/* Score Display */}
          <div className="flex items-baseline space-x-2">
            <span className={`text-3xl font-bold ${
              color === 'success' ? 'text-success' :
              color === 'primary' ? 'text-primary' :
              color === 'warning' ? 'text-warning' :
              'text-danger'
            }`}>
              {animatedScore}
            </span>
            <span className="text-foreground-400">/ {maxScore}</span>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-foreground-500">Score</span>
              <span className={`font-medium ${
                color === 'success' ? 'text-success' :
                color === 'primary' ? 'text-primary' :
                color === 'warning' ? 'text-warning' :
                'text-danger'
              }`}>{Math.round(percentage)}%</span>
            </div>
            <Progress 
              value={percentage}
              color={color}
              className="h-2"
              classNames={{
                track: "border border-default-200",
              }}
            />
          </div>

          {/* View Details Button */}
          <Button
            variant="light"
            size="sm"
            className="w-full justify-between text-foreground-500 hover:text-foreground mt-4 group"
            endContent={<ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />}
            onClick={(e) => {
              e.stopPropagation();
              onClick?.();
            }}
          >
            View Details
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default ScoreCard;