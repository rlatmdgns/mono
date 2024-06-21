import ko from './ko.json' assert { type: 'json' }
import en from './en.json' assert { type: 'json' }

interface translateLanguageInterface {
  [key: string]: any
}

const translateLanguage: translateLanguageInterface = {
  ko: ko,
  en: en,
}

export default translateLanguage
