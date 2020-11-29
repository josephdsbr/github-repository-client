import styled from 'styled-components'

export const Container = styled.main`
  display: grid;
  background: ${props => props.theme.colors.secondary};
  border-radius: 20px;

  /* Prevent background color leak outs */
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding;
  background-clip: padding-box;
`
