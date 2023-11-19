'use client'

import { usePathname } from 'next/navigation'
import { NavigationMenu, NavigationMenuList } from '../ui/navigation-menu'
import NavigationMenuItem from './item'

type TranslationsType = {
  'home-button': string
  'projects-button': string
}

type NavigationMenuDefaultProps = { translations: TranslationsType }

const NavigationMenuDefault = ({
  translations,
}: NavigationMenuDefaultProps) => {
  const pathname = usePathname()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem
          href={pathname.includes('/pt') ? '/pt/home' : '/home'}
        >
          {translations['home-button']}
        </NavigationMenuItem>
        <NavigationMenuItem
          href={
            pathname.includes('/pt') ? '/pt/home/projects' : '/home/projects'
          }
        >
          {translations['projects-button']}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavigationMenuDefault
