import React from 'react';
import Sidebar from './sidebar/Index';
import Index from './Components/index/index';
import DocSidebarCard from './Components/DocumentSidebar/DocumentSidebarCard/DocSidebarCard';
import CalendarIcon from './assets/images/calendar';
import SearchIcon from './assets/images/SearchIcon';
import TimerIcon from './assets/images/TimerIcon';
import DropDownIcon from './assets/images/chev-down';
import DocSideBar from './Components/DocumentSidebar/Documentsidebar/DocSideBar';
function App() {
  return (
    <div className="w-screen h-screen bg-[#10131E] flex">
      <div>{<DocSideBar />}</div>
    </div>
    // <div className="w-screen h-screen bg-[#10131E] flex">
    //   <div className="">
    //     <Sidebar />
    //   </div>
    //   {/* Top horizontal section  */}

    //   <header className="flex justify-between bg-[#10131E] pl-56 pr-4 h-[48px] w-[1782.73px] p-4 items-center">
    //     <div className=" flex gap-10  rounded-md justify-between w-[520px] h-[32px] items-center px-4">
    //       <input
    //         className="outline-none w-[520px] bg-transparent rounded-md text-white border-white h-[32px]"
    //         type="text"
    //         placeholder="Search anything"
    //       />
    //       {/* <SearchIcon  /> */}
    //       <div className="h-[14px] w-[14px] text-white cursor-pointer">{<SearchIcon />}</div>
    //     </div>

    //       <div className="flex gap-4 items-center cursor-pointer">
    //         <div className='bg-green-600 rounded-full flex justify-around items-center gap-x-3 text-white py-1 px-2'>
    //         <TimerIcon />
    //         <span>05m</span>
    //         <DropDownIcon />
    //         </div>
    //         <h2 className='text-xl text-white'>Tue, 24 December, 2024</h2>
    //       </div>
    //   </header>

    //   <div className="w-[60px] h-screen bg-[#10131E]">
    //     <h3>dvas</h3>
    //   </div>

    //   {/* <Index /> */}
    //   {/* <DocSidebarCard /> */}

    // </div>
  );
}

export default App;
