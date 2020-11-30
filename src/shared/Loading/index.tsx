import React, { useEffect } from 'react'
import { Container, Animation } from './styles'
import { ToastContainer, toast } from 'react-nextjs-toast'

const Loading: React.FC = () => {
  return (
    <Container>
      <Animation />
    </Container>
  )
}

export default Loading
