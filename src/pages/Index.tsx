
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import FilterSection from '@/components/FilterSection';
import ToolCard from '@/components/ToolCard';
import { useTools } from '@/hooks/useTools';
import { Tool } from '@/utils/tools';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

const Index = () => {
  const { tools, filters, updateFilter, totalCount, filteredCount } = useTools();
  const [showHero, setShowHero] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-strato-black">
      <Navbar />
      
      {showHero && <HeroSection onDismiss={() => setShowHero(false)} />}
      
      <FilterSection 
        filters={filters} 
        updateFilter={updateFilter} 
        totalCount={totalCount} 
        filteredCount={filteredCount} 
      />
      
      <main className="flex-1 py-8">
        <div className="strato-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tools.map((tool: Tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
          
          {tools.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20">
              <h3 className="text-2xl font-medium text-white mb-4">No tools found</h3>
              <p className="text-muted-foreground mb-6 text-center max-w-md">
                We couldn't find any tools matching your current filters. Try adjusting your search criteria.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  updateFilter('search', '');
                  updateFilter('categories', []);
                  updateFilter('industries', []);
                  updateFilter('price', []);
                  updateFilter('showNew', false);
                  updateFilter('showPopular', false);
                  updateFilter('hasIntegrations', false);
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
