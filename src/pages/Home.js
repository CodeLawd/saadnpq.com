import React from 'react'
import Landing from './home-sections/Landing'
import WhoAmI from './home-sections/WhoAmI'
import Projects from './home-sections/Projects'
import Contact from './home-sections/Contact'

function Home() {
  return (
    <div>
      <Landing />
      <WhoAmI />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home