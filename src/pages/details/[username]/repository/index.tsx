import Link from 'next/link'
import React from 'react'
import UserGitHubRepositories from '../../../../shared/UserGitHubRepositories'
import { useFetch } from '../../../../hooks/useFetch'
import {
  GitHubRepositoryModel,
  GitHubResponseModel
} from '../../../../models/GitHubModel'
import {
  Container,
  Content,
  UserInfo,
  UserRepositories,
  GoBackIcon,
  UserName
} from '../../../../styles/pages/Repository'
import WithValidUser from '../../../../components/withValidUser'
import Loading from '../../../../shared/Loading'

interface IProps {
  user: GitHubResponseModel
}

const DetailsRepository: React.FC<IProps> = ({ user: data }) => {
  if (!data) {
    return <Loading />
  }

  const { data: repositories } = useFetch<GitHubRepositoryModel[]>(
    `https://api.github.com/users/${data?.login}/repos`
  )

  return (
    <Container>
      <Content>
        <Link href={`/details/${data?.login}`}>
          <GoBackIcon />
        </Link>
        <UserInfo>
          <UserName>Repositórios</UserName>
        </UserInfo>
        <UserRepositories>
          {repositories?.map(repository => (
            <UserGitHubRepositories
              key={repository.id}
              repository={repository}
            />
          ))}
        </UserRepositories>
      </Content>
    </Container>
  )
}

export default WithValidUser(DetailsRepository)
