import { useAuthStore } from "@/stores/authStore"
import HeaderBox from '@/components/ui/HeaderBox'
import SustainabilityScoreBox from "@/components/SustainabilityScoreBox"
import CardDash  from "@/components/ui/CardDash"
import EnergySavedChart from "@/components/EnergySavedChart";



const dashboardData = {
      monthlySavings: [20, 35, 40, 50, 60, 55, 70, 75, 65, 80, 85, 90],
      CO2Stats : [
  {
    title: 'Total Emissions',
    date: '2025',
    value: 1200,
    unit: 'tCO2e'
  },
  {
    title: 'Supply Chain',
    date: '2025',
    value: 500,
    unit: 'tCO2e'
  },
  {
    title: 'Operations',
    date: '2025',
    value: 300,
    unit: 'tCO2e'
  },
  {
    title: 'Transport Mobility',
    date: '2025',
    value: 400,
    unit: 'tCO2e'
  }
]

}



const Dashboard = () => {

const userData = useAuthStore(state => state.userData)

  if (!userData) {
    return <div>No user logged in</div>
  }

  return (
    <section>
      <header>
        <HeaderBox 
        type='greeting' 
        title='Welcome' 
        subtext='Explore our store and monitor your inventory of green tech batteries' 
        user={userData}
          />
      </header>

      <div className="flex flex-col gap-4 p-6 bg-gray-50">
        <div className="flex gap-3 flex-wrap">
          {dashboardData.CO2Stats.map((card, index) => (
            <CardDash
              key={index}
              title={card.title}
              date={card.date}
              value={card.value}
              unit={card.unit}
            />
          ))}
        </div>
        <div className="flex w-full gap-4  flex-wrap">
          <SustainabilityScoreBox/>
          <EnergySavedChart monthlySavings={dashboardData.monthlySavings} />
        </div>
      </div>
    </section>
  )
}

export default Dashboard
