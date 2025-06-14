import { useState } from 'react'
import { Outlet } from 'react-router'
import './App.css'
import {Sidebar , Navbar} from './componets/index';

function App() {
    const [isSidebarOpen , setIsSidebarOpen] = useState(false)
    
   return (
    <div className="h-screen flex flex-col">
      {/* ✅ Top Navbar */}
      <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* ✅ Bottom: Sidebar + Routed Page */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        {isSidebarOpen && <Sidebar/>}
        {/* Routed Content via <Outlet /> */}
        <div className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App
