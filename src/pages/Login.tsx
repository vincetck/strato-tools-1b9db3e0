
import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { ArrowLeft, Mail, Lock, User, ArrowRight } from 'lucide-react';

const Login = () => {
  const [searchParams] = useSearchParams();
  const isSignup = searchParams.get('signup') === 'true';
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication process
    setTimeout(() => {
      toast({
        title: isSignup ? "Account created successfully!" : "Welcome back!",
        description: isSignup 
          ? "Your account has been created. You can now explore Strato Tools." 
          : "You've successfully logged in to your account.",
      });
      setIsLoading(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-strato-black flex flex-col">
      <div className="fixed top-4 left-4">
        <Button 
          variant="ghost" 
          size="sm" 
          asChild
          className="text-white hover:bg-white/10"
        >
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/">
              <img 
                src="/lovable-uploads/11801a35-805a-41a6-b0a7-5798b47774d6.png" 
                alt="Strato Tools Logo" 
                className="h-12 mx-auto mb-6"
              />
            </Link>
            <h1 className="text-2xl font-bold text-white">
              {isSignup ? 'Create your account' : 'Welcome back'}
            </h1>
            <p className="text-white/60 mt-2">
              {isSignup 
                ? 'Join Strato Tools to discover the best tools for your work' 
                : 'Log in to access your Strato Tools dashboard'}
            </p>
          </div>
          
          <div className="bg-strato-darkGray rounded-xl p-8 shadow-xl border border-strato-lightGray/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              {isSignup && (
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-white">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                    <Input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-10 bg-strato-gray text-white border-strato-lightGray/20"
                      placeholder="Your full name"
                    />
                  </div>
                </div>
              )}
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                  <Input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-strato-gray text-white border-strato-lightGray/20"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-white">
                    Password
                  </label>
                  {!isSignup && (
                    <Link to="/forgot-password" className="text-sm text-strato-blue hover:text-strato-blue/80">
                      Forgot password?
                    </Link>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                  <Input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 bg-strato-gray text-white border-strato-lightGray/20"
                    placeholder={isSignup ? "Create a strong password" : "Enter your password"}
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-strato-blue text-white hover:bg-strato-darkBlue"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {isSignup ? 'Creating account...' : 'Logging in...'}
                  </>
                ) : (
                  <>
                    {isSignup ? 'Create Account' : 'Log In'} <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-white/60">
                {isSignup ? 'Already have an account?' : "Don't have an account?"}
                <Link 
                  to={isSignup ? "/login" : "/login?signup=true"} 
                  className="ml-1 text-strato-blue hover:text-strato-blue/80"
                >
                  {isSignup ? 'Log in' : 'Create one'}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
