import React from 'react'
import { GitHubResponseModel } from '../../models/GitHubModel'
import UserPersonalDetails from '../UserPersonalDetails'
import { Container } from './styles'

interface IProps {
  user: GitHubResponseModel
}

const UserDetails: React.FC<IProps> = ({ user }) => {
  const { avatar_url, name, bio, login } = user || {}
  return (
    <Container>
      <UserPersonalDetails
        username={login}
        img={avatar_url}
        bio={bio}
        name={name}
      />
    </Container>
  )
}

export default UserDetails
