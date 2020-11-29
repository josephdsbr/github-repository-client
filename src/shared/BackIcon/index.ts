import styled from 'styled-components'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const BackIcon = styled(ArrowBackIcon)`
  cursor: pointer;
  &:hover {
    transition: all 0.25s ease-in-out;
    color: ${props => props.theme.colors.primary};
    transform: scale(1.2);
  }
`

export default BackIcon
