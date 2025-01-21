import React from 'react';

import img from '../assets/images/Logo.png';
import DropDownIcon from '../assets/images/chev-down';
import CalendarIcon from '../assets/images/calendar';
import DocumentIcon from '../assets/images/document';
import SidebarItem from '../combo/Container';
import HomeIcon from '../assets/images/home';
import Dividerline from '../combo/Dividerline';

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen px-[8px] py-[12px] justify-start items-start gap-3 flex flex-col w-[180px] bg-[#10131E]">
      {/* -----------------HEADER----------- */}
      <div className="flex w-auto h-9 gap-1 justify-center items-center">
        <div className="flex justify-center items-center gap-1">
          {/* ------------ Image Container ------------ */}
          <div className="w-[37.27px] h-9 pl-[2.06px] pr-[2.17px] pt-[1.43px] pb-[1.45px]  justify-center   items-center inline-flex ">
            <img src={img} className="w-[33.04px] h-[33.12px] relative" />
          </div>
          <p className="text-white/60 text-sm font-medium  leading-tight w-[65px] ">United</p>
        </div>
        <div className="flex justify-center items-center ml-7 cursor-pointer">
          <DropDownIcon />
        </div>
      </div>

      {/* ------------ Sidebar Items ------------ */}
      <div className="w-full space-y-[8px] mt-[12px]">
        <SidebarItem label="Home" icon={<HomeIcon />} />
        <SidebarItem label="Search" icon={<CalendarIcon />} />
        <SidebarItem label="Library" icon={<DocumentIcon />} />
        <SidebarItem label="Settings" icon={<HomeIcon />} />
        <SidebarItem label="Profile" icon={<HomeIcon />} />
      </div>
      <Dividerline />
    </div>
  );
};

export default Sidebar;
