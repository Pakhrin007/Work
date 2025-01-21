import React, { useState } from 'react';

import img from '../assets/images/Logo.png';
import DropDownIcon from '../assets/images/chev-down';
import CalendarIcon from '../assets/images/calendar';
import DocumentIcon from '../assets/images/document';
import SidebarItem from '../combo/Container';
import HomeIcon from '../assets/images/home';
import MessagesIcon from '../assets/images/messages';
import TrashIcon from '../assets/images/Trash';
import Dividerline from '../combo/Dividerline';
import SettingIcon from '../assets/images/setting';
import SidebarLeftIcon from '../assets/images/sidebar-left';

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`h-screen px-[8px] py-[12px] justify-between items-start flex flex-col bg-[#10131E] transition-all duration-300 ${
        isCollapsed ? 'w-[80px]' : 'w-[180px]'
      }`}
    >
      {/* Top Section */}
      <div className="flex flex-col w-full gap-3">
        {/* Header */}
        <div className="flex w-auto h-9 gap-1 justify-center items-center">
          <div className="flex justify-center items-center gap-1">
            {/* ------------ Image Container ------------ */}
            <div className="w-[37.27px] h-9 pl-[2.06px] pr-[2.17px] pt-[1.43px] pb-[1.45px] justify-center items-center inline-flex">
              <img src={img} className="w-[33.04px] h-[33.12px] relative" />
            </div>
            {!isCollapsed && (
              <p className="text-white/60 text-sm font-medium leading-tight w-[65px]">United</p>
            )}
          </div>
          {!isCollapsed && (
            <div className="flex justify-center items-center ml-7 cursor-pointer">
              <DropDownIcon />
            </div>
          )}
        </div>

        {/* Sidebar Items */}
        <div className="w-full space-y-[8px] mt-[12px] p-[8px]">
          <SidebarItem label="Home" icon={<HomeIcon />} isCollapsed={isCollapsed} />
          <SidebarItem label="Search" icon={<HomeIcon />} isCollapsed={isCollapsed} />
          <SidebarItem label="Library" icon={<HomeIcon />} isCollapsed={isCollapsed} />
          <SidebarItem label="Settings" icon={<HomeIcon />} isCollapsed={isCollapsed} />
          <SidebarItem label="Profile" icon={<HomeIcon />} isCollapsed={isCollapsed} />
          <SidebarItem
            label="Collapse"
            icon={<SidebarLeftIcon />}
            isCollapsed={isCollapsed}
            onClick={handleCollapse}
          />
        </div>
        <Dividerline />
        <div className="w-full space-y-[8px] p-[8px]">
          <SidebarItem label="Home" icon={<HomeIcon />} isCollapsed={isCollapsed} />
          <SidebarItem label="Search" icon={<CalendarIcon />} isCollapsed={isCollapsed} />
          <SidebarItem label="Library" icon={<DocumentIcon />} isCollapsed={isCollapsed} />
        </div>
      </div>

      {/* Logout Button */}
      <div className="w-[164px] flex flex-col  bottom-0 absolute pb-[12px]  ">
        <div className="space-y-[8px] mb-[24px] p-[8px]">
          <SidebarItem label="Logout" icon={<TrashIcon />} isCollapsed={isCollapsed} />
          <SidebarItem label="Settings" icon={<SettingIcon />} isCollapsed={isCollapsed} />
          <SidebarItem label="Help" icon={<MessagesIcon />} isCollapsed={isCollapsed} />
        </div>

        <div className=" flex px-[8px]">
          <img
            className="w-9 h-9 rounded-full shadow-[0px_2px_4px_0px_rgba(58,69,82,0.04)] border border-[#262933]"
            src={img}
          />
          <div
            className={`pl-[8px] h-9 flex flex-col justify-between ${isCollapsed ? 'hidden' : ''}`}
          >
            <p className="text-white/80 text-sm font-semibold  leading-tight">Aman bhujel</p>
            <p className="text-white/60 text-xs font-normal  leading-none">Aman@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
