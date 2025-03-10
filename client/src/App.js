import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/ui/NavBar'
import Parrallax from './components/ui/Parrallax';
import Pages from './components/ui/Pages'
import MiniSocial from './components/mini social/MiniSocial'
import About from './components/ui/About'
import Footer from './components/ui/Footer'

// css
import './app.css';

// redux
import { Provider } from 'react-redux'
import store from './store'

import { closeNav } from './actions/globalActions'

const App = () => {

  return (
    <Provider store={store} >
      <Router>
        <NavBar />
        <Parrallax background="/images/background4.jpg">
          <div 
            className="app-master-container" 
            onClick={closeNav}
          >
            <Pages />
            <MiniSocial />
            <About />
          </div>
        </Parrallax>
        <Footer />
      </Router>
    </Provider>
  )
}

export default App
