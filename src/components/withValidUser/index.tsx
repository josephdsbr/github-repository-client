import React from 'react'
import { Router, useRouter, withRouter } from 'next/router'
import { useFetch } from '../../hooks/useFetch'
import { NextPage } from 'next'
import { GitHubResponseModel } from '../../models/GitHubModel'
import Loading from '../../shared/Loading'

/**
 * Check if a user exists
 * It is going to depend on if User exists on GitHub
 * @returns {{ user: null }}
 */

const WithValidUser = <P extends Object>(Component: React.FC<P>) => {
  const hocComponent: NextPage<P> = ({ ...props }) => {
    const router = useRouter()
    const { username } = router.query

    const { data } = useFetch<GitHubResponseModel>(
      `https://api.github.com/users/${username}`
    )

    if (data?.message === 'Not Found') {
      if (typeof window !== 'undefined') {
        router.push('/')
      }
      return <h1>Loading</h1>
    }

    return <Component user={data} {...props} />
  }

  return hocComponent
}

export default WithValidUser
