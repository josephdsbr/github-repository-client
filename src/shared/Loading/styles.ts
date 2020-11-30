import styled from 'styled-components'

export const Container = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: brightness(45);
  background: transparent;
`

export const Animation = styled.div`
  box-shadow: 0 0 0 7px #42a5f5, inset 0 0 0 1px #42a5f5;
  position: relative;
  height: 50px;
  width: 240px;
  border-radius: 8px;
  overflow: hidden;
  animation: rotate 2s linear infinite;

  &:before {
    display: block;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-color: #42a5f5;
    animation: load 2s linear infinite;
  }

  @keyframes rotate {
    0%,
    42% {
      transform: rotate(0deg);
    }
    48%,
    92% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes load {
    0% {
      width: 0;
    }
    40%,
    50% {
      width: 100%;
    }
    90%,
    100% {
      width: 0;
    }
  }
`
