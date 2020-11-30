export interface GitHubResponseModel {
  id: number
  avatar_url: string
  name: string
  bio: string
  followers: number
  following: number
  login: string
  message: string
}

export interface GitHubRepositoryModel {
  id: number
  name: string
  html_url: string
  description: string
  language: string
  owner: GitHubResponseModel
}
