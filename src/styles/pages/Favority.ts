import styled from 'styled-components'
import BackIcon from '../../shared/BackIcon'

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.section`
  background: ${props => props.theme.colors.primary};
  display: grid;
  height: 70%;
  width: 40%;
  padding: 1%;
  grid-template-rows: minmax(8%, auto) auto 80%;
  grid-template-columns: 10% 90%;
  grid-template-areas:
    'icon .'
    'title title'
    'repository repository';

  @media (max-width: 800px) {
    padding: 3%;
    height: 100%;
    width: 100%;
  }
`

export const GoBackIcon = styled(BackIcon)`
  grid-area: icon;
  color: #fff;
`

export const FavorityTitle = styled.h3`
  grid-area: title;
  color: #fff;
  font-weight: 900;
  text-align: center;
`

export const FavorityRepositoriesContainer = styled.div`
  grid-area: repository;
  display: grid;
  max-height: 100%;
  overflow-y: scroll;
  justify-content: center;
  grid-row-gap: 5%;
  grid-template-columns: repeat(auto-fit, minmax(80%, 90%));
  grid-auto-rows: 30%;
`
