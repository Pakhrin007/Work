import React from 'react';
import Sidebar from './sidebar/Index';
import Index from './Components/index/index';
import DocSidebarCard from './Components/DocumentSidebar/DocumentSidebarCard/DocSidebarCard';
import DocSideBar from './Components/DocumentSidebar/Documentsidebar/DocSideBar';
function App() {
  return (
    <div className="w-screen h-screen  ">
      {/* <Sidebar /> */}
      {/* <Index /> */}
      {/* <DocSidebarCard /> */}
      <DocSideBar />
    </div>
  );
}

export default App;
