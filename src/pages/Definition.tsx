import { Briefcase, ShieldCheck, Code, PaintBrush, Quotes, CheckCircle, XCircle, ArrowRight } from "@phosphor-icons/react";

export const Definition = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 fade-in">
      <header className="mb-12 border-b border-softgray pb-6">
        <span className="text-secondary text-xs font-bold uppercase tracking-widest">Introduction</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">Why Should We Care About AI Evals?</h2>
        <p className="text-lg text-primary/70 mt-4 leading-relaxed">
          Let's talk about why AI Evaluation matters for your specific role on the team.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 mb-16">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-softgray flex items-center justify-center text-secondary shrink-0">
            <Briefcase size={24} />
          </div>
          <div>
            <h4 className="font-bold text-lg">Project Manager</h4>
            <p className="text-sm text-primary/80 mt-2 leading-relaxed">
              You define the business value. Without evals, you can't define what a "successful" AI feature actually looks like for the user.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-softgray flex items-center justify-center text-secondary shrink-0">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h4 className="font-bold text-lg">Quality Assurance</h4>
            <p className="text-sm text-primary/80 mt-2 leading-relaxed">
              AI breaks traditional pass/fail testing. Your skills in finding edge cases are critical to building the grading rubrics.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-softgray flex items-center justify-center text-secondary shrink-0">
            <Code size={24} />
          </div>
          <div>
            <h4 className="font-bold text-lg">Engineering</h4>
            <p className="text-sm text-primary/80 mt-2 leading-relaxed">
              Passing a unit test doesn't mean the AI works. You must implement automated metrics that measure real system behavior.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-softgray flex items-center justify-center text-secondary shrink-0">
            <PaintBrush size={24} />
          </div>
          <div>
            <h4 className="font-bold text-lg">Designers</h4>
            <p className="text-sm text-primary/80 mt-2 leading-relaxed">
              Understanding AI failures helps you design better fallbacks, safety warnings, and user feedback mechanisms.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-8">
        <h3 className="text-2xl font-bold mb-6">So, What Exactly Are "Evals"?</h3>
        
        <div className="bg-softgray/30 p-8 rounded-2xl mb-12 relative overflow-hidden">
          <Quotes size={80} className="text-softgray/40 absolute -top-2 -left-2 transform -rotate-12" />
          <div className="relative z-10 pl-6">
            <h3 className="text-secondary font-bold text-sm mb-3 uppercase tracking-wider">Formal Definition</h3>
            <p className="text-2xl font-light leading-snug">
              "AI Evaluation is the systematic process of measuring and monitoring the <span className="font-bold text-secondary">quality</span>, <span className="font-bold text-secondary">safety</span>, and <span className="font-bold text-secondary">utility</span> of an AI system against business requirements and user expectations."
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <CheckCircle size={24} className="text-accent" weight="fill" /> What Evals ARE
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <ArrowRight size={18} className="mt-1 text-secondary shrink-0" />
                <span>Defining what "good" looks like for your specific product.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight size={18} className="mt-1 text-secondary shrink-0" />
                <span>A continuous lifecycle that extends into production.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight size={18} className="mt-1 text-secondary shrink-0" />
                <span>A team sport.</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <XCircle size={24} className="text-primary" weight="fill" /> What Evals ARE NOT
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <ArrowRight size={18} className="mt-1 text-secondary shrink-0" />
                <span>Just academic benchmarks (like passing a bar exam).</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight size={18} className="mt-1 text-secondary shrink-0" />
                <span>A one-time testing phase before you click "deploy".</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight size={18} className="mt-1 text-secondary shrink-0" />
                <span>Solely the responsibility of the engineering team.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
