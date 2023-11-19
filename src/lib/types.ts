export type RepositoryWithoutIDType = {
  name: string
  full_name: string
  html_url: string
  description: string
  updated_at: string
}

export type RepositoryWithID = { id: number } & RepositoryWithoutIDType
