import { Card, CardBody, Button, Chip, CircularProgress } from "@nextui-org/react";
import ScoreCard from "./ScoreCard";
import { 
  Target, 
  Brain, 
  BookOpen, 
  Hash, 
  Palette, 
  Download, 
  Share, 
  TrendingUp,
  Trophy
} from "lucide-react";
import { useState, useEffect } from "react";

interface ScoreData {
  overallScore: number;
  categories: {
    skillMatch: number;
    atsScore: number;
    readability: number;
    keywordDensity: number;
    formatting: number;
  };
}

const mockScoreData: ScoreData = {
  overallScore: 78,
  categories: {
    skillMatch: 82,
    atsScore: 75,
    readability: 88,
    keywordDensity: 65,
    formatting: 90,
  },
};

const ResultsDashboard = () => {
  const [animatedOverallScore, setAnimatedOverallScore] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const duration = 2000;
    const steps = 80;
    const increment = mockScoreData.overallScore / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= mockScoreData.overallScore) {
        setAnimatedOverallScore(mockScoreData.overallScore);
        clearInterval(timer);
      } else {
        setAnimatedOverallScore(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const getScoreColor = (score: number) => {
    if (score >= 80) return "success" as const;
    if (score >= 60) return "primary" as const;
    if (score >= 40) return "warning" as const;
    return "danger" as const;
  };

  const getScoreMessage = (score: number) => {
    if (score >= 80) return "Excellent! Your resume is performing very well.";
    if (score >= 60) return "Good! Some improvements could boost your score.";
    if (score >= 40) return "Fair. Several areas need attention.";
    return "Needs improvement. Let's optimize your resume.";
  };

  const getPerformanceLabel = (score: number) => {
    if (score >= 80) return "Excellent";
    if (score >= 60) return "Good";
    if (score >= 40) return "Fair";
    return "Needs Work";
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Resume Analysis Results</h1>
          <p className="text-lg text-foreground-600">
            Here's how your resume performs across key criteria
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Overall Score Section */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg h-fit sticky top-8">
              <CardBody className="p-8 text-center">
                <div className="mb-6">
                  <div className="flex justify-center mb-4">
                    <CircularProgress
                      size="lg"
                      value={animatedOverallScore}
                      color={getScoreColor(animatedOverallScore)}
                      showValueLabel={true}
                      className="score-ring"
                      classNames={{
                        svg: "w-32 h-32",
                        value: "text-2xl font-bold",
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-foreground">Overall Score</h2>
                    <p className="text-foreground-600">
                      {getScoreMessage(animatedOverallScore)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-2 mb-6">
                  <Trophy className={`h-5 w-5 ${
                    animatedOverallScore >= 80 ? 'text-success' :
                    animatedOverallScore >= 60 ? 'text-primary' :
                    animatedOverallScore >= 40 ? 'text-warning' : 'text-danger'
                  }`} />
                  <Chip
                    color={getScoreColor(animatedOverallScore)}
                    variant="flat"
                    size="sm"
                  >
                    {getPerformanceLabel(animatedOverallScore)}
                  </Chip>
                </div>

                <div className="space-y-3">
                  <Button 
                    color="primary" 
                    className="w-full btn-hero"
                    startContent={<Download className="h-4 w-4" />}
                  >
                    Download Report
                  </Button>
                  <Button 
                    variant="bordered" 
                    className="w-full border-default-300"
                    startContent={<Share className="h-4 w-4" />}
                  >
                    Share Results
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Category Scores */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6 animate-slide-up">
              <ScoreCard
                title="Skill Match"
                score={mockScoreData.categories.skillMatch}
                maxScore={100}
                icon={Target}
                description="How well your skills align with job requirements"
                trend="up"
                onClick={() => setSelectedCategory("skillMatch")}
              />
              
              <ScoreCard
                title="ATS Score"
                score={mockScoreData.categories.atsScore}
                maxScore={100}
                icon={Brain}
                description="Applicant Tracking System compatibility"
                trend="neutral"
                onClick={() => setSelectedCategory("atsScore")}
              />
              
              <ScoreCard
                title="Readability"
                score={mockScoreData.categories.readability}
                maxScore={100}
                icon={BookOpen}
                description="How easy your resume is to read and understand"
                trend="up"
                onClick={() => setSelectedCategory("readability")}
              />
              
              <ScoreCard
                title="Keyword Density"
                score={mockScoreData.categories.keywordDensity}
                maxScore={100}
                icon={Hash}
                description="Relevant keywords and industry terms usage"
                trend="down"
                onClick={() => setSelectedCategory("keywordDensity")}
              />
              
              <ScoreCard
                title="Formatting"
                score={mockScoreData.categories.formatting}
                maxScore={100}
                icon={Palette}
                description="Visual structure and professional appearance"
                trend="up"
                onClick={() => setSelectedCategory("formatting")}
              />

              {/* Quick Insights Card */}
              <Card className="md:col-span-1">
                <CardBody className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">Quick Insights</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-success rounded-full" />
                      <span className="text-foreground-600">Strong formatting and readability</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-warning rounded-full" />
                      <span className="text-foreground-600">Add more relevant keywords</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground-600">Good skill alignment</span>
                    </div>
                  </div>
                  <Button 
                    variant="light" 
                    size="sm" 
                    className="w-full mt-4 text-primary"
                  >
                    View All Suggestions
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsDashboard;