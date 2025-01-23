import React from 'react';
import DocSidebarCard from '../DocumentSidebarCard/DocSidebarCard';
import Favourites from '../../../assets/images/Favourites';
import AddIcon from '../../../assets/images/AddIcon';
const DocSideBar = () => {
  return (
    // ---- main div----
    <div className="w-[320px] h-[920px] bg-dark rounded-[12px] p-[16px] flex flex-col">
      {/* ---first div---- */}
      <div className="w-[288px] h-[104px] flex flex-col justify-between  mb-[16px] sace-y-[12px]">
        <div className="w-[288px] h-[56px]  sapce-y-[4px]">
          <p className="text-white text-xl font-medium  leading-loose">App Projects</p>
          <p className="text-white/80 text-sm font-normal leading-tight">
            You have 42 new projects
          </p>
        </div>
        <button className="w-[288px] h-[36px] space-y-[4px] px-[4px] rounded-[8px]  bg-white/5 flex justify-center items-center">
          <div>{<AddIcon />}</div>
          <div className="text-white/80 text-xs font-medium font-['Manrope'] leading-none">
            Add New
          </div>
        </button>
      </div>
      {/* ---second div---- */}
      <div className="w-[288px] max-h-[300px] flex flex-col mb-[16px] space-y-[8px]">
        <div className="flex items-center h-[16px] gap-x-[8px] ">
          <i>{<Favourites />}</i>
          <p className="  text-white text-xs font-medium font-['Manrope'] leading-none">
            Favourites
          </p>
        </div>

        {/* ---third div---- */}
        <div className=" flex flex-col overflow-y-auto overflow-x-hidden max-h-[200px] space-y-[8px] ">
          <DocSidebarCard />
          <DocSidebarCard />
          <DocSidebarCard />
          <DocSidebarCard />
        </div>
      </div>

      {/* Divider */}
      <div className="w-[288px] h-[1px] bg-white/10 mb-[16px]" />

      <div className="w-[288px] h-[260px] flex flex-col gap-y-[12px]">
        <div className="text-white text-xs font-medium font-['Manrope'] leading-none">
          App Projects
        </div>
        <div className="space-y-[8px] overflow-y-auto overflow-x-hidden max-h-[200px]">
          <div>{<DocSidebarCard />}</div>
          <div>{<DocSidebarCard />}</div>
          <div>{<DocSidebarCard />}</div>
          <div>{<DocSidebarCard />}</div>
        </div>
      </div>
    </div>
  );
};

export default DocSideBar;
