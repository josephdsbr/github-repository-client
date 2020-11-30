import { Link } from '@material-ui/core'
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
    <Link href={repository.html_url} target="_blank" rel="noreferrer">
      <Container>
        <RepositoryTitle>{repository.name}</RepositoryTitle>
        <RepositoryDescription>{repository.description}</RepositoryDescription>
        <RepositoryOwnerAvatar
          height="360"
          width="640"
          src={repository.owner.avatar_url}
          alt={repository.name}
        />
      </Container>
    </Link>
  )
}

export default UserGitHubRepositories
