import React from 'react';
import DownloadIcon from '../../assets/images/Download';
import DocumentIcon from '../../assets/images/document';
import Task from '../../assets/images/Task';
import User from '../../assets/images/User';
const DocumentCard = () => {
  return (
    // ------------------------Main div----------------------------
    <div className="w-[328px] h-[88px] p-[12px] rounded-[12px] flex justify-start space-x-[8px] bg-black">
      {/* ----------------------------first div--------------------------------- */}
      <div className=" w-[280px] h-[64] flex flex-col space-y-[12px]">
        {/* ---------------------------- document icon and text---------------------------- */}
        <div className="w-[280px] h-[36px] flex space-x-[8px]">
          {/* ------------------Document icon------------------------------------- */}
          <div className="h-[36px] w-[36px] p-[8px] rounded-[8px] bg-[#10131e]">
            <i>{<DocumentIcon />}</i>
          </div>
          {/* ---------------------------Document Name------------------------------ */}
          <div className="flex justify-center items-center">
            <p className="text-white">Project Workshop</p>
          </div>
        </div>
        {/* -----------------------Inside div of main div---------------------------- */}
        <div className="w-[280px] h-[16px] flex items-center gap-[4px]">
          <div className="w-[126px] h-[16px] flex items-center gap-[4px]">
            <i className="h-[14px] w-[14px] flex items-center justify-center">{<Task />}</i>
            <div className="w-[108px]">
              <p className="text-xs text-[#cdced0]  leading-none font-normal">
                Design Gloabal desi.
              </p>
            </div>
          </div>
          <div className="w-[146px] h-[16px] flex items-center gap-[4px]">
            <i className="h-[14px] w-[14px] flex items-center justify-center">{<User />}</i>
            <div className="w-[108px]">
              <p className="text-xs text-[#cdced0]  leading-none font-normal">
                Design Gloabal desi.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* -----------------------------second div----------------------- */}
      <div className=" w-[16px] h-[16px]">
        <i>{<DownloadIcon />}</i>
      </div>
    </div>
  );
};

export default DocumentCard;
