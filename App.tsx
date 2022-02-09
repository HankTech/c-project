import React, { useEffect } from 'react'
import Navigation from './src/navigation'
import { initI18n } from './src/languages/i18n.config'

const App = () => {
  useEffect(() => {
    initI18n()
  }, [])

  return <Navigation />
}

export default App
