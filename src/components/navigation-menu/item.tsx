'use client'

import { usePathname } from 'next/navigation'
import Link from '../link'
import {
  NavigationMenuLink,
  NavigationMenuItem as ShadNavigationMenuItem,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu'

type NavigationMenuItemProps = {
  children: string
  href: string
}

const NavigationMenuItem = ({ href, children }: NavigationMenuItemProps) => {
  const pathname = usePathname()

  return (
    <ShadNavigationMenuItem>
      <NavigationMenuLink
        data-state={href === pathname && 'open'}
        className={navigationMenuTriggerStyle()}
        asChild
      >
        <Link.LinkRoot href={href}>{children}</Link.LinkRoot>
      </NavigationMenuLink>
    </ShadNavigationMenuItem>
  )
}

export default NavigationMenuItem
