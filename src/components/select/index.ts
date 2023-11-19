import SelectLanguage from './language'
import SelectTheme from './theme'

export type ItemProps = {
  value: string
  placeholder: string
}

export type PlaceholderTranslationsType = {
  english: string
  portuguese: string
}

export type SelectLanguageTranslationProps = {
  placeholders: PlaceholderTranslationsType
  button: string
}

const Select = { SelectTheme, SelectLanguage }

export default Select
