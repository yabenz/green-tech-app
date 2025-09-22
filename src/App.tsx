import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Dashboard from './Pages/Dashboard'
import SignIn from './Pages/Auth/SignIn'
import SignUp from './Pages/Auth/SignUp'
import SidebarLayout from './Layouts/SidebarLayout'

// Create a React Query client
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='main-container'>
        <Router>
          <Routes>
            {/* Routes without sidebar */}
            <Route path="/signup" Component={SignUp} />
            <Route path="/signin" Component={SignIn} />
            <Route path="/" Component={Home} />

            {/* Routes with sidebar */}
            <Route element={<SidebarLayout />}>
              <Route path="/dashboard" Component={Dashboard} />
              <Route path="/profile" Component={Profile} />
            </Route>
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  )
}

export default App
