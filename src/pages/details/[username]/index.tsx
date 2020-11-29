import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useFetch } from '../../../hooks/useFetch'
import {
  GitHubRepositoryModel,
  GitHubResponseModel
} from '../../../models/GitHubModel'
import {
  ActionsContainer,
  Container,
  RepositoryLink,
  StarredLink,
  UserAvatar,
  GoBackIcon,
  UserBio,
  UserName,
  Content
} from '../../../styles/pages/Details'

interface IProps {
  username: string
  img: string
  name: string
  bio: string
}

const DetailsUser: React.FC<IProps> = () => {
  const router = useRouter()
  const { username } = router.query
  const { data } = useFetch<GitHubResponseModel>(
    `https://api.github.com/users/${username}`
  )

  return (
    <Container>
      <Content>
        <Link href="/">
          <GoBackIcon />
        </Link>
        <UserAvatar src={data?.avatar_url} alt="" />
        <UserName>{data?.name}</UserName>
        <UserBio>{data?.bio}</UserBio>
        <ActionsContainer>
          <Link href={`/details/${username}/repository`}>
            <RepositoryLink>Repositórios</RepositoryLink>
          </Link>
          <Link href={`/details/${username}/favority`}>
            <StarredLink>Favoritos</StarredLink>
          </Link>
        </ActionsContainer>
      </Content>
    </Container>
  )
}

export default DetailsUser
