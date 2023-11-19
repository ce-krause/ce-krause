import { Header } from '@/components'
import { ReactNode } from 'react'

type HomeLayoutProps = { children: ReactNode }

const HomeLayout = ({ children }: HomeLayoutProps) => (
  <div className='flex flex-col flex-1 pt-32 gap-16'>
    <Header.HeaderDefault />
    <main className='flex-1 space-y-16'>{children}</main>
  </div>
)

export default HomeLayout
