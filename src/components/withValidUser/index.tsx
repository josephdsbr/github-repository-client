import React from 'react'
import { useRouter } from 'next/router'
import { useFetch } from '../../hooks/useFetch'
import { NextPage } from 'next'
import { GitHubResponseModel } from '../../models/GitHubModel'
import Loading from '../../shared/Loading'
import { useSnackbar } from 'nextjs-toast'

/**
 * Check if a user exists
 * It is going to depend on if User exists on GitHub
 * @returns {{ user: null }}
 */

const WithValidUser = <P extends Object>(Component: React.FC<P>) => {
  const hocComponent: NextPage<P> = ({ ...props }) => {
    const snackbar = useSnackbar()
    const router = useRouter()
    const { username } = router.query

    const { data } = useFetch<GitHubResponseModel>(
      `https://api.github.com/users/${username}`
    )

    if (data?.message === 'Not Found') {
      if (typeof window !== 'undefined') {
        router.push('/')
        snackbar.showMessage('User not found', 'error', 'filled')
      }
      return <Loading />
    }

    return <Component user={data} {...props} />
  }

  return hocComponent
}

export default WithValidUser
