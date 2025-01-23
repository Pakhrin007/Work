import React from 'react';
import Sidebar from './sidebar/Index';
import Index from './Components/index/index';
import DocSidebarCard from './Components/DocumentSidebar/DocumentSidebarCard/DocSidebarCard';
function App() {
  return (
    <div className="w-screen h-screen bg-green-600 ">
      {/* <Sidebar /> */}
      {/* <Index /> */}
      <DocSidebarCard />
    </div>
  );
}

export default App;
