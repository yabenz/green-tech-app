import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Dashboard from './Pages/Dashboard'


function App() {
  return (
  <div className='main-container'>
        <Router>
          <Routes>
            <Route path="/dashboard" Component={Dashboard} />
            <Route path="/profile" Component={Profile} />
            <Route path="/" Component={Home} />
          </Routes>
        </Router>
      </div>
  )
}

export default App
