'use server'

import { octokit } from '@/lib/libs'
import getRepositoriesWithLanguages from './get-repositories-with-languages'

const getRepositories = (username?: string) =>
  octokit
    .request(`GET /users/${username ?? process.env.GITHUB_USERNAME}/repos`)
    .then((res) => getRepositoriesWithLanguages(res.data))

export default getRepositories
