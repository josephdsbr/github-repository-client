import React from 'react'
import { useRouter } from 'next/router'
import { GitHubResponseModel } from '../../../models/GitHubModel'
import { useFetch } from '../../../hooks/useFetch'
import { Container } from '../../../styles/pages/Details'
import UserDetails from '../../../components/UserDetails'

const UserName: React.FC = () => {
  const router = useRouter()
  const { username } = router.query
  const { data } = useFetch<GitHubResponseModel>(
    `https://api.github.com/users/${username}`
  )

  return (
    <Container>
      <UserDetails user={data} />
    </Container>
  )
}

export default UserName
