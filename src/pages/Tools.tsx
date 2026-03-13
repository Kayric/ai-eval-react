import { WarningCircle, CodeBlock, Notebook, MagnifyingGlass, ArrowRight } from "@phosphor-icons/react";

export const Tools = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 fade-in">
      <header className="mb-12 border-b border-softgray pb-6">
        <span className="text-secondary text-xs font-bold uppercase tracking-widest">Chapter 8</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">Tools of the Trade</h2>
        <p className="text-lg text-primary/70 mt-4 leading-relaxed">
          The ecosystem is evolving rapidly. While tools are helpful, remember the golden rule below before adopting one.
        </p>
      </header>

      {/* The Golden Rule Warning */}
      <div className="bg-secondary/10 p-6 rounded-2xl border border-secondary/20 mb-12 flex items-start gap-4">
        <WarningCircle size={32} className="text-secondary mt-1 shrink-0" />
        <div>
          <h4 className="font-bold text-lg mb-1 text-primary">Process Over Tools</h4>
          <p className="text-primary/80 leading-relaxed">
            Do not buy an expensive evaluation tool until you have manually defined your top 10-20 failure scenarios. A tool cannot tell you what business risk looks like; it can only automate the checks you define.
          </p>
        </div>
      </div>

      {/* Tool Categories Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Code-First/Open Source */}
        <div className="bg-softgray/20 p-8 rounded-3xl border border-softgray flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
              <CodeBlock size={24} />
            </div>
            <h3 className="font-bold text-xl">Code-First Frameworks</h3>
          </div>
          <p className="text-primary/70 mb-6 flex-grow leading-relaxed">
            Open-source libraries designed for developers and QA engineers to write automated tests directly in their code repositories.
          </p>
          <ul className="space-y-3 mt-auto">
            <li className="flex items-center gap-3"><ArrowRight size={18} className="text-secondary" /> <strong className="text-primary">DeepEval:</strong> Unit-testing for LLMs.</li>
            <li className="flex items-center gap-3"><ArrowRight size={18} className="text-secondary" /> <strong className="text-primary">Ragas:</strong> Great for testing RAG systems.</li>
          </ul>
        </div>

        {/* Prompt Management & Evals */}
        <div className="bg-softgray/20 p-8 rounded-3xl border border-softgray flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
              <Notebook size={24} />
            </div>
            <h3 className="font-bold text-xl">Prompt Testing UIs</h3>
          </div>
          <p className="text-primary/70 mb-6 flex-grow leading-relaxed">
            Tools designed for PMs and QA to easily run side-by-side comparisons of different prompts or models without writing code.
          </p>
          <ul className="space-y-3 mt-auto">
            <li className="flex items-center gap-3"><ArrowRight size={18} className="text-secondary" /> <strong className="text-primary">Promptfoo:</strong> Fast, open-source grid testing.</li>
          </ul>
        </div>

        {/* Observability & Tracing */}
        <div className="bg-softgray/20 p-8 rounded-3xl border border-softgray flex flex-col md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
              <MagnifyingGlass size={24} />
            </div>
            <h3 className="font-bold text-xl">Observability & Tracing</h3>
          </div>
          <p className="text-primary/70 mb-6 leading-relaxed">
            Platforms that track a prompt's entire journey in production so you can debug exactly where an AI chain failed.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-auto">
            <ul className="space-y-3">
              <li className="flex items-center gap-3"><ArrowRight size={18} className="text-secondary" /> <strong className="text-primary">LangSmith:</strong> By the creators of LangChain.</li>
              <li className="flex items-center gap-3"><ArrowRight size={18} className="text-secondary" /> <strong className="text-primary">Arize Phoenix:</strong> Excellent open-source tracing.</li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-center gap-3"><ArrowRight size={18} className="text-secondary" /> <strong className="text-primary">Humanloop:</strong> Enterprise-grade platform.</li>
              <li className="flex items-center gap-3"><ArrowRight size={18} className="text-secondary" /> <strong className="text-primary">TruEra (Snowflake):</strong> Deep analytics.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};
