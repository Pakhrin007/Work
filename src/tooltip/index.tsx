import React from "react";


const Tooltip = ({isvisible,text}) => {
  if (!isvisible) return null
  return (
    <div className="relative">
      <div className="px-[12px] py-[8px] bg-slate-800 rounded-[4px] w-min">
        <p className='text-[12px] leading-[16px]  text-white'>{text}</p>
      </div>
      <div className="absolute left-4 -translate-x-1/2 w-0 h-0 
                      border-l-[8px] border-l-transparent
                      border-r-[8px] border-r-transparent
                      border-t-[8px] border-t-black">
      </div>
    </div>
  );
};

export default Tooltip;
