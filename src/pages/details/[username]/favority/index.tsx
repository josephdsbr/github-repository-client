import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import UserGitHubRepositories from '../../../../shared/UserGitHubRepositories'
import { useFetch } from '../../../../hooks/useFetch'
import { GitHubRepositoryModel } from '../../../../models/GitHubModel'
import {
  Container,
  Content,
  FavorityRepositoriesContainer,
  FavorityTitle,
  GoBackIcon
} from '../../../../styles/pages/Favority'
import WithValidUser from '../../../../components/withValidUser'

const DetailsFavority: React.FC = () => {
  const router = useRouter()
  const { username } = router.query
  const { data } = useFetch<GitHubRepositoryModel[]>(
    `https://api.github.com/users/${username}/starred`
  )
  return (
    <Container>
      <Content>
        <Link href={`/details/${username}`}>
          <GoBackIcon />
        </Link>
        <FavorityTitle>Favoritos de {username} </FavorityTitle>
        <FavorityRepositoriesContainer>
          {data?.map(starred => (
            <UserGitHubRepositories key={starred.id} repository={starred} />
          ))}
        </FavorityRepositoriesContainer>
      </Content>
    </Container>
  )
}

export default WithValidUser(DetailsFavority)
