
import React from 'react';

const Card = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="mt-[60px] flex flex-wrap gap-[20px] ml-[30px] justify-center sm:justify-start">
        <button className="w-[146px] h-[44px] sm:w-[220px] sm:h-[104px] border-2 border-[#E2DBFA] font-bold text-[18px] sm:text-[24px] shadow rounded-[30px] transition hover:scale-105 hover:bg-[#E2DBFA]/20 mb-4 sm:mb-0">
          #ДИЗАЙН
        </button>
        <button className="w-[146px] h-[44px] sm:w-[220px] sm:h-[104px] border-2 border-[#FFE0CB] font-bold text-[18px] sm:text-[24px] shadow rounded-[30px] transition hover:scale-105 hover:bg-[#FFE0CB]/20 mb-4 sm:mb-0">
          #FRONTEND
        </button>
        <button className="w-[146px] h-[44px] sm:w-[220px] sm:h-[104px] border-2 border-[#E1F3FF] font-bold text-[18px] sm:text-[24px] shadow rounded-[30px] transition hover:scale-105 hover:bg-[#E2DBFA]/20 mb-4 sm:mb-0">
          #BACKEND
        </button>
        <button className="w-[146px] h-[44px] sm:w-[220px] sm:h-[104px] border-2 border-[#FFE0CB] font-bold text-[18px] sm:text-[24px] shadow rounded-[30px] transition hover:scale-105 hover:bg-[#E2DBFA]/20 mb-4 sm:mb-0">
          #ДИЗАЙН
        </button>
        <button className="w-[146px] h-[44px] sm:w-[220px] sm:h-[104px] border-2 border-[#D5F6ED] font-bold text-[18px] sm:text-[24px] shadow rounded-[30px] transition hover:scale-105 hover:bg-[#E2DBFA]/20">
          #ДИЗАЙН
        </button>
      </div>
    </div>
  );
};

export default Card;
