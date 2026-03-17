import { useState } from "react";
import { Brain, Package, ArrowRight, CheckCircle } from "@phosphor-icons/react";

export const ModelVsProduct = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 fade-in">
      <header className="mb-12 border-b border-softgray pb-6">
        <span className="text-secondary text-xs font-bold uppercase tracking-widest">Chapter 2</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">The Big Confusion</h2>
        <p className="text-lg text-primary/70 mt-4 leading-relaxed">
          Are you measuring how smart the AI is in general, or how well it solves your user's specific problem? We must separate Model Evals from Product Evals.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-softgray flex items-center justify-center">
              <Brain size={24} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Model Evaluation</h3>
          </div>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <ArrowRight size={20} className="text-secondary mt-0.5 shrink-0" />
              <div>
                <strong className="block text-lg mb-1">Goal</strong>
                <span className="text-primary/80">Measure raw intelligence (can it do math? can it code?).</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <ArrowRight size={20} className="text-secondary mt-0.5 shrink-0" />
              <div>
                <strong className="block text-lg mb-1">Who does it?</strong>
                <span className="text-primary/80">Research labs (OpenAI, Google) & Model creators.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <ArrowRight size={20} className="text-secondary mt-0.5 shrink-0" />
              <div>
                <strong className="block text-lg mb-1">Tools</strong>
                <span className="text-primary/80">Standardized AI tests (e.g., MMLU for academic knowledge, HumanEval for coding).</span>
              </div>
            </li>
          </ul>
        </div>
        
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
              <Package size={24} className="text-secondary" />
            </div>
            <h3 className="text-2xl font-bold">Product Evaluation</h3>
          </div>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <ArrowRight size={20} className="text-secondary mt-0.5 shrink-0" />
              <div>
                <strong className="block text-lg mb-1">Goal</strong>
                <span className="text-primary/80">Does it behave safely and accurately for <em>our specific users</em>?</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <ArrowRight size={20} className="text-secondary mt-0.5 shrink-0" />
              <div>
                <strong className="block text-lg mb-1">Who does it?</strong>
                <span className="text-primary/80">You! (Product teams, Engineers, QA).</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <ArrowRight size={20} className="text-secondary mt-0.5 shrink-0" />
              <div>
                <strong className="block text-lg mb-1">Tools</strong>
                <span className="text-primary/80">Our own custom datasets, business rules, and risk analysis.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h4 className="font-bold text-xl mb-6">Quick Check: Which type of eval do you need?</h4>
        <div className="space-y-4 mb-16">
          <button 
            onClick={() => setShowAnswer1(!showAnswer1)} 
            className={`w-full text-left p-6 rounded-xl transition-all group relative border ${showAnswer1 ? 'bg-softgray/40 border-secondary/30' : 'bg-softgray/20 border-transparent hover:bg-softgray/40'}`}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium text-lg pr-8">"I need to pick the smartest base AI model for general coding tasks."</span>
              <ArrowRight size={24} className={`text-softgray transition-transform ${showAnswer1 ? 'rotate-90 text-secondary' : 'group-hover:text-secondary'}`} />
            </div>
            {showAnswer1 && (
              <div className="mt-4 text-primary/80 border-t border-softgray pt-4 fade-in">
                <span className="font-bold text-secondary inline-flex items-center gap-1">
                  <CheckCircle size={18} weight="fill" /> Model Eval:
                </span> Use standard benchmarks to filter base models.
              </div>
            )}
          </button>

          <button 
            onClick={() => setShowAnswer2(!showAnswer2)} 
            className={`w-full text-left p-6 rounded-xl transition-all group relative border ${showAnswer2 ? 'bg-softgray/40 border-secondary/30' : 'bg-softgray/20 border-transparent hover:bg-softgray/40'}`}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium text-lg pr-8">"I need to know if our chatbot is rude to angry customers."</span>
              <ArrowRight size={24} className={`text-softgray transition-transform ${showAnswer2 ? 'rotate-90 text-secondary' : 'group-hover:text-secondary'}`} />
            </div>
            {showAnswer2 && (
              <div className="mt-4 text-primary/80 border-t border-softgray pt-4 fade-in">
                <span className="font-bold text-secondary inline-flex items-center gap-1">
                  <CheckCircle size={18} weight="fill" /> Product Eval:
                </span> This requires testing against your specific brand guidelines.
              </div>
            )}
          </button>
        </div>

        <div className="bg-primary text-white p-8 rounded-2xl relative overflow-hidden">
          <Brain size={120} className="absolute -bottom-4 -right-4 opacity-10 transform rotate-12" />
          <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="bg-accent text-primary px-2 py-0.5 rounded text-xs uppercase tracking-widest">The Trap</span>
            Avoid the "MMLU Trap"
          </h4>
          <p className="text-white/80 leading-relaxed mb-6">
            Many teams think that because GPT-4 or Claude 3.5 scores high on <strong>MMLU (Massive Multitask Language Understanding)</strong>, it will automatically work for their product. 
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <strong className="block mb-1 text-accent">Benchmarks are Generic</strong>
              <p className="text-sm text-white/70 italic">"I can pass a bar exam and a medical exam."</p>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <strong className="block mb-1 text-accent">Products are Specific</strong>
              <p className="text-sm text-white/70 italic">"But do you know our specific 5-step refund process for Thailand?"</p>
            </div>
          </div>
          <p className="mt-6 font-bold text-accent text-center">
            Model Evals get you to the starting line. Product Evals get you to production.
          </p>
        </div>
      </div>
    </div>
  );
};
