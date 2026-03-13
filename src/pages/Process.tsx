import { ArrowsClockwise, ArrowDown } from "@phosphor-icons/react";

export const Process = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 fade-in">
      <header className="mb-12 border-b border-softgray pb-6">
        <span className="text-secondary text-xs font-bold uppercase tracking-widest">Chapter 7</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">The Continuous Lifecycle</h2>
        <p className="text-lg text-primary/70 mt-4 leading-relaxed">
          Evaluation is not a one-time event. It is an ongoing, continuous loop.
        </p>
      </header>

      {/* Desktop Circular View */}
      <div className="relative w-full max-w-2xl mx-auto h-[650px] hidden md:block mt-16 mb-8">
        <div className="absolute inset-20 border-[3px] border-dashed border-softgray rounded-full"></div>
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-secondary/10">
          <ArrowsClockwise size={224} weight="bold" />
        </div>
        
        {/* Step 1 */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 bg-white p-6 rounded-2xl border border-softgray shadow-lg text-center z-10 hover:border-secondary transition-colors duration-300 group">
          <div className="w-12 h-12 bg-softgray text-primary rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold group-hover:bg-secondary group-hover:text-white transition-colors">1</div>
          <h3 className="font-bold text-lg mb-2">Test Before Launch</h3>
          <p className="text-sm text-primary/70">Pick 10 to 20 critical scenarios. Test the AI against these first.</p>
        </div>

        {/* Step 2 */}
        <div className="absolute top-1/2 right-0 transform translate-x-4 -translate-y-1/2 w-64 bg-white p-6 rounded-2xl border border-softgray shadow-lg text-center z-10 hover:border-secondary transition-colors duration-300 group">
          <div className="w-12 h-12 bg-softgray text-primary rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold group-hover:bg-secondary group-hover:text-white transition-colors">2</div>
          <h3 className="font-bold text-lg mb-2">Automate Grading</h3>
          <p className="text-sm text-primary/70">Set up strict code checks and AI reviewers for subjectivity.</p>
        </div>

        {/* Step 3 */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 bg-white p-6 rounded-2xl border border-softgray shadow-lg text-center z-10 hover:border-secondary transition-colors duration-300 group">
          <div className="w-12 h-12 bg-softgray text-primary rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold group-hover:bg-secondary group-hover:text-white transition-colors">3</div>
          <h3 className="font-bold text-lg mb-2">Add Safety Nets</h3>
          <p className="text-sm text-primary/70">Launch with live guardrails. Block harm instantly.</p>
        </div>

        {/* Step 4 */}
        <div className="absolute top-1/2 left-0 transform -translate-x-4 -translate-y-1/2 w-64 bg-white p-6 rounded-2xl border border-softgray shadow-lg text-center z-10 hover:border-secondary transition-colors duration-300 group">
          <div className="w-12 h-12 bg-softgray text-primary rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold group-hover:bg-secondary group-hover:text-white transition-colors">4</div>
          <h3 className="font-bold text-lg mb-2">Learn from Users</h3>
          <p className="text-sm text-primary/70">Watch for frustration. Find out what broke, add it to Step 1.</p>
        </div>
      </div>

      {/* Mobile Vertical View */}
      <div className="md:hidden mt-8 space-y-4">
        <div className="bg-white p-6 rounded-2xl border border-softgray shadow-sm relative">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-10 h-10 bg-softgray text-primary rounded-full flex items-center justify-center text-lg font-bold shrink-0">1</div>
            <h3 className="font-bold text-xl">Test Before Launch</h3>
          </div>
          <p className="text-primary/70 ml-14 text-sm">
            Product and QA teams pick 10 to 20 critical "cannot fail" scenarios. Test the AI against these before letting real users touch it.
          </p>
        </div>
        
        <div className="flex justify-center text-softgray"><ArrowDown size={32} /></div>
        
        <div className="bg-white p-6 rounded-2xl border border-softgray shadow-sm relative">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-10 h-10 bg-softgray text-primary rounded-full flex items-center justify-center text-lg font-bold shrink-0">2</div>
            <h3 className="font-bold text-xl">Automate Grading</h3>
          </div>
          <p className="text-primary/70 ml-14 text-sm">
            Set up automatic checks. Use strict rules for objective things (like response speed) and use AI reviewers for subjective things (like empathy).
          </p>
        </div>

        <div className="flex justify-center text-softgray"><ArrowDown size={32} /></div>

        <div className="bg-white p-6 rounded-2xl border-2 border-secondary/20 shadow-sm relative shadow-secondary/10">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center text-lg font-bold shrink-0">3</div>
            <h3 className="font-bold text-xl">Add Live Safety Nets</h3>
          </div>
          <p className="text-primary/70 ml-14 text-sm">
            Launch the AI to users, but keep "guardrails" on. Instantly block harmful content or escalate to a human if the AI gets confused.
          </p>
        </div>

        <div className="flex justify-center text-softgray"><ArrowDown size={32} /></div>

        <div className="bg-white p-6 rounded-2xl border border-softgray shadow-sm relative">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-10 h-10 bg-softgray text-primary rounded-full flex items-center justify-center text-lg font-bold shrink-0">4</div>
            <h3 className="font-bold text-xl">Learn from Users</h3>
          </div>
          <p className="text-primary/70 ml-14 text-sm">
            Watch for signs of trouble (like a user repeating the same question). Find out what broke, add it to your Step 1 test scenarios, and repeat the cycle!
          </p>
        </div>
        
        <div className="flex justify-center text-secondary mt-8 pb-4">
          <div className="flex flex-col items-center bg-secondary/10 p-4 rounded-xl px-8">
            <ArrowsClockwise size={40} className="mb-2 animate-spin-slow" />
            <span className="text-xs font-bold tracking-widest uppercase">Cycle Repeats</span>
          </div>
        </div>
      </div>
    </div>
  );
};
