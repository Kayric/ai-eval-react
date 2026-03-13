import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { List } from "@phosphor-icons/react";

export const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Scroll to top on route change
  // Note: Usually better in a separate ScrollToTop component, but simple here
  /* useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); */

  return (
    <div className="flex h-screen overflow-hidden bg-bg">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full bg-primary text-white z-50 flex items-center justify-between p-4 shadow-md">
        <h1 className="font-bold text-lg">AI Evals for Everyone</h1>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
          className="text-2xl p-1 focus:outline-none"
        >
          <List size={24} />
        </button>
      </div>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <main className="flex-1 overflow-y-auto relative w-full pt-16 md:pt-0 p-4 md:p-8" id="main-content">
        <Outlet />
      </main>
    </div>
  );
};
