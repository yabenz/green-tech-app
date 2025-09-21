import { useAuthStore } from "@/stores/authStore"

const Dashboard = () => {

const userData = useAuthStore(state => state.userData)
console.log('Dashboard userData:', userData)

  if (!userData) {
    return <div>No user logged in</div>
  }

  return (
    <div>
      <h1>Welcome, {userData.name}!</h1>
      <p>Email: {userData.email}</p>
    </div>
  )
}

export default Dashboard
