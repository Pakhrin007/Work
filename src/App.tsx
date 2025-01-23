import React from 'react';
import Sidebar from './sidebar/Index';
import Index from './Components/index/index';
import DocSidebarCard from './Components/DocumentSidebar/DocumentSidebarCard/DocSidebarCard';
import CalendarIcon from './assets/images/calendar';
import SearchIcon from './assets/images/SearchIcon';
import TimerIcon from './assets/images/TimerIcon';
import DropDownIcon from './assets/images/chev-down';
import DocumentCard from './Components/Document-card/DocumentCard';
import Task from './assets/images/Task';
import DownloadIcon from './assets/images/Download';
import Card from './Components/project-management/card/card';
function App() {
  return(
    <Card />
  );
  // return (
  //   <div className="w-screen h-screen bg-[#10131E] flex">
  //     <div className="">
  //       <Sidebar />
  //     </div>
  //     {/* Top horizontal section  */}

  //     <header className="flex justify-between bg-[#10131E] pl-56 pr-4 h-[48px] w-[1782.73px] p-4 items-center">
  //       <div className=" flex gap-6 px-2 rounded-md bg-white/5 justify-between w-[520px] h-[32px] items-center border-[1px] border-white/5">
  //         <input
  //           className="outline-none w-[520px] bg-[#191e2eb0] h-full rounded-md border-none text-white "
  //           type="text"
  //           placeholder="Search anything"
  //         />
  //         {/* <SearchIcon  /> */}
  //         <div className="h-[14px] w-[14px] text-white cursor-pointer">{<SearchIcon />}</div>
  //       </div>

  //       <div className="flex gap-4 items-center cursor-pointer">
  //         <div className="bg-green-600 rounded-full flex justify-around items-center gap-x-3 text-white/100 py-1 px-2">
  //           <TimerIcon />
  //           <span>05m</span>
  //           <DropDownIcon />
  //         </div>
  //         <h2 className="text-xl text-white/50">Tue, 24 December, 2024</h2>
  //       </div>
  //     </header>

  //     <div className="w-[60px] h-screen bg-[#10131E] px-[8px] py-[12px]">
  //       <div className="self-stretch justify-start items-center gap-4 inline-flex w-full cursor-pointer flex-col">
  //         <div className=" w-[36px] h-[36px] p-2 bg-white/5 rounded-lg border border-white/10 justify-start items-center gap-2.5 flex">
  //           <div className="w-5 h-5 justify-center items-center flex">
  //             <CalendarIcon />
  //           </div>
  //         </div>
  //         <div className=" w-[36px] h-[36px] p-2 bg-white/5 rounded-lg border border-white/10 justify-start items-center gap-2.5 flex">
  //           <div className="w-5 h-5 justify-center items-center flex">
  //             <Task />
  //           </div>
  //         </div>
  //         <div className=" w-[36px] h-[36px] p-2 bg-white/5 rounded-lg border border-dashed border-white/10 justify-start items-center gap-2.5 flex">
  //           <div className="w-5 h-5 justify-center items-center flex">
  //             <DownloadIcon />
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     {/* <Index /> */}
  //     {/* <DocumentCard /> */}
  //   </div>
  // );
}

export default App;
