import { octokit } from '@/lib/libs'

const getRepositoryLanguages = async (repository: string) =>
  octokit
    .request(`GET /repos/${repository}/languages`)
    .then((res) => Object.keys(res.data))

export default getRepositoryLanguages
