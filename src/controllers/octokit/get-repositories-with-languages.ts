import { RepositoryWithID } from '@/lib/types'
import filterRepositoriesWithoutLanguages from './filter-repositories-without-language'
import getRepositoryLanguages from './get-repository-languages'

const getRepositoriesWithLanguages = async (
  repositories: RepositoryWithID[]
) => {
  const repositoriesWithLanguages = await Promise.all(
    repositories.map(
      async ({ id, name, full_name, html_url, description, updated_at }) => ({
        id,
        name,
        full_name,
        html_url,
        description,
        updated_at,
        languages: await getRepositoryLanguages(full_name),
      })
    )
  )

  return filterRepositoriesWithoutLanguages(repositoriesWithLanguages)
}

export default getRepositoriesWithLanguages
