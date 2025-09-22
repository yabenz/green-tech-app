import type { User } from "@/types/types"
import { UserCircle } from "lucide-react"
import { UserDropDown } from "@/components/UserDropDown"


type HeaderBoxProps = {
  type: string,
  title: string,
  subtext: string,
  user: User
}

const HederBox = ({ type = 'title', title, subtext, user }: HeaderBoxProps) => {
  return (
      <div className="flex justify-between p-8 border-b-1">
    <div>
        <h1 className='title'>
          {title}
          {type === 'greeting' &&
            (<span className="text-primary">&nbsp;{user.name} !</span>)}
        </h1>
        <p>{subtext}</p>
      </div>

      <div className="hidden md:flex">
        <UserDropDown label={user.name}/>
      </div>
    </div>

  )
}

export default HederBox
