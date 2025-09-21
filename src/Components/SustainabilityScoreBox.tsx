import DoughnutChart from "@/Components/DoughnutChart"



const SustainabilityScoreBox = () => {
  return (
    <div className="flex flex-col gap-6 border-1 w-full p-8 rounded-2xl bg-white">
      <h2>Sustainability Score</h2>
      <DoughnutChart score={75} />
    </div>
  )
}

export default SustainabilityScoreBox
