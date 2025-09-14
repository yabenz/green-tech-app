import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import './App.css';

import Home from './Home'
import Profile from './Profile'
import Dashboard from './Dashboard'


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
