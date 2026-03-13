import { GithubLogo, ArrowSquareOut } from "@phosphor-icons/react";

export const Resources = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 fade-in">
      <header className="mb-12 border-b border-softgray pb-6">
        <span className="text-secondary text-xs font-bold uppercase tracking-widest">Resources</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">Credits & Further Reading</h2>
        <p className="text-lg text-primary/70 mt-4 leading-relaxed">
          This presentation is built upon the foundational knowledge from an open-source guide created for the AI community.
        </p>
      </header>

      {/* GitHub Reference Card */}
      <div className="bg-softgray/20 p-8 md:p-12 rounded-3xl border border-softgray flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-primary shadow-sm mb-8">
          <GithubLogo size={48} />
        </div>
        
        <h3 className="text-2xl font-bold mb-4">"AI Evals for Everyone"</h3>
        
        <p className="text-primary/80 mb-8 max-w-2xl leading-relaxed text-lg">
          The concepts, frameworks, and foundational content presented today are derived from the excellent open-source course created by <strong>Aishwarya Naresh Reganti</strong> and <strong>Kiriti Badam</strong>. 
          <br /><br />
          It is highly recommended that team members looking to dive deeper into building reference datasets, monitoring strategies, and metric formulation review the original material.
        </p>
        
        <a 
          href="https://github.com/aishwaryanr/awesome-generative-ai-guide/blob/main/free_courses/ai_evals_for_everyone/README.md" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-secondary hover:bg-primary text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-3 shadow-lg shadow-secondary/20 hover:-translate-y-1"
        >
          View Full Course on GitHub <ArrowSquareOut size={24} weight="bold" />
        </a>
      </div>
    </div>
  );
};
