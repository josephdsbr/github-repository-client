import styled from 'styled-components'

export const Container = styled.a`
  height: 100%;
  width: 100%;
  cursor: pointer;
  background: #ffff;
  display: grid;
  grid-template-columns: minmax(68%, 90%) minmax(10%, 30%);
  grid-column-gap: 2%;
  grid-template-rows: 30% 65%;
  grid-row-gap: 5%;
  color: inherit;
  text-decoration: unset;
  grid-template-areas:
    'title avatar'
    'description avatar';
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.fonts.borderRadius};
  padding: 2%;
`

export const RepositoryTitle = styled.h3`
  grid-area: title;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: 900;
`

export const RepositoryDescription = styled.p`
  grid-area: description;
  text-overflow: ellipsis;
  max-height: 100%;
  overflow: hidden;
`

export const RepositoryOwnerAvatar = styled.img`
  grid-area: avatar;
  max-height: 80%;
  max-width: 80%;
  width: inherit;
  height: inherit;
  border-radius: 50%;
  justify-self: center;
`
