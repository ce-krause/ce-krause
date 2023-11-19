import { useTranslations } from 'next-intl'
import NavigationMenuDefault from './default'

const NavigationMenuDefaultRoot = () => {
  const intl = useTranslations('navigation-menu')

  return (
    <NavigationMenuDefault
      translations={{
        'home-button': intl('home-button'),
        'projects-button': intl('projects-button'),
      }}
    />
  )
}

export default NavigationMenuDefaultRoot
