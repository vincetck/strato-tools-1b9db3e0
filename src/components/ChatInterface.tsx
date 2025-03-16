
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Tool, tools } from '@/utils/tools';
import { 
  Send, RefreshCw, ThumbsUp, ThumbsDown, Copy, 
  Bot, Sparkles, User, Paperclip, MoveRight 
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  recommendations?: Tool[];
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      role: 'assistant',
      content: "Hi there! I'm your AI assistant from Strato Tools. I can help you find the perfect tools and software for your needs. Tell me what kind of tools you're looking for or what problem you're trying to solve.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const recommendations = getRecommendations(input);
      
      // Create assistant response
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: generateResponse(input, recommendations),
        timestamp: new Date(),
        recommendations: recommendations,
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };
  
  const generateResponse = (query: string, recommendations: Tool[]): string => {
    if (recommendations.length === 0) {
      return "I couldn't find any specific tools matching your criteria. Could you provide more details about what you're looking for?";
    }
    
    const lowercaseQuery = query.toLowerCase();
    
    if (lowercaseQuery.includes('productivity')) {
      return `Based on your interest in productivity tools, I've found ${recommendations.length} great options for you. These tools can help streamline your workflow and enhance your efficiency.`;
    } else if (lowercaseQuery.includes('design')) {
      return `For your design needs, I've selected ${recommendations.length} powerful tools. These solutions offer a range of features for creating professional visuals and interfaces.`;
    } else if (lowercaseQuery.includes('marketing')) {
      return `To help with your marketing efforts, I've identified ${recommendations.length} effective tools. These solutions can boost your campaign performance and audience engagement.`;
    } else if (lowercaseQuery.includes('ai') || lowercaseQuery.includes('artificial intelligence')) {
      return `I've found ${recommendations.length} cutting-edge AI tools that match your query. These solutions leverage artificial intelligence to automate tasks and provide valuable insights.`;
    } else {
      return `Based on your request, I've selected ${recommendations.length} tools that might help. Take a look at these recommendations and let me know if they meet your needs.`;
    }
  };
  
  const getRecommendations = (query: string): Tool[] => {
    const lowercaseQuery = query.toLowerCase();
    let filteredTools: Tool[] = [];
    
    // Keyword matching
    const keywords = lowercaseQuery.split(/\s+/);
    
    filteredTools = tools.filter((tool) => {
      const toolText = `${tool.name} ${tool.description} ${tool.category.join(' ')} ${tool.industries.join(' ')}`.toLowerCase();
      return keywords.some((keyword) => {
        if (keyword.length < 3) return false;
        return toolText.includes(keyword);
      });
    });
    
    // Category matching
    const categoryMatches = tools.filter((tool) => 
      tool.category.some((category) => 
        lowercaseQuery.includes(category.toLowerCase())
      )
    );
    
    // Industry matching
    const industryMatches = tools.filter((tool) => 
      tool.industries.some((industry) => 
        lowercaseQuery.includes(industry.toLowerCase())
      )
    );
    
    // Combine and deduplicate
    const allMatches = [...filteredTools, ...categoryMatches, ...industryMatches];
    const uniqueTools = Array.from(new Set(allMatches.map((tool) => tool.id)))
      .map((id) => allMatches.find((tool) => tool.id === id)!);
    
    // Sort by relevance (for this demo, prioritize popular tools)
    const sortedTools = uniqueTools.sort((a, b) => {
      if (a.popular && !b.popular) return -1;
      if (!a.popular && b.popular) return 1;
      return 0;
    });
    
    return sortedTools.slice(0, 3);
  };
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied to clipboard',
      duration: 2000,
    });
  };
  
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-hidden flex flex-col">
        <ScrollArea className="flex-1 p-4">
          <div className="max-w-3xl mx-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-6 ${
                  message.role === 'assistant' ? 'flex flex-col items-start' : 'flex flex-col items-end'
                }`}
              >
                <div className="flex items-start gap-3 max-w-[85%]">
                  {message.role === 'assistant' && (
                    <Avatar className="h-8 w-8 bg-strato-blue text-primary-foreground">
                      <Bot className="h-4 w-4" />
                    </Avatar>
                  )}
                  
                  <div
                    className={`rounded-lg p-4 ${
                      message.role === 'assistant'
                        ? 'bg-card border border-border'
                        : 'bg-strato-blue text-white'
                    }`}
                  >
                    <div className="prose dark:prose-invert">
                      <p className="m-0 text-sm">{message.content}</p>
                    </div>
                    
                    {/* Recommendations */}
                    {message.recommendations && message.recommendations.length > 0 && (
                      <div className="mt-4 space-y-3">
                        <Separator className="bg-border/50" />
                        <p className="text-sm font-medium flex items-center">
                          <Sparkles className="h-4 w-4 mr-2 text-strato-blue" />
                          Recommended Tools
                        </p>
                        
                        <div className="grid grid-cols-1 gap-3">
                          {message.recommendations.map((tool) => (
                            <Card key={tool.id} className="flex items-center p-3 hover:bg-accent/50 transition-colors duration-200">
                              <div className="h-10 w-10 rounded bg-secondary/50 p-1 flex items-center justify-center mr-3">
                                <img
                                  src={tool.logo}
                                  alt={`${tool.name} logo`}
                                  className="max-h-full max-w-full object-contain"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-medium truncate">{tool.name}</h4>
                                <p className="text-xs text-muted-foreground truncate">{tool.description}</p>
                              </div>
                              <Link to={`/?search=${encodeURIComponent(tool.name)}`}>
                                <Button size="sm" variant="ghost" className="ml-2">
                                  <MoveRight className="h-4 w-4" />
                                </Button>
                              </Link>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {message.role === 'user' && (
                    <Avatar className="h-8 w-8 bg-accent text-accent-foreground">
                      <User className="h-4 w-4" />
                    </Avatar>
                  )}
                </div>
                
                {/* Message actions */}
                <div 
                  className={`flex items-center mt-1 text-xs text-muted-foreground ${
                    message.role === 'assistant' ? 'ml-11' : 'mr-11 justify-end'
                  }`}
                >
                  <span>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                  
                  {message.role === 'assistant' && (
                    <div className="flex items-center ml-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-6 w-6"
                              onClick={() => copyToClipboard(message.content)}
                            >
                              <Copy className="h-3 w-3" />
                              <span className="sr-only">Copy</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="bottom">
                            <p className="text-xs">Copy to clipboard</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button size="icon" variant="ghost" className="h-6 w-6">
                              <ThumbsUp className="h-3 w-3" />
                              <span className="sr-only">Helpful</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="bottom">
                            <p className="text-xs">Mark as helpful</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button size="icon" variant="ghost" className="h-6 w-6">
                              <ThumbsDown className="h-3 w-3" />
                              <span className="sr-only">Not helpful</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="bottom">
                            <p className="text-xs">Mark as not helpful</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex items-start gap-3 max-w-[85%] mb-6">
                <Avatar className="h-8 w-8 bg-strato-blue text-primary-foreground">
                  <Bot className="h-4 w-4" />
                </Avatar>
                <div className="h-12 flex items-center">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 bg-strato-blue rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                    <div className="h-2 w-2 bg-strato-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="h-2 w-2 bg-strato-blue rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>
      </div>
      
      <div className="p-4 border-t border-border bg-card/50 backdrop-blur-sm">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <div className="relative">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about tools you need..."
              className="pr-24 pl-4 py-6 bg-background"
              disabled={isLoading}
            />
            <div className="absolute right-1 top-1 flex items-center space-x-1">
              <Button 
                type="button" 
                size="icon" 
                variant="ghost" 
                className="h-8 w-8 rounded-full"
                disabled={isLoading}
              >
                <Paperclip className="h-4 w-4" />
                <span className="sr-only">Attach</span>
              </Button>
              
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !input.trim()}
                className={`h-8 w-8 rounded-full ${
                  !input.trim() ? 'bg-accent hover:bg-accent' : 'bg-strato-blue hover:bg-strato-darkBlue'
                }`}
              >
                {isLoading ? (
                  <RefreshCw className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                <span className="sr-only">Send</span>
              </Button>
            </div>
          </div>
          <p className="text-xs text-center text-muted-foreground mt-2">
            Strato AI provides recommendations based on your inputs. Results may vary.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;
