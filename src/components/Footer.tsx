
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Twitter, Linkedin, Github, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-strato-black border-t border-white/10 py-12">
      <div className="strato-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/11801a35-805a-41a6-b0a7-5798b47774d6.png" 
                alt="Strato Tools Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold tracking-tight text-white">Strato Tools</span>
            </Link>
            <p className="text-sm text-white/60">
              Discover the best tools for your work with AI-powered recommendations.
            </p>
            <div className="flex space-x-3">
              <a href="https://x.com/vincetck" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-strato-blue transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://www.linkedin.com/in/vincent-tück-210a79261/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-strato-blue transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:contact@stratotools.com" className="text-white/60 hover:text-strato-blue transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/60 hover:text-strato-blue transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/chat" className="text-white/60 hover:text-strato-blue transition-colors text-sm">AI Chat</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/60 hover:text-strato-blue transition-colors text-sm">About</Link>
              </li>
              <li>
                <Link to="/submit" className="text-white/60 hover:text-strato-blue transition-colors text-sm">Submit Tool</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/?categories=Productivity" className="text-white/60 hover:text-strato-blue transition-colors text-sm">Productivity</Link>
              </li>
              <li>
                <Link to="/?categories=AI" className="text-white/60 hover:text-strato-blue transition-colors text-sm">AI Tools</Link>
              </li>
              <li>
                <Link to="/?categories=Marketing" className="text-white/60 hover:text-strato-blue transition-colors text-sm">Marketing</Link>
              </li>
              <li>
                <Link to="/?categories=Design" className="text-white/60 hover:text-strato-blue transition-colors text-sm">Design</Link>
              </li>
              <li>
                <Link to="/?categories=Development" className="text-white/60 hover:text-strato-blue transition-colors text-sm">Development</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4">Subscribe</h3>
            <p className="text-sm text-white/60 mb-4">
              Get the latest tools and updates in your inbox
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-strato-gray text-white border-r-0 border-strato-lightGray rounded-l-md px-4 py-2 text-sm flex-1"
              />
              <Button size="sm" className="rounded-l-none bg-strato-blue text-white hover:bg-strato-darkBlue">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} Strato Tools. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link to="/privacy" className="text-xs text-white/60 hover:text-strato-blue transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-white/60 hover:text-strato-blue transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-xs text-white/60 hover:text-strato-blue transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
