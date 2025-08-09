import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import { Link } from "@nextui-org/react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <HowItWorks />
      </main>
      
      {/* Footer */}
      <footer className="bg-default-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">ResumeAI</h3>
              <p className="text-sm text-foreground-600">
                AI-powered resume analysis to help you land your dream job.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-foreground">Product</h4>
              <div className="space-y-2 text-sm text-foreground-600">
                <p><Link href="#" className="hover:text-foreground transition-colors">Features</Link></p>
                <p><Link href="#" className="hover:text-foreground transition-colors">Pricing</Link></p>
                <p><Link href="#" className="hover:text-foreground transition-colors">API</Link></p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-foreground">Company</h4>
              <div className="space-y-2 text-sm text-foreground-600">
                <p><Link href="#" className="hover:text-foreground transition-colors">About</Link></p>
                <p><Link href="#" className="hover:text-foreground transition-colors">Blog</Link></p>
                <p><Link href="#" className="hover:text-foreground transition-colors">Careers</Link></p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-foreground">Support</h4>
              <div className="space-y-2 text-sm text-foreground-600">
                <p><Link href="#" className="hover:text-foreground transition-colors">Help Center</Link></p>
                <p><Link href="#" className="hover:text-foreground transition-colors">Contact</Link></p>
                <p><Link href="#" className="hover:text-foreground transition-colors">Privacy</Link></p>
              </div>
            </div>
          </div>
          <div className="border-t border-divider mt-8 pt-8 text-center text-sm text-foreground-500">
            <p>&copy; 2024 ResumeAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;