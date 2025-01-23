import React from 'react';
import MoreIcon from '../../../assets/images/MoreIcon';
const DocSidebarCard = () => {
  return (
    <div className="w-[280px] h-[40px] rounded-[12px] hover:bg-[#FFFFFF]/60  cursor-pointer py-[4px] pl-[4px] pr-[8px] flex justify-between items-center">
      <div className="w-[109px] h-[32px] flex justify-between items-center space-x-[8px]">
        <div className="h-[33px] w-[32px] bg-orange-400 rounded-[12px] flex justify-center items-center">
          N
        </div>
        <div className="text-white/80 text-xs font-normal font-['Manrope'] leading-none">
          Project Title
        </div>
      </div>
      <div className="w-[16px] h-[16px]">{<MoreIcon />}</div>
    </div>
  );
};

export default DocSidebarCard;
