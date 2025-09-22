import { useQuery } from '@tanstack/react-query'
import { useAuthStore } from "@/stores/authStore"
import HeaderBox from '@/components/ui/HeaderBox'
import SustainabilityScoreBox from "@/components/SustainabilityScoreBox"
import CardDash from "@/components/ui/CardDash"
import EnergySavedChart from "@/components/EnergySavedChart"

type DashboardData = {
  monthlySavings: number[]
  CO2Stats: {
    title: string
    date: string
    value: number
    unit: string
  }[]
}

const fetchDashboardData = async (): Promise<DashboardData> => {
  const res = await fetch('http://localhost:3001/api/data')
  if (!res.ok) {
    throw new Error('Failed to fetch dashboard data')
  }
  return res.json()
}

const Dashboard = () => {
  const userData = useAuthStore(state => state.userData)

const { data, error, isLoading } = useQuery({
  queryKey: ['dashboardData'],
  queryFn: fetchDashboardData,
})
  if (!userData) {
    return <div>No user logged in</div>
  }

  if (isLoading) return <div>Loading dashboard data...</div>
  if (error) return <div>Error loading dashboard data</div>

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
          {data?.CO2Stats.map((card, index) => (
            <CardDash
              key={index}
              title={card.title}
              date={card.date}
              value={card.value}
              unit={card.unit}
            />
          ))}
        </div>

        <div className="flex w-full gap-4 flex-wrap">
          <SustainabilityScoreBox />
          <EnergySavedChart monthlySavings={data?.monthlySavings || []} />
        </div>
      </div>
    </section>
  )
}

export default Dashboard
