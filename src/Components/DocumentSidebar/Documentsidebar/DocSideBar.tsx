import React from 'react';
import DocSidebarCard from '../DocumentSidebarCard/DocSidebarCard';
const DocSideBar = () => {
  return (
    <div className="w-[320px] h-[920px] bg-slate-600 rounded-[12px] p-[16px] flex flex-col">
      <div className="w-[288px] h-[104px] flex flex-col justify-between bg-red-300 mb-[16px]"></div>
      <div className="w-[288px] h-[116px] flex flex-col justify-between bg-blue-300 mb-[16px]"></div>

      <div className="w-[288px] h-[260px] flex flex-col  bg-green-300 gap-y-[12px]">
        <div className="text-white h-[16px]">App Projects</div>
        <div>{<DocSidebarCard />}</div>
        <div>{<DocSidebarCard />}</div>
        <div>{<DocSidebarCard />}</div>
        <div>{<DocSidebarCard />}</div>
      </div>
    </div>
  );
};

export default DocSideBar;
