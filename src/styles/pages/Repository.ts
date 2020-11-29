import styled from 'styled-components'
import BackIcon from '../../shared/BackIcon'
import { darken } from 'polished'
export const Container = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  height: 70%;
  width: 40%;
  background: ${props => props.theme.colors.primary};
  display: grid;
  grid-template-rows: auto auto minmax(76%, 85%);
  padding: 1%;
  grid-row-gap: 2%;
  grid-template-columns: 10% 87%;
  align-items: center;
  justify-content: center;
  grid-template-areas:
    'icon .'
    'user-info user-info'
    'repositories repositories';
  border-radius: ${props => props.theme.fonts.borderRadius};

  @media (max-width: 800px) {
    padding: 3%;
    height: 100%;
    width: 100%;
    border-radius: unset;
  }
`

export const UserInfo = styled.header`
  grid-area: user-info;
`

export const UserRepositories = styled.main`
  grid-area: repositories;
  max-height: 100%;
  overflow-y: scroll;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(85%, 90%));
  grid-column-gap: 2%;
  grid-row-gap: 5%;
  grid-auto-rows: 25%;
`

export const GoBackIcon = styled(BackIcon)`
  grid-area: icon;
  color: #fff;

  &:hover {
    color: ${darken(0.2, '#fff')};
  }
`
export const UserName = styled.h1`
  text-align: center;
  font-weight: 900;
  color: #fff;
`
