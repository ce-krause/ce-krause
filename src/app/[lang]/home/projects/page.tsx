import { useTranslations } from 'next-intl'
import Projects from './projects'

const ProjectsRoot = () => {
  const intl = useTranslations('projects')

  return (
    <Projects
      translation={{
        'phrase-1': intl('phrase-1'),
        'phrase-2': intl('phrase-2'),
      }}
    />
  )
}

export default ProjectsRoot
