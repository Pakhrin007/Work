import React from 'react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, icon }) => {
  return (
    <div className="  self-stretch justify-start items-center gap-2 inline-flex w-[164px]">
      <div className="p-2 bg-white/5 rounded-lg border border-white/10 justify-start items-center gap-2.5 flex">
        <div className="w-5 h-5 justify-center items-center flex">
          <div className="w-full h-full object-contain   ">{icon}</div>
        </div>
      </div>
      <div className="text-white/60 text-xs font-manrope font-normal leading-none">{label}</div>
    </div>
  );
};

export default SidebarItem;
