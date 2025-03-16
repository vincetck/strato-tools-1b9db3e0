
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search, X, ArrowRight, MessageSquare } from 'lucide-react';

interface HeroSectionProps {
  onDismiss: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onDismiss }) => {
  return (
    <div className="relative w-full bg-gradient-to-b from-strato-darkBlue/40 to-transparent py-16 md:py-24">
      <button
        onClick={onDismiss}
        className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
        aria-label="Dismiss hero"
      >
        <X className="h-5 w-5" />
      </button>
      
      <div className="strato-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Find the Perfect Tools for Your Work
          </h1>
          
          <p className="text-xl text-white/90 mb-8">
            AI-powered recommendations to boost your productivity and streamline your workflow
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-strato-blue text-white hover:bg-strato-darkBlue group"
              asChild
            >
              <Link to="/chat">
                <MessageSquare className="mr-2 h-5 w-5" />
                Chat with AI Assistant
                <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button 
              variant="outline"
              size="lg" 
              className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
              onClick={() => {
                const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
                if (searchInput) {
                  searchInput.focus();
                }
              }}
            >
              <Search className="mr-2 h-5 w-5" />
              Search Tools
            </Button>
          </div>
          
          <div className="mt-10 flex flex-wrap gap-2 justify-center">
            <p className="text-white/70 text-sm mr-2">Popular searches:</p>
            {['Productivity', 'AI', 'Design', 'Marketing'].map((term) => (
              <Link
                key={term}
                to={`/?search=${term}`}
                className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-sm text-white/90 transition-colors"
              >
                {term}
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background blur elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-strato-blue/20 blur-[100px] -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-strato-blue/10 blur-[120px] -z-10" />
    </div>
  );
};

export default HeroSection;
