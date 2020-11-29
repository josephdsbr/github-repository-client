import styled from 'styled-components'
import BackIcon from '../../shared/BackIcon'
export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  background: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.fonts.borderRadius};
  width: 50%;
  height: 60%;
  display: grid;
  justify-content: center;
  grid-template-columns: 35% 45% 5%;
  grid-column-gap: 5%;
  grid-template-rows: auto 15% 35% 35%;
  grid-row-gap: 2%;
  padding: 1%;
  grid-template-areas:
    'icon . .'
    'avatar name name'
    'avatar bio bio'
    'avatar actions actions';
  align-items: center;

  @media (max-width: 800px) {
    height: 100%;
    width: 100%;
    border-radius: unset;
    grid-template-rows: 10% 30% 10% 26% 20%;
    grid-row-gap: 1%;
    grid-template-areas:
      'icon . .'
      'avatar avatar avatar'
      'name name name'
      'bio bio bio'
      'actions actions actions';
  }
`

export const UserAvatar = styled.img`
  grid-area: avatar;
  max-height: 100%;
  max-width: 100%;
  border-radius: 50%;
  justify-self: center;
`

export const UserName = styled.h1`
  grid-area: name;
  align-self: flex-end;
  color: ${props => props.theme.colors.secondary};

  @media (max-width: 800px) {
    justify-self: center;
    align-self: flex-start;
  }
`

export const UserBio = styled.h4`
  grid-area: bio;
  align-self: flex-start;
  font-weight: 400;
  color: ${props => props.theme.colors.secondary};

  @media (max-width: 800px) {
    text-align: center;
  }
`

export const ActionsContainer = styled.footer`
  grid-area: actions;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 40% 40%;
  grid-auto-rows: 40%;
  align-content: space-between;
  justify-content: space-evenly;

  @media (max-width: 800px) {
    align-content: center;
  }
`

export const BaseLink = styled.a`
  border-radius: ${props => props.theme.fonts.borderRadius};
  border: none;
  cursor: pointer;
  transition: 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transition: 0.25s ease-in-out;
    filter: brightness(110%);
    transform: scale(1.15);
  }
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.secondary};
`

export const RepositoryLink = styled(BaseLink)``

export const StarredLink = styled(BaseLink)``

export const GoBackIcon = styled(BackIcon)`
  grid-area: icon;
  color: ${props => props.theme.colors.secondary};
`
