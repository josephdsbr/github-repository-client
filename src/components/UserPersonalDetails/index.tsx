import Link from 'next/link'
import React from 'react'
import {
  ActionsContainer,
  Container,
  RepositoryLink,
  StarredLink,
  UserAvatar,
  GoBackIcon,
  UserBio,
  UserName
} from './styles'

interface IProps {
  username: string
  img: string
  name: string
  bio: string
}

const UserPersonalDetails: React.FC<IProps> = ({
  img,
  name,
  bio,
  username
}) => {
  return (
    <Container>
      <Link href="/">
        <GoBackIcon />
      </Link>
      <UserAvatar src={img} alt="" />
      <UserName>{name}</UserName>
      <UserBio>{bio}</UserBio>
      <ActionsContainer>
        <Link href={`/details/${username}/repository`}>
          <RepositoryLink>Repositóries</RepositoryLink>
        </Link>
        <Link href={`/details/${username}/favority`}>
          <StarredLink>Favoritos</StarredLink>
        </Link>
      </ActionsContainer>
    </Container>
  )
}

export default UserPersonalDetails
