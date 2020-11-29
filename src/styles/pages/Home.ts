import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'
import { lighten } from 'polished'
export const Container = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const GitHubForm = styled.form`
  height: 40%;
  width: 50%;
  border-radius: ${props => props.theme.fonts.borderRadius};
  display: grid;
  grid-template-rows: auto 30%;
  grid-row-gap: 2%;
  grid-auto-columns: auto;
  justify-content: center;
  align-content: center;

  @media (max-width: 500px) {
    width: 80%;
    height: 50%;
    grid-template-rows: auto 20%;
  }
`
export const GitHubFormTitle = styled.h1`
  font-size: 3.5rem;
  color: ${props => props.theme.colors.secondary};
  @supports (color: hsl(0, 0%, 100%)) {
    color: hsl(0, 0%, 100%);
  }
  text-align: center;
  @media (max-width: 800px) {
    font-size: 2rem;
  }
`
export const GithubFormLabel = styled.label`
  display: grid;
  grid-template-columns: minmax(85%, 90%) minmax(10%, 15%);
  grid-template-areas: 'input icon';
  grid-auto-rows: 100%;
  background: #ffffff;
  border-radius: ${props => props.theme.fonts.borderRadius};
  padding: 0 0 0 ${props => props.theme.fonts.inputPadding};

  @media (max-width: 800px) {
    grid-template-columns: minmax(80%, 85%) minmax(15%, 20%);
  }
`

export const GitHubFormInputButton = styled.button`
  height: 100%;
  width: 100%;
  border: none;
  background: none;
  cursor: pointer;
`

export const GithubFormInputIcon = styled(SearchIcon)`
  height: 90% !important;
  width: 90%;
  color: ${props => props.theme.colors.primary};

  &:hover {
    transition: all 0.25s ease-in-out;
    color: ${props => lighten(0.2, props.theme.colors.primary)};
    transform: scale(1.3);
  }

  @media (max-width: 800px) {
    width: 100%;
    height: 100%;

    &:hover {
      transform: unset;
    }
  }
`

export const GitHubFormInput = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  font-size: 1.7rem;
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
  font-family: 'Helvetica Neue', sans-serif, 14px;
  line-height: 24px;
  text-justify: inter-word;
  text-align: left;
  border-radius: ${props => props.theme.fonts.borderRadius};

  &::placeholder {
    filter: opacity(50%);
  }

  @media (max-width: 800px) {
    font-size: 1.2rem;
  }
`
