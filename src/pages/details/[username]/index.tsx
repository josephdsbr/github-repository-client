import Link from 'next/link'
import React from 'react'
import WithValidUser from '../../../components/withValidUser'
import { GitHubResponseModel } from '../../../models/GitHubModel'
import Loading from '../../../shared/Loading'
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
  user: GitHubResponseModel
}

const DetailsUser: React.FC<IProps> = ({ user: data }) => {
  if (!data) {
    return <Loading />
  }
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
          <Link href={`/details/${data?.login}/repository`}>
            <RepositoryLink>Repositóries</RepositoryLink>
          </Link>
          <Link href={`/details/${data?.login}/favority`}>
            <StarredLink>Favoritos</StarredLink>
          </Link>
        </ActionsContainer>
      </Content>
    </Container>
  )
}

export default WithValidUser(DetailsUser)
