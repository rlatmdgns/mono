import styled from 'styled-components'

export const Header = styled.div`
  text-align: center;
`

export const ImageWrap = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 12px;
  background: ${(props) => props.theme.colors.blue100};
  position: relative;
  border-radius: 50%;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const Title = styled.p`
  margin-bottom: 8px;
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Desc = styled.p`
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray500};
`
