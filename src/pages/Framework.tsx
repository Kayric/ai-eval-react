import { ArrowRight, CheckCircle, XCircle, TreeStructure } from "@phosphor-icons/react";

export const Framework = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 fade-in">
      <header className="mb-12 border-b border-softgray pb-6">
        <span className="text-secondary text-xs font-bold uppercase tracking-widest">Chapter 3</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">What are you actually evaluating?</h2>
        <p className="text-lg text-primary/70 mt-4 leading-relaxed">
          Evaluation isn't magic. It is strictly about comparing what actually happened to what <em>should</em> have happened.
        </p>
      </header>

      <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-16">
        <div className="w-full md:w-1/3 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-softgray rounded-full flex items-center justify-center mb-6 text-2xl font-bold text-primary">1</div>
          <h3 className="font-bold text-xl mb-3">Input</h3>
          <p className="text-primary/70 leading-relaxed">
            Not just the prompt! Includes previous chat history, retrieved company documents, and system rules.
          </p>
        </div>
        
        <div className="hidden md:flex items-center justify-center pt-8">
          <ArrowRight size={40} className="text-softgray" />
        </div>

        <div className="w-full md:w-1/3 flex flex-col items-center text-center relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-white text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wide whitespace-nowrap">Hardest Part</div>
          <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mb-6 text-2xl font-bold shadow-lg shadow-secondary/20">2</div>
          <h3 className="font-bold text-xl mb-3">Expected</h3>
          <p className="text-primary/70 leading-relaxed">
            What does "Good" look like? Defined by business Rubrics (Tone, Accuracy, Safety).
          </p>
        </div>

        <div className="hidden md:flex items-center justify-center pt-8">
          <ArrowRight size={40} className="text-softgray" />
        </div>

        <div className="w-full md:w-1/3 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-softgray rounded-full flex items-center justify-center mb-6 text-2xl font-bold text-primary">3</div>
          <h3 className="font-bold text-xl mb-3">Actual</h3>
          <p className="text-primary/70 leading-relaxed">
            The generated response, the tools the AI chose to call, and the decisions made.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="font-bold text-2xl mb-4 flex items-center gap-2">
          <TreeStructure size={32} className="text-secondary" />
          Interactive Rubric Example: "Escalation"
        </h3>
        <p className="text-primary/70 mb-8 leading-relaxed">
          Generic metrics like "Helpfulness" fail because they mean different things to different teams. Specific metrics need specific definitions.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-softgray/20 rounded-2xl border-l-4 border-accent">
            <strong className="text-accent flex items-center gap-2 text-lg mb-4">
              <CheckCircle size={24} weight="fill" /> Acceptable
            </strong>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <ArrowRight size={18} className="text-secondary mt-1 shrink-0" /> 
                <span className="text-primary/80">Identifies situations needing human intervention (billing disputes &gt; $100).</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight size={18} className="text-secondary mt-1 shrink-0" /> 
                <span className="text-primary/80">Provides clear context to the human agent on handoff.</span>
              </li>
            </ul>
          </div>
          <div className="p-6 bg-softgray/20 rounded-2xl border-l-4 border-primary">
            <strong className="text-primary flex items-center gap-2 text-lg mb-4">
              <XCircle size={24} weight="fill" /> Not Acceptable
            </strong>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <ArrowRight size={18} className="text-secondary mt-1 shrink-0" /> 
                <span className="text-primary/80">Fails to escalate when user is clearly frustrated.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight size={18} className="text-secondary mt-1 shrink-0" /> 
                <span className="text-primary/80">Escalates routine questions (e.g., "reset password").</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight size={18} className="text-secondary mt-1 shrink-0" /> 
                <span className="text-primary/80">Escalates without summarizing the context.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
