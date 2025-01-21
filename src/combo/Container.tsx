import React from 'react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isCollapsed?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, icon, isCollapsed = false, onClick }) => {
  return (
    <div
      className="self-stretch justify-start items-center gap-2 inline-flex w-full cursor-pointer"
      onClick={onClick}
    >
      <div className=" w-[36px] h-[36px] p-2 bg-white/5 rounded-lg border border-white/10 justify-start items-center gap-2.5 flex">
        <div className="w-5 h-5 justify-center items-center flex">{icon}</div>
      </div>
      {!isCollapsed && (
        <div className="text-white/60 text-xs font-manrope font-normal leading-none">{label}</div>
      )}
    </div>
  );
};

export default SidebarItem;
