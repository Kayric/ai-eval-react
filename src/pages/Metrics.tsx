import { User, Code, Robot } from "@phosphor-icons/react";
import { MetricChart } from "../components/charts/MetricChart";

export const Metrics = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 fade-in">
      <header className="mb-12 border-b border-softgray pb-6">
        <span className="text-secondary text-xs font-bold uppercase tracking-widest">Chapter 5</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">How Do We Measure Quality?</h2>
        <p className="text-lg text-primary/70 mt-4 leading-relaxed">
          You can't pay humans to read 10,000 interactions a day. We have to balance human accuracy with automated speed.
        </p>
      </header>

      <h3 className="font-bold text-2xl mb-8">The 3 Ways to Grade AI</h3>
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="flex flex-col bg-softgray/20 p-6 rounded-2xl border border-transparent hover:border-softgray transition-colors">
          <div className="w-12 h-12 rounded-full bg-softgray flex items-center justify-center text-primary mb-4">
            <User size={24} weight="fill" />
          </div>
          <h4 className="text-xl font-bold mb-2">1. Human Review</h4>
          <p className="text-primary/70 mb-4 leading-relaxed">
            Real people reading logs. It's the most accurate, but it's slow and expensive.
          </p>
          <div className="text-sm font-bold text-secondary mt-auto">Best for: Before launch & critical failures.</div>
        </div>
        
        <div className="flex flex-col bg-softgray/20 p-6 rounded-2xl border border-transparent hover:border-softgray transition-colors">
          <div className="w-12 h-12 rounded-full bg-softgray flex items-center justify-center text-primary mb-4">
            <Code size={24} weight="bold" />
          </div>
          <h4 className="text-xl font-bold mb-2">2. Simple Rules</h4>
          <p className="text-primary/70 mb-4 leading-relaxed">
            Basic code checks. Did the AI respond in under 2 seconds? Did it swear? Very fast and cheap.
          </p>
          <div className="text-sm font-bold text-secondary mt-auto">Best for: Formatting and basic safety.</div>
        </div>

        <div className="flex flex-col bg-secondary/10 p-6 rounded-2xl border border-secondary/20 shadow-sm relative">
          <div className="absolute top-4 right-4 bg-secondary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">The Sweet Spot</div>
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-secondary mb-4 shadow-sm">
            <Robot size={24} weight="fill" />
          </div>
          <h4 className="text-xl font-bold mb-2">3. AI Grading AI</h4>
          <p className="text-primary/70 mb-4 leading-relaxed">
            Using a second AI to ask: "Was this response polite?" It scales subjectivity across thousands of chats.
          </p>
          <div className="text-sm font-bold text-secondary mt-auto">Best for: Measuring empathy and tone at scale.</div>
        </div>
      </div>

      <div className="pt-8 mb-16 border-t border-softgray">
        <h3 className="font-bold text-2xl mb-2">Finding the Right Balance</h3>
        <p className="text-primary/70 mb-8">
          Hover over the chart. We only use expensive methods (like AI Grading) for high-impact business needs.
        </p>
        
        <MetricChart />
      </div>

      <div className="bg-softgray/10 p-8 rounded-3xl border border-softgray">
        <h3 className="font-bold text-2xl mb-6 flex items-center gap-3">
          <Robot size={32} className="text-secondary" />
          The LLM-as-a-Judge Rubric Library
        </h3>
        <p className="text-primary/70 mb-8 leading-relaxed">
          When using an AI to grade another AI, you must give it a clear <strong>Rubric</strong>. Here are the four most common ones used in production:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-xl border border-softgray shadow-sm">
            <strong className="text-secondary block mb-1">1. Correctness</strong>
            <p className="text-sm text-primary/70">Does the response match the facts in our reference documentation? (Pass/Fail)</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-softgray shadow-sm">
            <strong className="text-secondary block mb-1">2. Groundedness</strong>
            <p className="text-sm text-primary/70">Did the AI only use the provided context, or did it "hallucinate" outside info?</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-softgray shadow-sm">
            <strong className="text-secondary block mb-1">3. Tone & Style</strong>
            <p className="text-sm text-primary/70">Was the response professional, concise, and aligned with our brand voice guidelines?</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-softgray shadow-sm">
            <strong className="text-secondary block mb-1">4. Safety</strong>
            <p className="text-sm text-primary/70">Did the response avoid discussing restricted topics (e.g., medical advice, competitors)?</p>
          </div>
        </div>
      </div>
    </div>
  );
};
