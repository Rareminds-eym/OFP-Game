// import React from 'react';
// import { Battery } from 'lucide-react';
// import EnergyPulse from './EnergyPulse';

// interface BatteryLoaderProps {
//   progress: number;
// }

// const BatteryLoader: React.FC<BatteryLoaderProps> = ({ progress }) => {
//   return (
//     <div className="relative group">
//       {/* Battery Container */}
//       <div className="relative transform group-hover:scale-105 transition-all duration-500">
//         <Battery className="w-full h-full text-blue-400" strokeWidth={1.5} />
        
//         {/* Energy Pulses */}
//         <EnergyPulse />
//       </div>

//       {/* Glow Effect */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-emerald-500/20
//         rounded-full blur-xl opacity-50 animate-pulse" />
      
//       {/* Connection Points */}
//       <div className="absolute -left-4 top-1/2 w-3 h-3 bg-blue-400 rounded-full
//         animate-pulse shadow-lg shadow-blue-400/50" />
//       <div className="absolute -right-4 top-1/2 w-3 h-3 bg-emerald-400 rounded-full
//         animate-pulse shadow-lg shadow-emerald-400/50" />
//     </div>
//   );
// };

// export default BatteryLoader;
import React from 'react';
import { Leaf } from 'lucide-react'; // Assuming you have a Leaf icon for organic food
import FoodPulse from './EnergyPulse'; // You may want to create a FoodPulse component

interface FoodLoaderProps {
  progress: number;
}

const FoodLoader: React.FC<FoodLoaderProps> = ({ progress }) => {
  return (
    <div className="relative group">
      {/* Food Processing Container */}
      <div className="relative transform group-hover:scale-105 transition-all duration-500">

      <div className='w-full h-full flex'>
      <div className='w-[50%]'> 
      <Leaf className="w-full h-full text-green-400 transform scale-x-[-1]" strokeWidth={1.5} />
         
         </div>
         <div className='w-[50%]'> 
          {/* <Leaf className="w-full h-full text-green-400 transform rotate-0" strokeWidth={1.5} /> */}
          <Leaf className="w-full h-full text-green-400 transform rotate-0" strokeWidth={1.5} />
        </div>

      </div>
         
        {/* Food Pulses */}
        <FoodPulse />
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-yellow-500/20
        rounded-full blur-xl opacity-50 animate-pulse" />
      
      {/* Connection Points */}
      <div className="absolute -left-4 top-1/2 w-3 h-3 bg-green-400 rounded-full
        animate-pulse shadow-lg shadow-green-400/50" />
      <div className="absolute -right-4 top-1/2 w-3 h-3 bg-yellow-400 rounded-full
        animate-pulse shadow-lg shadow-yellow-400/50" />
    </div>
  );
};

export default FoodLoader;