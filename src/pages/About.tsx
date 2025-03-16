
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Twitter, Linkedin, ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-strato-black">
      <Navbar />
      
      <main className="flex-1 py-16">
        <div className="strato-container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">About Strato Tools</h1>
            
            <div className="bg-strato-darkGray rounded-xl p-8 mb-12 shadow-lg">
              <p className="text-white/90 mb-6 leading-relaxed">
                Strato Tools is a curated platform for discovering the best tools and software for work and productivity. 
                We help professionals, teams, and businesses find the right tools to streamline their workflows and boost efficiency.
              </p>
              
              <p className="text-white/90 mb-6 leading-relaxed">
                Our AI-powered recommendation engine analyzes your needs and suggests the perfect tools to solve your challenges.
                We partner with top software companies to bring you exclusive deals and discounts on the tools you need.
              </p>
              
              <p className="text-white/90 leading-relaxed">
                Every tool on our platform is thoroughly vetted and reviewed by our team to ensure it meets our high standards for quality, 
                reliability, and value.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-6">Meet the Founder</h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-center bg-strato-darkGray rounded-xl p-8 shadow-lg">
              <div className="flex-shrink-0">
                <img 
                  src="/lovable-uploads/57f64de9-605c-41ba-84de-c44a05fee67c.png" 
                  alt="Vincent Tück" 
                  className="w-48 h-48 rounded-full object-cover border-4 border-strato-blue"
                />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Vincent Tück</h3>
                <p className="text-white/90 mb-4">
                  Vincent is a tech entrepreneur passionate about productivity tools and AI solutions 
                  that help businesses work smarter. He founded Strato Tools to help others discover 
                  the best software for their specific needs.
                </p>
                
                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="bg-transparent border-strato-blue text-white hover:bg-strato-blue/20"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/vincent-tück-210a79261/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="bg-transparent border-strato-blue text-white hover:bg-strato-blue/20"
                    asChild
                  >
                    <a href="https://x.com/vincetck" target="_blank" rel="noopener noreferrer">
                      <Twitter className="mr-2 h-4 w-4" /> Twitter
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
