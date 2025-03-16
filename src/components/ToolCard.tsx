
import { useState } from 'react';
import { Tool } from '@/utils/tools';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Heart, Share2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface ToolCardProps {
  tool: Tool;
  featured?: boolean;
}

const ToolCard = ({ tool, featured = false }: ToolCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();
  
  const getPriceLabel = () => {
    switch(tool.price.type) {
      case 'free':
        return 'Free';
      case 'freemium':
        return `Freemium${tool.price.startingAt ? ` • From ${tool.price.startingAt}` : ''}`;
      case 'paid':
        return `Paid${tool.price.startingAt ? ` • From ${tool.price.startingAt}` : ''}`;
      case 'contact':
        return 'Contact for pricing';
      default:
        return '';
    }
  };
  
  const handleShareClick = () => {
    navigator.clipboard.writeText(`${window.location.origin}/tool/${tool.id}`);
    toast({
      title: 'Link Copied!',
      description: 'The tool link has been copied to your clipboard.',
      duration: 3000,
    });
  };
  
  return (
    <div 
      className={`strato-card group relative overflow-hidden transition-all duration-300 ${
        featured 
          ? 'col-span-1 md:col-span-2 lg:col-span-3 bg-gradient-to-br from-strato-darkBlue/30 to-strato-black/80 border-strato-blue/20' 
          : 'bg-card hover:bg-card/95'
      } ${isHovered ? 'transform-gpu -translate-y-1' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Status badges */}
      <div className="absolute top-4 right-4 flex space-x-2 z-10">
        {tool.isNew && (
          <Badge className="bg-green-500 hover:bg-green-600">New</Badge>
        )}
        {tool.popular && (
          <Badge className="bg-amber-500 hover:bg-amber-600">Popular</Badge>
        )}
      </div>
      
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          {/* Logo */}
          <div className="h-12 w-12 rounded-md bg-white/10 p-2 flex items-center justify-center overflow-hidden">
            <img
              src={tool.logo}
              alt={`${tool.name} logo`}
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder.svg';
              }}
            />
          </div>
          
          {/* Price badge */}
          <Badge variant="outline" className="text-xs">
            {getPriceLabel()}
          </Badge>
        </div>
        
        {/* Tool info */}
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-2">{tool.name}</h3>
          <p className="text-sm text-muted-foreground mb-4">
            {tool.description}
          </p>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tool.category.slice(0, 3).map((cat) => (
              <Badge key={cat} variant="secondary" className="text-xs">
                {cat}
              </Badge>
            ))}
            {tool.category.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{tool.category.length - 3}
              </Badge>
            )}
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full hover:bg-accent/50"
              onClick={handleShareClick}
            >
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Share</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full hover:bg-accent/50"
              onClick={() => toast({
                title: 'Tool Saved!',
                description: 'This tool has been added to your favorites.',
                duration: 3000,
              })}
            >
              <Heart className="h-4 w-4" />
              <span className="sr-only">Save</span>
            </Button>
          </div>
          
          <Button
            asChild
            className="bg-strato-blue hover:bg-strato-darkBlue text-white"
            size="sm"
          >
            <a href={tool.affiliateLink} target="_blank" rel="noopener noreferrer">
              Visit Site
              <ExternalLink className="ml-2 h-3 w-3" />
            </a>
          </Button>
        </div>
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default ToolCard;
