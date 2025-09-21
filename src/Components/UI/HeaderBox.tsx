import type { User } from "@/types/types"


type HeaderBoxProps = {
  type: string,
  title: string,
  subtext: string,
  user: User
}

const HederBox = ({ type = 'title', title, subtext, user }: HeaderBoxProps) => {
  return (
    <div className="p-8 border-b-1">
      <h1 className='title'>
        {title}
        {type === 'greeting' &&
          (<span className="text-primary">&nbsp;{user.name} !</span>)}
      </h1>
      <p>{subtext}</p>
    </div>
  )
}

export default HederBox
