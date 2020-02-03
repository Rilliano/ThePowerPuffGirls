import React from 'react'

import './App.css'
import MainInfo from './MainInfo'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// Styles
import GlobalStyle from './styles'

const Episode = () => <div>episode</div>

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/episode/1">First Product</Link>
          </li>
          <li>
            <Link to="/episode/2">Second Product</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={MainInfo} />
      <Route path="/episode/:id" component={Episode} />
    </Router>
  )
}

export default App
