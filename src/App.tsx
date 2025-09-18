import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Dashboard from './Pages/Dashboard'
import SignIn from './Pages/Auth/SignIn'
import SignUp from './Pages/Auth/SignUp'


function App() {
  return (
  <div className='main-container'>
        <Router>
          <Routes>
            <Route path="/dashboard" Component={Dashboard} />
            <Route path="/profile" Component={Profile} />
            <Route path="/signup" Component={SignUp} />
            <Route path="/signin" Component={SignIn} />
            <Route path="/" Component={Home} />
          </Routes>
        </Router>
      </div>
  )
}

export default App
