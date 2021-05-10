import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Menu from '../components/Menu'
import Work from '../components/Work'
import '../style.scss'

const App = () => {
  return (
    <div>
      <Menu />
      <About />
      <Work />
      <Contact />
    </div>
  )
}

export default App;
