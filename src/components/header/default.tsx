import { geist } from '@/app/[lang]/layout'
import { useTranslations } from 'next-intl'
import { twMerge } from 'tailwind-merge'
import NavigationMenu from '../navigation-menu'

const HeaderDefault = () => {
  const intl = useTranslations('header')

  return (
    <header className='space-y-3'>
      <div className={twMerge(geist.mono, 'space-y-1.5')}>
        <h1 className='font-bold text-2xl'>cekrause</h1>
        <h2 className='font-medium text-xl'>{intl('description')}</h2>
      </div>
      <span className='float-right'>
        <NavigationMenu.NavigationMenuDefaultRoot />
      </span>
    </header>
  )
}

export default HeaderDefault
