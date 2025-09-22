import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { size } from "zod";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title
);

type LineChartProps = {
  monthlySavings: number[]; // Array of 12 numbers, one per month
};

const LineChart = ({ monthlySavings }: LineChartProps) => {
  const labels = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Energy Savings (%)",
        data: monthlySavings,
        fill: false,
        borderColor: "#0000cc",
        backgroundColor: "#4287f5",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Monthly Energy Savings",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: "Savings (%)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
    },
  };

  return (
    <div className="w-full mx-auto p-3 border-1 bg-white rounded-2xl flex justify-center flex-3">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
