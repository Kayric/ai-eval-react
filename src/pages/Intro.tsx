import { useState } from "react";
import { CursorClick, Sparkle, Info } from "@phosphor-icons/react";

export const Intro = () => {
  const [traditionalOutput, setTraditionalOutput] = useState("> ...");
  const [aiOutput, setAiOutput] = useState("> ...");
  const [tradHighlight, setTradHighlight] = useState(false);
  const [aiHighlight, setAiHighlight] = useState(false);

  const runTraditional = () => {
    setTraditionalOutput('> System Output: Displaying standard refund form.');
    setTradHighlight(true);
    setTimeout(() => setTradHighlight(false), 200);
  };

  const runAI = () => {
    const responses = [
      '> AI: "I understand you are frustrated. I can help process your refund right now."',
      '> AI: "Oh no! Im sorry you hated the product. Here is a link to our refund portal."',
      '> AI: "As an AI, I cannot issue refunds, but I have escalated this to an agent."',
      '> AI: "To get your money back, please provide your order number first."'
    ];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    setAiOutput(randomResponse);
    setAiHighlight(true);
    setTimeout(() => setAiHighlight(false), 200);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 fade-in">
      <header className="mb-12 border-b border-softgray pb-6">
        <span className="text-secondary text-xs font-bold uppercase tracking-widest">Chapter 1</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">Why Evaluation is Unavoidable</h2>
        <p className="text-lg text-primary/70 mt-4 leading-relaxed">
          To understand why evaluation is suddenly so complex, we must first understand the fundamental shift in how software behaves under the hood.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-softgray flex items-center justify-center">
              <CursorClick size={32} className="text-secondary" />
            </div>
            <h3 className="font-bold text-2xl">Traditional Software</h3>
          </div>
          <p className="mb-6 flex-grow text-primary/80">
            Predictable (Deterministic). The user clicks a specific button, and the system follows a written rule.
          </p>
          <div className="bg-softgray/30 rounded-lg p-6 font-mono text-sm min-h-[6rem] flex flex-col justify-end border border-softgray">
            <div className="text-primary/60 mb-2">&gt; Action: User clicks "Request Refund"</div>
            <div className={`font-bold transition-colors duration-200 ${tradHighlight ? 'text-secondary' : ''}`}>
              {traditionalOutput}
            </div>
          </div>
          <button 
            onClick={runTraditional}
            className="mt-6 w-full py-3 bg-softgray hover:bg-softgray/70 text-primary font-bold rounded-lg transition-colors cursor-pointer"
          >
            Simulate Click
          </button>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
              <Sparkle size={32} className="text-secondary" />
            </div>
            <h3 className="font-bold text-2xl">AI Systems</h3>
          </div>
          <p className="mb-6 flex-grow text-primary/80">
            Unpredictable (Probabilistic). The user types whatever they want, and the AI generates a unique response.
          </p>
          <div className="bg-softgray/30 rounded-lg p-6 font-mono text-sm min-h-[6rem] flex flex-col justify-end border border-softgray relative">
            <div className="text-secondary text-xs font-bold absolute top-3 right-4 uppercase">New Paradigm</div>
            <div className="text-primary/60 mb-2">&gt; User: "I hated this product, give me my money back!"</div>
            <div className={`font-bold transition-colors duration-200 ${aiHighlight ? 'text-secondary' : ''}`}>
              {aiOutput}
            </div>
          </div>
          <button 
            onClick={runAI}
            className="mt-6 w-full py-3 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-lg transition-colors cursor-pointer"
          >
            Generate Response
          </button>
        </div>
      </div>

      <div className="bg-softgray/20 p-8 rounded-2xl border-l-4 border-secondary">
        <h4 className="font-bold text-lg flex items-center gap-2 mb-2">
          <Info size={32} className="text-secondary" />
          Key Takeaway
        </h4>
        <p className="text-primary/80 leading-relaxed">
          In traditional software, we test logic. In AI, we evaluate behavior. Because we cannot predict every input or guarantee every output, <strong>evaluation isn't just testing—it's risk management.</strong>
        </p>
      </div>
    </div>
  );
};
