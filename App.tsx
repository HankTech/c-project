import React, { useEffect } from 'react'
import Navigation from './src/navigation'
import { initI18n } from './src/languages/i18n.config'
import Amplify from 'aws-amplify'
import awsconfig from './src/aws-exports'

Amplify.configure(awsconfig)

const App = () => {
  useEffect(() => {
    initI18n()
  }, [])

  return <Navigation />
}

export default App
