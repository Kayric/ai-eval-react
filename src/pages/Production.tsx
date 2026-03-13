import { useState, useEffect } from "react";
import { ChatCircleDots, ShieldCheck, ArrowsClockwise } from "@phosphor-icons/react";

interface Log {
  id: string;
  type: 'normal' | 'behavior' | 'escalation';
  msg: string;
  time: string;
}

const allLogs: Log[] = [
  { type: 'normal', msg: 'User requested password reset', id: 'req_001', time: new Date().toLocaleTimeString() },
  { type: 'normal', msg: 'Product query: "blue shoes"', id: 'req_002', time: new Date().toLocaleTimeString() },
  { type: 'behavior', msg: 'User retried prompt 3 times', id: 'req_003', time: new Date().toLocaleTimeString() },
  { type: 'escalation', msg: 'User: "Let me talk to a human!"', id: 'req_004', time: new Date().toLocaleTimeString() },
  { type: 'normal', msg: 'Shipping status check', id: 'req_005', time: new Date().toLocaleTimeString() },
  { type: 'behavior', msg: 'Rage click detected on "Submit"', id: 'req_006', time: new Date().toLocaleTimeString() },
  { type: 'normal', msg: 'User updated profile', id: 'req_007', time: new Date().toLocaleTimeString() },
  { type: 'escalation', msg: 'User: "This is useless"', id: 'req_008', time: new Date().toLocaleTimeString() },
  { type: 'normal', msg: 'Checkout flow started', id: 'req_009', time: new Date().toLocaleTimeString() }
];

export const Production = () => {
  const [filterEscalation, setFilterEscalation] = useState(false);
  const [filterBehavior, setFilterBehavior] = useState(false);
  const [visibleLogs, setVisibleLogs] = useState<Log[]>(allLogs);

  useEffect(() => {
    const filtered = allLogs.filter(log => {
      if (log.type === 'normal' && !filterEscalation && !filterBehavior) return true;
      if (log.type === 'escalation' && filterEscalation) return true;
      if (log.type === 'behavior' && filterBehavior) return true;
      // If filters are on, hide normal
      if ((filterEscalation || filterBehavior) && log.type === 'normal') return false;
      return false;
    });
    setVisibleLogs(filtered);
  }, [filterEscalation, filterBehavior]);

  const getLogCount = () => {
    if (filterEscalation && filterBehavior) return "350 (Manageable)";
    if (filterEscalation || filterBehavior) return "150 (Manageable)";
    return "10,000 (Impossible)";
  };

  const getBarWidth = () => {
    if (filterEscalation && filterBehavior) return "3.5%";
    if (filterEscalation || filterBehavior) return "1.5%";
    return "100%";
  };

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 fade-in">
      <header className="mb-12 border-b border-softgray pb-6">
        <span className="text-secondary text-xs font-bold uppercase tracking-widest">Chapter 6</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">The Production Reality</h2>
        <p className="text-lg text-primary/70 mt-4 leading-relaxed">
          Real users are messy. Even a 95% success rate at scale still means hundreds of frustrated users daily. How do we spot them?
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="flex flex-col">
          <h3 className="font-bold text-2xl mb-4">Finding the Signal</h3>
          <p className="text-primary/70 mb-8 leading-relaxed">
            You have 10,000 interactions today. You can't read them all. Filter for "Signals" to isolate the problems.
          </p>
          
          <div className="space-y-4 flex-grow">
            <label className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer hover:bg-softgray/40 transition border ${filterEscalation ? 'bg-secondary/10 border-secondary/30' : 'bg-softgray/20 border-transparent'}`}>
              <input 
                type="checkbox" 
                checked={filterEscalation}
                onChange={(e) => setFilterEscalation(e.target.checked)}
                className="w-5 h-5 mt-1 text-secondary rounded focus:ring-secondary accent-secondary"
              />
              <div>
                <span className="font-bold block text-lg">Explicit Signals</span>
                <p className="text-sm text-primary/60 mt-1">"Talk to a human", Thumbs down ratings</p>
              </div>
            </label>
            <label className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer hover:bg-softgray/40 transition border ${filterBehavior ? 'bg-accent/10 border-accent/30' : 'bg-softgray/20 border-transparent'}`}>
              <input 
                type="checkbox" 
                checked={filterBehavior}
                onChange={(e) => setFilterBehavior(e.target.checked)}
                className="w-5 h-5 mt-1 text-secondary rounded focus:ring-secondary accent-secondary"
              />
              <div>
                <span className="font-bold block text-lg">Implicit Signals</span>
                <p className="text-sm text-primary/60 mt-1">Rage clicks, copy-pasting, asking same question 3 times</p>
              </div>
            </label>
          </div>
          <div className="mt-8">
            <div className="flex justify-between text-sm mb-3">
              <span className="text-primary/70 font-medium">Logs Visible:</span>
              <span className="font-bold text-secondary">{getLogCount()}</span>
            </div>
            <div className="w-full bg-softgray rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-500 ${(filterEscalation || filterBehavior) ? 'bg-secondary' : 'bg-primary/30'}`} 
                style={{ width: getBarWidth() }}
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-softgray/30 p-6 rounded-2xl font-mono text-sm overflow-hidden flex flex-col h-96 border border-softgray">
          <div className="text-primary font-bold border-b border-softgray pb-4 mb-4 flex justify-between font-sans">
            <span className="flex items-center gap-2"><ChatCircleDots size={24} className="text-secondary" /> Live Chat Stream</span>
            <span className="animate-pulse text-accent font-bold flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent"></div> Live</span>
          </div>
          <div className="space-y-3 overflow-y-auto flex-1 pr-2 custom-scrollbar">
            {visibleLogs.map(log => (
              <div 
                key={log.id}
                className={`p-3 rounded font-mono text-xs mb-2 transition-all duration-300 ${
                  log.type === 'escalation' ? 'bg-secondary/10 text-primary border-l-4 border-secondary' :
                  log.type === 'behavior' ? 'bg-accent/10 text-primary border-l-4 border-accent' :
                  'text-primary/60 border-l-4 border-transparent'
                }`}
              >
                [{log.time}] [{log.id}] {log.msg}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-softgray">
        <h3 className="font-bold text-2xl mb-10 text-center">Monitoring Strategy</h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-softgray rounded-full flex items-center justify-center mb-6">
              <ShieldCheck size={40} className="text-secondary" />
            </div>
            <h4 className="font-bold text-xl mb-3">Online (Guardrails)</h4>
            <p className="text-primary/70 leading-relaxed max-w-sm">Real-time circuit breakers. Block PII, hate speech, or dangerous content immediately. Must be fast.</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
              <ArrowsClockwise size={40} className="text-secondary" />
            </div>
            <h4 className="font-bold text-xl mb-3">Offline (Flywheel)</h4>
            <p className="text-primary/70 leading-relaxed max-w-sm">Batch analysis. Run AI judges overnight on sampled logs to spot trends and fix root causes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
