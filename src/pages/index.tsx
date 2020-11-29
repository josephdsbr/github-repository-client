import { useRouter } from 'next/router'
import React, { useState } from 'react'
import {
  Container,
  GitHubForm,
  GitHubFormInput,
  GitHubFormInputButton,
  GithubFormInputIcon,
  GithubFormLabel,
  GitHubFormTitle
} from '../styles/pages/Home'

const Home: React.FC = () => {
  const [username, setUsername] = useState<string>(null)
  const router = useRouter()
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push(`details/${username}`)
  }

  return (
    <Container>
      <GitHubForm onSubmit={e => handleOnSubmit(e)}>
        <GitHubFormTitle>Digite um usuário do GitHub</GitHubFormTitle>
        <GithubFormLabel htmlFor="github-username">
          <GitHubFormInput
            type="text"
            name="github-username"
            onChange={event => setUsername(event.target?.value)}
            placeholder="Digite um GitHub"
          />
          <GitHubFormInputButton type="submit">
            <GithubFormInputIcon />
          </GitHubFormInputButton>
        </GithubFormLabel>
      </GitHubForm>
    </Container>
  )
}

export default Home
