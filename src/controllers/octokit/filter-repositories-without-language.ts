import { RepositoryWithID } from '@/lib/types'

type RepositoryWithLanguagesType = { languages: string[] } & RepositoryWithID

const filterRepositoriesWithoutLanguages = (
  repositories: RepositoryWithLanguagesType[]
) => repositories.filter(({ languages }) => languages.length)

export default filterRepositoriesWithoutLanguages
