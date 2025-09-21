import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

type DoughnutChartProps = {
  score: number;
}

const DoughnutChart = ({ score }: DoughnutChartProps) => {
  const data = {
    labels: ["Score", "Remaining"],
    datasets: [
      {
        data: [score, 100 - score],
        backgroundColor: ["#4CAF50", "#E0E0E0"],
        borderWidth: 0,
        cutout: "70%",
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <div className="flex items-center justify-center relative w-64 h-64">
      <Doughnut data={data} options={options} />
      <div className="absolute text-center">
        <p className="text-2xl font-bold">{score}%</p>
        <p className="text-sm text-gray-500">Sustainability</p>
      </div>
    </div>
  );
};

export default DoughnutChart;
