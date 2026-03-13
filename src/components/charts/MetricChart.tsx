import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  type ChartOptions
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const MetricChart = () => {
  const data = {
    datasets: [
      {
        label: 'Metrics',
        data: [
          { x: 1, y: 9, label: 'Safety Filter', type: 'Must Have' },
          { x: 2, y: 8, label: 'Format Check (Email/JSON)', type: 'Must Have' },
          { x: 2, y: 9, label: 'Response Speed', type: 'Must Have' },
          
          { x: 8, y: 9, label: 'Expert Human Review', type: 'Strategic' },
          { x: 7, y: 8, label: 'AI Grading AI (LLM Judge)', type: 'Strategic' },
          
          { x: 2, y: 2, label: 'Basic Sentiment Check', type: 'Nice to Have' },
          { x: 3, y: 3, label: 'Word Count', type: 'Nice to Have' },
          
          { x: 8, y: 2, label: 'Complex Unused Score', type: 'Avoid' }
        ],
        backgroundColor: (context: any) => {
          const val = context.raw;
          if (!val) return '#DCE3ED';
          if (val.label === 'Safety Filter') return '#11d399'; // Green accent
          if (val.label === 'AI Grading AI (LLM Judge)') return '#006fff'; // Blue accent
          return '#DCE3ED'; // Soft gray
        },
        pointRadius: 8,
        pointHoverRadius: 10
      }
    ]
  };

  const options: ChartOptions<'scatter'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        backgroundColor: '#0d2c54',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        callbacks: {
          label: function(context: any) {
            return `${context.raw.label} (${context.raw.type})`;
          }
        }
      },
      legend: { display: false }
    },
    scales: {
      x: {
        title: { display: true, text: 'Cost (Compute/$$$)', font: { weight: 'bold' } },
        min: 0, max: 10,
        grid: { color: '#DCE3ED' }
      },
      y: {
        title: { display: true, text: 'Business Impact', font: { weight: 'bold' } },
        min: 0, max: 10,
        grid: { color: '#DCE3ED' }
      }
    }
  };

  return (
    <div className="h-[400px] w-full">
      <Scatter data={data} options={options} />
    </div>
  );
};
