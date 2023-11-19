import { useTranslations } from 'next-intl'
import Link from '../link'

const FooterDefault = () => {
  const intl = useTranslations('footer')

  return (
    <footer className='flex justify-between items-center pb-6 text-sm'>
      <span>2023</span>
      <span>
        {intl('phrase-1')}
        <Link.LinkUnderlined href='https://github.com/ce-krause'>
          {intl('phrase-2')}
        </Link.LinkUnderlined>
        .
      </span>
    </footer>
  )
}

export default FooterDefault
