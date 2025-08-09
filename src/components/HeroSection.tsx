import { Button, Chip } from "@nextui-org/react";
import { ArrowRight, Upload, Zap, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import UploadZone from "./UploadZone";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Hero Badge */}
        <div className="animate-fade-in">
          <Chip
            startContent={<Zap className="h-4 w-4" />}
            variant="flat"
            color="primary"
            size="lg"
            className="bg-primary-50 text-primary-700 border border-primary-200"
          >
            AI-Powered Resume Analysis
          </Chip>
        </div>

        {/* Hero Title */}
        <div className="space-y-4 animate-slide-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Smart Resume Analyzer
          </h1>
          <div className="text-2xl md:text-3xl lg:text-4xl">
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              ML Powered
            </span>
          </div>
        </div>

        {/* Hero Description */}
        <p className="text-lg md:text-xl text-foreground-600 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Get instant, AI-powered feedback on your resume. Improve ATS scores, optimize keywords, 
          and increase your chances of landing your dream job.
        </p>

        {/* Hero CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Button 
            size="lg" 
            color="primary"
            className="btn-hero font-medium text-lg px-8 py-6 group"
            onClick={() => navigate('/analysis')}
            endContent={<ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />}
          >
            Analyze My Resume
          </Button>
          <Button 
            variant="bordered" 
            size="lg" 
            className="font-medium text-lg px-8 py-6 group border-default-300"
            startContent={<Upload className="h-5 w-5" />}
          >
            View Sample Report
          </Button>
        </div>

        {/* Upload Zone */}
        <div className="max-w-2xl mx-auto mt-16 animate-fade-in">
          <UploadZone />
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 pt-12 text-sm text-foreground-500 animate-fade-in">
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-success" />
            <span>95% ATS Compatibility</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-warning" />
            <span>Instant Analysis</span>
          </div>
          <div className="flex items-center gap-2">
            <Upload className="h-4 w-4 text-primary" />
            <span>Secure & Private</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;