import { CalendarIcon } from "lucide-react"


type CardDashProps = {
  title: string, 
  date: string, 
  value: number, 
  unit: string 
}

const CardDash = ({ title, date, value, unit }: CardDashProps) => {
  return (
    <div className="border-1 flex-1 min-w-[225px] h-[135px] p-3 rounded-2xl flex flex-col justify-between bg-white">
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-xs text-gray-500 flex gap-1 mt-1"><CalendarIcon size={13}/>{date}</div>
      </div>

      <div className="flex gap-1 items-center">
        <div className="text-3xl font-bold">{value}</div>
        <div className="text-1xl text-gray-500 font-medium">{unit}</div>
      </div>

    </div>
  )
}

export default CardDash
