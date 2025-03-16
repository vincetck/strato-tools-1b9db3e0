
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import { 
  Search, Filter, ArrowUpDown, Clock, Briefcase, 
  Zap, DollarSign, SlidersHorizontal, X, Check
} from 'lucide-react';
import { categories, industries, priceRanges, sortOptions } from '@/utils/tools';

interface FilterSectionProps {
  filters: {
    search: string;
    categories: string[];
    industries: string[];
    price: string[];
    sort: string;
    showNew: boolean;
    showPopular: boolean;
    hasIntegrations: boolean;
  };
  updateFilter: (filterType: string, value: any) => void;
  totalCount: number;
  filteredCount: number;
}

const FilterSection = ({ 
  filters, 
  updateFilter, 
  totalCount, 
  filteredCount 
}: FilterSectionProps) => {
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  
  const clearFilters = () => {
    updateFilter('search', '');
    updateFilter('categories', []);
    updateFilter('industries', []);
    updateFilter('price', []);
    updateFilter('showNew', false);
    updateFilter('showPopular', false);
    updateFilter('hasIntegrations', false);
  };
  
  const hasActiveFilters = () => {
    return (
      filters.search !== '' ||
      filters.categories.length > 0 ||
      filters.industries.length > 0 ||
      filters.price.length > 0 ||
      filters.showNew ||
      filters.showPopular ||
      filters.hasIntegrations
    );
  };
  
  return (
    <div className="w-full py-4 border-b border-border transition-all duration-200">
      <div className="strato-container">
        {/* Search and main filters row */}
        <div className="flex flex-col md:flex-row gap-4 mb-4 md:items-center md:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search tools..."
              className="pl-10 bg-background border-border"
              value={filters.search}
              onChange={(e) => updateFilter('search', e.target.value)}
            />
          </div>
          
          <div className="flex items-center space-x-2 md:justify-end">
            {/* Sort dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-9">
                  <ArrowUpDown className="mr-2 h-3.5 w-3.5" />
                  <span className="hidden sm:inline-block">{filters.sort}</span>
                  <span className="sm:hidden">Sort</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuGroup>
                  {sortOptions.map((option) => (
                    <DropdownMenuItem 
                      key={option} 
                      onClick={() => updateFilter('sort', option)}
                      className="flex items-center justify-between"
                    >
                      {option}
                      {filters.sort === option && <Check className="h-4 w-4 ml-2" />}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Toggle filters button */}
            <Button 
              variant={isFilterExpanded ? "default" : "outline"} 
              size="sm" 
              className={`h-9 ${isFilterExpanded ? 'bg-strato-blue text-white' : ''}`}
              onClick={() => setIsFilterExpanded(!isFilterExpanded)}
            >
              <Filter className="mr-2 h-3.5 w-3.5" />
              <span className="hidden sm:inline-block">Filters</span>
              {hasActiveFilters() && (
                <Badge className="ml-2 bg-strato-blue/20 text-white text-xs">
                  {Object.values(filters).flat().filter(Boolean).length - 1}
                </Badge>
              )}
            </Button>
            
            {/* Clear filters button */}
            {hasActiveFilters() && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={clearFilters}
                className="h-9"
              >
                <X className="mr-2 h-3.5 w-3.5" />
                <span className="hidden sm:inline-block">Clear</span>
              </Button>
            )}
          </div>
        </div>
        
        {/* Expanded filters */}
        {isFilterExpanded && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-4 animate-fade-in">
            {/* Categories filter */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium flex items-center">
                <Zap className="mr-2 h-4 w-4 text-strato-blue" /> Categories
              </h4>
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, 8).map((category) => (
                  <Badge
                    key={category}
                    variant={filters.categories.includes(category) ? "default" : "outline"}
                    className={`cursor-pointer ${
                      filters.categories.includes(category) 
                        ? 'bg-strato-blue hover:bg-strato-darkBlue' 
                        : 'hover:bg-accent/50'
                    }`}
                    onClick={() => {
                      updateFilter(
                        'categories',
                        filters.categories.includes(category)
                          ? filters.categories.filter((c) => c !== category)
                          : [...filters.categories, category]
                      );
                    }}
                  >
                    {category}
                  </Badge>
                ))}
                {categories.length > 8 && (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Badge
                        variant="outline"
                        className="cursor-pointer hover:bg-accent/50"
                      >
                        +{categories.length - 8} more
                      </Badge>
                    </PopoverTrigger>
                    <PopoverContent className="w-64 p-2">
                      <div className="space-y-1">
                        {categories.slice(8).map((category) => (
                          <div
                            key={category}
                            className="flex items-center space-x-2 p-2 hover:bg-accent/50 rounded-md cursor-pointer"
                            onClick={() => {
                              updateFilter(
                                'categories',
                                filters.categories.includes(category)
                                  ? filters.categories.filter((c) => c !== category)
                                  : [...filters.categories, category]
                              );
                            }}
                          >
                            <Checkbox 
                              checked={filters.categories.includes(category)} 
                              className="data-[state=checked]:bg-strato-blue data-[state=checked]:border-strato-blue"
                            />
                            <span className="text-sm">{category}</span>
                          </div>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                )}
              </div>
            </div>
            
            {/* Industries filter */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium flex items-center">
                <Briefcase className="mr-2 h-4 w-4 text-strato-blue" /> Industries
              </h4>
              <div className="flex flex-wrap gap-2">
                {industries.slice(0, 6).map((industry) => (
                  <Badge
                    key={industry}
                    variant={filters.industries.includes(industry) ? "default" : "outline"}
                    className={`cursor-pointer ${
                      filters.industries.includes(industry) 
                        ? 'bg-strato-blue hover:bg-strato-darkBlue' 
                        : 'hover:bg-accent/50'
                    }`}
                    onClick={() => {
                      updateFilter(
                        'industries',
                        filters.industries.includes(industry)
                          ? filters.industries.filter((i) => i !== industry)
                          : [...filters.industries, industry]
                      );
                    }}
                  >
                    {industry}
                  </Badge>
                ))}
                {industries.length > 6 && (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Badge
                        variant="outline"
                        className="cursor-pointer hover:bg-accent/50"
                      >
                        +{industries.length - 6} more
                      </Badge>
                    </PopoverTrigger>
                    <PopoverContent className="w-64 p-2">
                      <div className="space-y-1">
                        {industries.slice(6).map((industry) => (
                          <div
                            key={industry}
                            className="flex items-center space-x-2 p-2 hover:bg-accent/50 rounded-md cursor-pointer"
                            onClick={() => {
                              updateFilter(
                                'industries',
                                filters.industries.includes(industry)
                                  ? filters.industries.filter((i) => i !== industry)
                                  : [...filters.industries, industry]
                              );
                            }}
                          >
                            <Checkbox 
                              checked={filters.industries.includes(industry)} 
                              className="data-[state=checked]:bg-strato-blue data-[state=checked]:border-strato-blue"
                            />
                            <span className="text-sm">{industry}</span>
                          </div>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                )}
              </div>
            </div>
            
            {/* Price filter */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium flex items-center">
                <DollarSign className="mr-2 h-4 w-4 text-strato-blue" /> Price
              </h4>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((price) => (
                  <Badge
                    key={price}
                    variant={filters.price.includes(price) ? "default" : "outline"}
                    className={`cursor-pointer ${
                      filters.price.includes(price) 
                        ? 'bg-strato-blue hover:bg-strato-darkBlue' 
                        : 'hover:bg-accent/50'
                    }`}
                    onClick={() => {
                      updateFilter(
                        'price',
                        filters.price.includes(price)
                          ? filters.price.filter((p) => p !== price)
                          : [...filters.price, price]
                      );
                    }}
                  >
                    {price}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Additional filter options */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium flex items-center">
                <SlidersHorizontal className="mr-2 h-4 w-4 text-strato-blue" /> Additional Filters
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="show-new" 
                    checked={filters.showNew}
                    onCheckedChange={(checked) => updateFilter('showNew', checked)}
                    className="data-[state=checked]:bg-strato-blue data-[state=checked]:border-strato-blue"
                  />
                  <label htmlFor="show-new" className="text-sm cursor-pointer">
                    New tools
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="show-popular" 
                    checked={filters.showPopular}
                    onCheckedChange={(checked) => updateFilter('showPopular', checked)}
                    className="data-[state=checked]:bg-strato-blue data-[state=checked]:border-strato-blue"
                  />
                  <label htmlFor="show-popular" className="text-sm cursor-pointer">
                    Popular tools
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="has-integrations" 
                    checked={filters.hasIntegrations}
                    onCheckedChange={(checked) => updateFilter('hasIntegrations', checked)}
                    className="data-[state=checked]:bg-strato-blue data-[state=checked]:border-strato-blue"
                  />
                  <label htmlFor="has-integrations" className="text-sm cursor-pointer">
                    Has integrations
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Results count */}
        <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
          <span>
            Showing <span className="font-medium text-foreground">{filteredCount}</span> of {totalCount} tools
          </span>
          {isFilterExpanded && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsFilterExpanded(false)}
              className="text-xs h-8"
            >
              <X className="mr-1 h-3 w-3" />
              Close Filters
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
