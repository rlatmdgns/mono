import styled, { keyframes } from 'styled-components'

const move = keyframes`
    from {
        right: 0;
    }
    to {
        top: 40%;
        right: 50px;
    }
`

const opacity = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 100%;
    }
`

export const Wrap = styled.div`
  position: relative;
  height: 100%;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.background};
`

export const EmptyInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const ImageWrap = styled.div`
  position: relative;
  width: 182px;
  height: 140px;
  margin: 0 auto;
`

export const AddBlock = styled.div`
  width: 73px;
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 14px;
  left: 64px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.blue100};
  animation: ${opacity} infinite 2s;
`

export const Cursor = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  width: 20px;
  height: 20px;
  animation: ${move} 2s infinite;
`

export const Text = styled.p`
  margin-top: 30px;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  text-align: center;
  color: ${(props) => props.theme.colors.neutralGray500};
`
export const Br = styled.br``
