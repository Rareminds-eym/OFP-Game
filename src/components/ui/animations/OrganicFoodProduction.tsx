import React from 'react';
import { Sprout } from 'lucide-react';
import GrowthAnimation from './GrowthAnimation';

interface OrganicFoodProductionProps {
  growthStage: number;
}

const OrganicFoodProduction: React.FC<OrganicFoodProductionProps> = ({ growthStage }) => {
  return (
    <div className="relative group">
      {/* Single Plant Growth Container */}
      <div className="relative transform group-hover:scale-105 transition-all duration-500">
        <div className="flex flex-col items-center">
          <Sprout 
            className="w-16 h-16 text-green-600 mb-2" 
            strokeWidth={1.5} 
            style={{ 
              transform: `scale(${0.5 + (growthStage / 200)})`,
              opacity: Math.min(1, growthStage / 40)
            }}
          />
          
          <div className="h-24 w-2 bg-gradient-to-t from-brown-600 to-green-500 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-t from-brown-600 to-green-600 rounded-full transition-all duration-700 ease-in-out"
              style={{ height: `${growthStage}%` }}
            />
          </div>
        </div>
        
        {/* Growth Animation */}
        <GrowthAnimation />
      </div>

      {/* Natural Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-brown-600/20 to-green-500/20
        rounded-full blur-xl opacity-50 animate-pulse" />
    </div>
  );
};

export default OrganicFoodProduction;