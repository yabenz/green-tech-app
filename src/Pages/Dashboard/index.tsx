import { useAuthStore } from "@/stores/authStore"
import HeaderBox from '@/Components/UI/HeaderBox'
import SustainabilityScoreBox from "@/Components/SustainabilityScoreBox"
import CardDash  from "@/Components/UI/CardDash"


const cardData = [
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
];

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
          {cardData.map((card, index) => (
            <CardDash
              key={index}
              title={card.title}
              date={card.date}
              value={card.value}
              unit={card.unit}
            />
          ))}
        </div>
        <SustainabilityScoreBox/>
      </div>
    </section>
  )
}

export default Dashboard
