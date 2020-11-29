import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import UserGitHubRepositories from '../../../../components/UserGitHubRepositories'
import { useFetch } from '../../../../hooks/useFetch'
import { GitHubRepositoryModel } from '../../../../models/GitHubModel'
import {
  Container,
  Content,
  UserInfo,
  UserRepositories,
  GoBackIcon,
  UserName
} from '../../../../styles/pages/Repository'
const DetailsRepository: React.FC = () => {
  const router = useRouter()
  const { username } = router.query
  const { data } = useFetch<GitHubRepositoryModel[]>(
    `https://api.github.com/users/${username}/repos`
  )
  return (
    <Container>
      <Content>
        <Link href={`/details/${username}`}>
          <GoBackIcon />
        </Link>
        <UserInfo>
          <UserName>Repositórios</UserName>
        </UserInfo>
        <UserRepositories>
          {data?.map(repository => (
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

export default DetailsRepository
