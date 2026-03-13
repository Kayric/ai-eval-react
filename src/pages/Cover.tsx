import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export const Cover = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] text-center fade-in px-4">
      
      <h1 className="text-6xl md:text-8xl font-black text-primary mb-8 tracking-tight">
        AI Evals <br />
        <span className="text-secondary">For Everyone</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-primary/60 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
        A practical, interactive guide to understanding how we test, measure, and trust Artificial Intelligence.
      </p>
      
      <div className="flex flex-col items-center gap-8">
        <Link 
          to="/definition" 
          className="group flex items-center gap-3 px-10 py-5 bg-primary text-white font-bold text-xl rounded-full hover:bg-secondary transition-all shadow-2xl hover:shadow-secondary/20 transform hover:-translate-y-1"
        >
          Start Learning
          <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
        </Link>
        
        <div className="mt-8 border-t border-softgray pt-8 w-64">
          <p className="text-sm text-primary/40 font-medium tracking-wide italic">
            Brought to you by Kirk & Gemini
          </p>
        </div>
      </div>
    </div>
  );
};
