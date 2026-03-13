import { Users, Target, ArrowsClockwise, RocketLaunch, CheckSquareOffset } from "@phosphor-icons/react";

export const WrapUp = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 fade-in">
      <header className="mb-12 border-b border-softgray pb-6">
        <span className="text-secondary text-xs font-bold uppercase tracking-widest">Wrap Up</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">Summary & Action Plan</h2>
        <p className="text-lg text-primary/70 mt-4 leading-relaxed">
          AI changes how we build, but our end goal remains the same: delivering reliable, valuable products to our users.
        </p>
      </header>

      {/* 3 Big Takeaways */}
      <div className="grid md:grid-cols-3 gap-10 mb-16">
        <div className="flex flex-col items-center text-center group">
          <div className="w-20 h-20 rounded-full bg-softgray/30 flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors">
            <Users size={40} className="text-secondary" />
          </div>
          <h4 className="font-bold text-xl mb-3">It's a Team Sport</h4>
          <p className="text-primary/70 leading-relaxed text-sm">
            Building reliable AI requires diverse perspectives. We must combine our technical knowledge, business goals, and quality standards.
          </p>
        </div>
        <div className="flex flex-col items-center text-center group">
          <div className="w-20 h-20 rounded-full bg-softgray/30 flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors">
            <Target size={40} className="text-secondary" />
          </div>
          <h4 className="font-bold text-xl mb-3">Start Small</h4>
          <p className="text-primary/70 leading-relaxed text-sm">
            Don't wait for a perfect testing suite. Start with 10-20 "cannot fail" scenarios right now to establish a baseline.
          </p>
        </div>
        <div className="flex flex-col items-center text-center group">
          <div className="w-20 h-20 rounded-full bg-softgray/30 flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors">
            <ArrowsClockwise size={40} className="text-secondary" />
          </div>
          <h4 className="font-bold text-xl mb-3">Continuous Loop</h4>
          <p className="text-primary/70 leading-relaxed text-sm">
            AI degrades and users change. Evaluation is an ongoing lifecycle of discovery, not just a pre-launch testing gate.
          </p>
        </div>
      </div>

      {/* Action Plan */}
      <div className="pt-12 border-t border-softgray relative overflow-hidden">
        <RocketLaunch size={200} className="text-softgray/20 absolute -top-4 -right-8 transform rotate-12 pointer-events-none" />
        
        <h3 className="text-3xl font-bold mb-10 flex items-center gap-3 relative z-10">
          <CheckSquareOffset size={32} className="text-secondary" />
          How Our Team Can Start Today
        </h3>
        
        <div className="space-y-8 relative z-10 max-w-2xl">
          <div className="flex items-start gap-6 group">
            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center font-bold text-secondary text-lg shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors">PM</div>
            <div className="pt-1">
              <strong className="block text-xl mb-1">Project Manager</strong>
              <p className="text-primary/70 leading-relaxed">Draft the top 10 most critical user scenarios the AI <em>must</em> get right.</p>
            </div>
          </div>
          <div className="flex items-start gap-6 group">
            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center font-bold text-secondary text-lg shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors">QA</div>
            <div className="pt-1">
              <strong className="block text-xl mb-1">Quality Assurance</strong>
              <p className="text-primary/70 leading-relaxed">Review those 10 scenarios and find the edge cases (What if the user gets angry? What if data is missing?).</p>
            </div>
          </div>
          <div className="flex items-start gap-6 group">
            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center font-bold text-secondary text-lg shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors">DEV</div>
            <div className="pt-1">
              <strong className="block text-xl mb-1">Engineering</strong>
              <p className="text-primary/70 leading-relaxed">Set up logging so we can easily review outputs, and automate running these 10 examples against the AI.</p>
            </div>
          </div>
          <div className="flex items-start gap-6 group">
            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center font-bold text-secondary text-lg shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors">UX</div>
            <div className="pt-1">
              <strong className="block text-xl mb-1">Designers</strong>
              <p className="text-primary/70 leading-relaxed">Review the top failure scenarios to design better fallbacks, safety warnings, and user feedback mechanisms.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
