import React from 'react'
import { GitHubRepositoryModel } from '../../models/GitHubModel'
import {
  Container,
  RepositoryDescription,
  RepositoryOwnerAvatar,
  RepositoryTitle
} from './styles'

interface IProps {
  repository: GitHubRepositoryModel
}

const UserGitHubRepositories: React.FC<IProps> = ({ repository }) => {
  return (
    <Container href={repository.html_url} target="_blank">
      <RepositoryTitle>{repository.name}</RepositoryTitle>
      <RepositoryDescription>{repository.description}</RepositoryDescription>
      <RepositoryOwnerAvatar src={repository.owner.avatar_url} />
    </Container>
  )
}

export default UserGitHubRepositories
