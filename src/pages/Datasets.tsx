import { Database, Ruler, Bug, ChartLineUp } from "@phosphor-icons/react";

export const Datasets = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 fade-in">
      <header className="mb-12 border-b border-softgray pb-6">
        <span className="text-secondary text-xs font-bold uppercase tracking-widest">Chapter 4</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">Building Your Golden Set</h2>
        <p className="text-lg text-primary/70 mt-4 leading-relaxed">
          Start with 10-20 "cannot-fail" scenarios. Then, figure out what could go wrong to discover what you actually need to measure.
        </p>
      </header>

      <div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h3 className="font-bold text-2xl flex items-center gap-2">
              <Database size={28} className="text-secondary" />
              From Scenarios to Metrics
            </h3>
            <p className="text-primary/70 mt-1">How do we know what to measure? It comes from expected failures.</p>
          </div>
          <div className="text-sm font-bold text-secondary bg-secondary/10 px-4 py-2 rounded-full whitespace-nowrap">
            Phase: Pre-Deployment
          </div>
        </div>

        <div className="overflow-x-auto mb-8 rounded-xl border border-softgray">
          <table className="w-full text-left border-collapse">
            <thead className="bg-softgray/50 text-primary uppercase text-xs tracking-wider border-b border-softgray">
              <tr>
                <th className="px-6 py-4 font-bold w-1/4">1. Scenario</th>
                <th className="px-6 py-4 font-bold w-1/4">2. Expected Behavior</th>
                <th className="px-6 py-4 font-bold w-1/4">3. What could go wrong?</th>
                <th className="px-6 py-4 font-bold w-1/4">4. Metric to Track</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-softgray">
              <tr className="hover:bg-softgray/10 transition-colors">
                <td className="px-6 py-6 font-bold align-top">User wants a refund without a receipt</td>
                <td className="px-6 py-6 text-primary/80 align-top leading-relaxed">Explain the 30-day policy and ask for an order number.</td>
                <td className="px-6 py-6 text-primary/60 italic align-top leading-relaxed">AI invents a fake policy or promises a refund anyway.</td>
                <td className="px-6 py-6 align-top">
                  <span className="bg-secondary/10 text-secondary font-bold px-3 py-1.5 rounded-lg text-xs whitespace-nowrap">Policy Adherence</span>
                </td>
              </tr>
              <tr className="hover:bg-softgray/10 transition-colors">
                <td className="px-6 py-6 font-bold align-top">Angry user threatening to cancel</td>
                <td className="px-6 py-6 text-primary/80 align-top leading-relaxed">Apologize and immediately escalate to human agent.</td>
                <td className="px-6 py-6 text-primary/60 italic align-top leading-relaxed">AI gives a generic "I'm sorry" and doesn't escalate.</td>
                <td className="px-6 py-6 align-top">
                  <span className="bg-secondary/10 text-secondary font-bold px-3 py-1.5 rounded-lg text-xs whitespace-nowrap">Escalation Accuracy</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 mb-10 bg-secondary/5 p-6 rounded-2xl border border-secondary/20">
          <h4 className="font-bold text-lg flex items-center gap-2 mb-2">
            <Ruler size={24} className="text-secondary" /> 
            What exactly is a "Metric" here?
          </h4>
          <p className="text-primary/80 leading-relaxed">
            A metric is simply a <strong>quantifiable rule</strong> we create to check if our "What could go wrong?" fear actually happened. We don't track metrics just for fun; we track them to catch specific failures. Once we define the metric (e.g., "Escalation Accuracy"), we have to figure out <em>how</em> to measure it.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-4 p-6 bg-softgray/10 rounded-2xl border border-transparent hover:border-softgray transition-colors">
            <div className="w-12 h-12 rounded-full bg-softgray flex items-center justify-center text-primary shrink-0">
              <Bug size={24} />
            </div>
            <div>
              <strong className="text-lg block mb-2">One-off Bug</strong>
              <p className="text-sm text-primary/70 leading-relaxed">
                If the AI forgets a step once, tweak the prompt and move on. Don't build a complex metric for it.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-6 bg-softgray/10 rounded-2xl border border-transparent hover:border-softgray transition-colors">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
              <ChartLineUp size={24} />
            </div>
            <div>
              <strong className="text-lg block mb-2">Recurring Risk = Metric</strong>
              <p className="text-sm text-primary/70 leading-relaxed">
                If the AI might constantly fail at something critical (like tone or escalation), it becomes a Metric to track continuously.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
