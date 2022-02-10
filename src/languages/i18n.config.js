// import * as Localization from 'expo-localization'
import * as RNLocalize from 'react-native-localize'
import i18n from 'i18n-js'

import { es } from './es'
import { en } from './en'

i18n.defaultLocale = 'en'

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  es,
  en
}

i18n.fallbacks = true

export const initI18n = () => {
  const language = RNLocalize.findBestAvailableLanguage(['es', 'en'])

  if (language?.languageTag) {
    i18n.locale = language?.languageTag
  } else {
    i18n.locale = 'en'
  }
}

// Set the locale once at the beginning of your app.

export default i18n
