
import { useState, useMemo } from 'react';
import { tools, Tool, sortOptions } from '@/utils/tools';

interface ToolsFilterState {
  search: string;
  categories: string[];
  industries: string[];
  price: string[];
  sort: string;
  showNew: boolean;
  showPopular: boolean;
  hasIntegrations: boolean;
}

export function useTools() {
  const [filters, setFilters] = useState<ToolsFilterState>({
    search: '',
    categories: [],
    industries: [],
    price: [],
    sort: sortOptions[0],
    showNew: false,
    showPopular: false,
    hasIntegrations: false,
  });

  const filteredTools = useMemo(() => {
    let result = [...tools];

    // Filter by search
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        tool => 
          tool.name.toLowerCase().includes(searchLower) || 
          tool.description.toLowerCase().includes(searchLower)
      );
    }

    // Filter by categories
    if (filters.categories.length > 0) {
      result = result.filter(tool => 
        filters.categories.some(category => tool.category.includes(category))
      );
    }

    // Filter by industries
    if (filters.industries.length > 0) {
      result = result.filter(tool => 
        filters.industries.some(industry => tool.industries.includes(industry))
      );
    }

    // Filter by price
    if (filters.price.length > 0) {
      result = result.filter(tool => {
        const priceTypeMap = {
          'Free': 'free',
          'Freemium': 'freemium',
          'Paid': 'paid',
          'Contact for Pricing': 'contact',
        };
        
        return filters.price.some(price => 
          price === 'All' || tool.price.type === priceTypeMap[price as keyof typeof priceTypeMap]
        );
      });
    }

    // Filter by new
    if (filters.showNew) {
      result = result.filter(tool => tool.isNew);
    }

    // Filter by popular
    if (filters.showPopular) {
      result = result.filter(tool => tool.popular);
    }

    // Filter by has integrations
    if (filters.hasIntegrations) {
      result = result.filter(tool => tool.integrations.length > 0);
    }

    // Sort tools
    result = sortTools(result, filters.sort);

    return result;
  }, [filters]);

  const sortTools = (toolsToSort: Tool[], sortOption: string): Tool[] => {
    const sorted = [...toolsToSort];

    switch (sortOption) {
      case 'Most Popular':
        return sorted.sort((a, b) => (a.popular === b.popular ? 0 : a.popular ? -1 : 1));
      
      case 'Latest':
        return sorted.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
      
      case 'Price: Low to High':
        return sorted.sort((a, b) => {
          const priceRank = { 'free': 0, 'freemium': 1, 'paid': 2, 'contact': 3 };
          return priceRank[a.price.type] - priceRank[b.price.type];
        });
      
      case 'Price: High to Low':
        return sorted.sort((a, b) => {
          const priceRank = { 'free': 0, 'freemium': 1, 'paid': 2, 'contact': 3 };
          return priceRank[b.price.type] - priceRank[a.price.type];
        });
      
      case 'Alphabetical: A-Z':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      
      case 'Alphabetical: Z-A':
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      
      default:
        return sorted;
    }
  };

  const updateFilter = (filterType: keyof ToolsFilterState, value: any) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  return {
    tools: filteredTools,
    filters,
    updateFilter,
    totalCount: tools.length,
    filteredCount: filteredTools.length,
  };
}
