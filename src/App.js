import React, {useState, useEffect, useRef} from 'react'
import { ThemeProvider } from 'styled-components'
import storage from 'local-storage-fallback'
import ReactTooltip from "react-tooltip";

import Home from './pages/Home'
import Body from './components/Body'

import { light, dark } from './data/colors'
import SettingsContext from './contexts/SettingsContext'
import Menu from './components/Menu'

function App() {
  const [darkMode, setDarkMode] = useState(initialDarkP())
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.3)

  const musicPlayer = useRef()

  useEffect(() => {
    storage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])


  function initialDarkP() {
    const returner = storage.getItem('darkMode')
    if (returner) {
      return JSON.parse(returner)
    } else return true
  }

  const toggleDarkMode = () => setDarkMode(prevState => !prevState)

  const contextObject = {
    toggleDarkMode, darkMode, 
    isPlaying, setIsPlaying,
    musicPlayer, 
    volume,
    setVolume,
    }

  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      <SettingsContext value={contextObject}>
        <audio loop ref={musicPlayer} src="/angham.mp3" />
        <Body>
          <ReactTooltip />
          <Menu />
          <Home />
        </Body>
      </SettingsContext>
    </ThemeProvider>
  )
}

export default App
