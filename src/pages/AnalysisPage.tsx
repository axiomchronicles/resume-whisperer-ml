import { useState } from "react";
import Navigation from "@/components/Navigation";
import AnalysisProgress from "@/components/AnalysisProgress";
import ResultsDashboard from "@/components/ResultsDashboard";

const AnalysisPage = () => {
  const [showResults, setShowResults] = useState(false);

  const handleAnalysisComplete = () => {
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-8">
        {!showResults ? (
          <div className="container mx-auto px-4 py-12">
            <AnalysisProgress onComplete={handleAnalysisComplete} />
          </div>
        ) : (
          <ResultsDashboard />
        )}
      </main>
    </div>
  );
};

export default AnalysisPage;