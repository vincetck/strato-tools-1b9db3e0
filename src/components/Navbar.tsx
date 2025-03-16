
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Search, MessageSquare, LogIn } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'AI Chat', path: '/chat' },
    { name: 'Submit Tool', path: '/submit' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-strato-black/90 backdrop-blur-lg shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="strato-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/f3615cc4-db5a-402b-be34-57915e01e5f1.png" 
              alt="Strato Tools Logo" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold tracking-tight text-white hidden sm:block">Strato Tools</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-strato-blue ${
                  location.pathname === link.path 
                    ? 'text-strato-blue' 
                    : 'text-white/90'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" size="sm" className="border-strato-blue text-white hover:bg-strato-blue/20">
                <LogIn className="mr-2 h-4 w-4" />
                Log In
              </Button>
            </Link>
            <Link to="/login?signup=true">
              <Button size="sm" className="bg-strato-blue text-white hover:bg-strato-darkBlue">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex md:hidden text-white p-2"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-strato-black/95 backdrop-blur-xl border-t border-white/10 animate-fade-in">
          <div className="strato-container py-4">
            <nav className="flex flex-col space-y-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium p-2 rounded transition-colors ${
                    location.pathname === link.path 
                      ? 'bg-strato-blue/20 text-strato-blue' 
                      : 'text-white hover:bg-white/5'
                  }`}
                >
                  {link.name === 'Home' && <Search className="inline-block mr-2 h-4 w-4" />}
                  {link.name === 'AI Chat' && <MessageSquare className="inline-block mr-2 h-4 w-4" />}
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col space-y-3 pt-2 pb-4 border-t border-white/10">
              <Link to="/login" className="w-full">
                <Button variant="outline" className="w-full border-strato-blue text-white hover:bg-strato-blue/20">
                  Log In
                </Button>
              </Link>
              <Link to="/login?signup=true" className="w-full">
                <Button className="w-full bg-strato-blue text-white hover:bg-strato-darkBlue">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
