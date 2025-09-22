import DoughnutChart from "@/components/DoughnutChart"



const SustainabilityScoreBox = () => {
  return (
    <div className=" w-full mx-auto p-3 border-1 bg-white rounded-2xl flex justify-center items-center flex-1">
      <div className="w-fit">
        <h2 className="mb-4">Sustainability Score</h2>
        <DoughnutChart score={75} />
      </div>
    </div>
  )
}

export default SustainabilityScoreBox
