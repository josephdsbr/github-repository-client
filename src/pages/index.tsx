import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import React from 'react'
import {
  Container,
  GitHubForm,
  GitHubFormInput,
  GitHubFormInputButton,
  GithubFormInputIcon,
  GithubFormLabel,
  GitHubFormTitle
} from '../styles/pages/Home'
import WithValidUser from '../components/withValidUser'
import { NextPage } from 'next'
import Loading from '../shared/Loading'

interface Props {
  user: any
}

const Home: NextPage<Props> = ({ user }) => {
  const { register, handleSubmit, errors } = useForm()
  const router = useRouter()

  const onSubmit = ({ username }) => {
    router.push(`details/${username}`)
  }

  return (
    <Container>
      <GitHubForm onSubmit={handleSubmit(onSubmit)}>
        <GitHubFormTitle>Digite um usuário do GitHub</GitHubFormTitle>
        <GithubFormLabel error={errors.username} htmlFor="username">
          <GitHubFormInput
            ref={register({ required: true })}
            type="text"
            name="username"
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
