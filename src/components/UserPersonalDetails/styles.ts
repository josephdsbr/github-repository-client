import styled from 'styled-components'
import BackIcon from '../../shared/BackIcon'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: 35% 45% 5%;
  grid-column-gap: 5%;
  grid-template-rows: auto 15% 35% 35%;

  grid-template-areas:
    'icon . .'
    'avatar name name'
    'avatar bio bio'
    'avatar actions actions';
  align-items: center;
`

export const UserAvatar = styled.img`
  grid-area: avatar;
  max-height: 100%;
  max-width: 100%;
  border-radius: 50%;
`

export const UserName = styled.h1`
  grid-area: name;
  align-self: flex-end;
  color: ${props => props.theme.colors.primary};
`

export const UserBio = styled.h4`
  grid-area: bio;
  align-self: flex-start;
  font-weight: 400;
  color: ${props => props.theme.colors.primary};
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
`

export const BaseLink = styled.a`
  border-radius: ${props => props.theme.fonts.borderRadius};
  border: none;
  cursor: pointer;
  transition: 0.25s ease;
  background: ${props => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transition: 0.25s ease-in-out;
    filter: brightness(110%);
    transform: scale(1.15);
  }
  font-weight: 700;
  color: ${props => props.theme.colors.secondary};
  background: ${props => props.theme.colors.primary};
`

export const RepositoryLink = styled(BaseLink)``

export const StarredLink = styled(BaseLink)``

export const GoBackIcon = styled(BackIcon)`
  grid-area: icon;
`
