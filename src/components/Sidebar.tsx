import { NavLink, useLocation } from "react-router-dom";
import { chapters } from "../data/chapters";

export const Sidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const location = useLocation();
  
  const currentIndex = chapters.findIndex(c => c.path === location.pathname);
  const progress = ((currentIndex + 1) / chapters.length) * 100;

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-primary/20 z-30 md:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      <aside 
        className={`
          transform transition-transform duration-300 fixed md:relative z-40 
          w-64 h-full bg-softgray/20 text-primary flex flex-col border-r border-softgray 
          pt-16 md:pt-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div className="p-6 border-b border-softgray hidden md:block">
          <h1 className="font-bold text-xl text-primary">
            AI Evals <br />
            <span className="text-secondary">For Everyone</span>
          </h1>
          <p className="text-xs text-primary/70 mt-1">Interactive Knowledge Sharing</p>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
          {chapters.map((chapter) => (
            <NavLink
              key={chapter.id}
              to={chapter.path}
              onClick={onClose} // Close sidebar on mobile selection
              className={({ isActive }) => `
                flex items-center gap-3 px-6 py-3 transition-colors text-sm font-medium
                ${isActive 
                  ? 'bg-secondary/10 text-secondary border-r-4 border-secondary' 
                  : 'text-primary/70 hover:bg-softgray/50 hover:text-primary'}
              `}
            >
              <chapter.icon size={20} weight={chapter.id === 'cover' ? "fill" : "regular"} />
              {chapter.title}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-softgray bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold">
              SPS
            </div>
            <div className="flex-1">
              <p className="text-sm text-primary font-bold">Your Progress</p>
              <div className="w-full bg-softgray rounded-full h-1.5 mt-1">
                <div 
                  className="bg-secondary h-1.5 rounded-full transition-all duration-300" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
