import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = { title: 'Home' }

const Home = () => {
  const intl = useTranslations('page')

  return (
    <>
      <h1>{intl('title')}</h1>
      <p className='text-justify'>
        {intl('phrase-1')}
        <br />
        <br />
        {intl('phrase-2')}
        <br />
        <br />
        {intl('phrase-3')}
        <br />
        <br />
        {intl('phrase-4')}
      </p>
    </>
  )
}

export default Home
