import { Card } from '@/components'
import { OctokitController } from '@/controllers'
import { Metadata } from 'next'
import { unstable_noStore } from 'next/cache'
import { twMerge } from 'tailwind-merge'

type ProjectsProps = {
  translation: {
    'phrase-1': string
    'phrase-2': string
  }
}

export const metadata: Metadata = { title: 'Projects' }

const Projects = async ({ translation }: ProjectsProps) => {
  unstable_noStore()

  const repositories = await OctokitController.getRepositories()

  return (
    <>
      <span>
        {translation['phrase-1']}
        <br />
        <br />
        {translation['phrase-2']}
      </span>
      <section>
        <ul
          className={twMerge(
            'grid gap-4',
            repositories.length !== 1 && 'md:grip-cols-2'
          )}
        >
          {repositories.map((repository, index) => (
            <li key={index} className='w-full max-w-md m-auto'>
              <Card.CardRepository>{repository}</Card.CardRepository>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Projects
