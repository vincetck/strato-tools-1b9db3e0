
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, ArrowRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onSearch: (value: string) => void;
}

const HeroSection = ({ onSearch }: HeroSectionProps) => {
  const [searchValue, setSearchValue] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchValue);
  };
  
  const popularSearches = [
    'AI Tools', 'Project Management', 'Productivity', 'Design', 'Marketing'
  ];
  
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-strato-darkBlue to-strato-black min-h-[60vh] flex items-center">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgMHYyaC0ydi0yaDJ6bTIgMGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background opacity-70" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 -left-10 w-40 h-40 bg-strato-blue opacity-20 rounded-full filter blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-60 h-60 bg-strato-blue opacity-10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      <div className="strato-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 px-4 py-1 backdrop-blur-sm bg-white/5 text-white border-white/10">
            <Sparkles className="mr-2 h-3.5 w-3.5 text-strato-blue" />
            <span>The ultimate AI-powered tool finder for professionals</span>
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight text-white">
            Discover the <span className="text-strato-blue">perfect tools</span> to elevate your work
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Find, compare, and implement the best productivity tools and software with personalized AI recommendations for your specific needs.
          </p>
          
          <form onSubmit={handleSearch} className="relative max-w-xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for tools, software, or solutions..."
              className="w-full h-14 pl-12 pr-32 rounded-full border-white/10 bg-white/5 backdrop-blur-md text-white placeholder:text-white/60 focus:border-strato-blue focus:ring-strato-blue/20"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button 
              type="submit" 
              className="absolute right-1.5 top-1/2 -translate-y-1/2 h-11 rounded-full bg-strato-blue hover:bg-strato-darkBlue text-white"
            >
              Search
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          
          <div className="flex flex-wrap justify-center gap-2">
            <span className="text-white/60 text-sm mr-2">Popular:</span>
            {popularSearches.map((term) => (
              <Button
                key={term}
                variant="outline"
                size="sm"
                className="bg-white/5 text-white border-white/10 hover:bg-white/10 hover:border-white/20"
                onClick={() => {
                  setSearchValue(term);
                  onSearch(term);
                }}
              >
                {term}
              </Button>
            ))}
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/chat">
              <Button className="bg-strato-blue hover:bg-strato-darkBlue text-white h-12 px-6 rounded-full">
                <Sparkles className="mr-2 h-4 w-4" />
                Get AI Recommendations
              </Button>
            </Link>
            <span className="text-white/60">or</span>
            <Link to="/login?signup=true">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 h-12 px-6 rounded-full">
                Create an Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
