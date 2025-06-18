import { FC } from "react";

const PharmacyCardSkeleton: FC = () => {
  // ... existing code ...
  return (
    <div className="w-full bg-white rounded-2xl p-4 shadow-md animate-pulse">
      <div className="grid grid-cols-4 md:gap-4">
        <div className="col-span-1 flex justify-center">
          <div className="h-20 w-20 rounded-full bg-gray-300"></div>
        </div>
        
        <div className="col-span-3 sm:col-span-3 space-y-2">
          <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto sm:mx-0"></div>
          
          <div className="flex items-center">
            <div className="w-5 h-5 bg-gray-300 rounded mr-2"></div>
            <div className="h-4 bg-gray-300 rounded w-48"></div>
          </div>
          
          <div className="flex items-center">
            <div className="w-5 h-5 bg-gray-300 rounded mr-2"></div>
            <div className="h-4 bg-gray-300 rounded w-40"></div>
          </div>
          
          <div className="flex items-center">
            <div className="w-5 h-5 bg-gray-300 rounded mr-2"></div>
            <div className="h-4 bg-gray-300 rounded w-32"></div>
          </div>
          
          <div className="flex items-center">
            <div className="w-5 h-5 bg-gray-300 rounded mr-2"></div>
            <div className="h-4 bg-gray-300 rounded w-36"></div>
          </div>
          
          <div className="flex items-center">
            <div className="w-5 h-5 bg-gray-300 rounded mr-2"></div>
            <div className="h-4 bg-gray-300 rounded w-36"></div>
          </div>
          
          <div className="flex  gap-2 pt-2">
            <div className="h-10 bg-gray-300 rounded-md w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyCardSkeleton;