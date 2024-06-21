import styled from 'styled-components'

export const Wrapper = styled.dl`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  > svg {
    margin-bottom: 16px;
  }
`

export const Title = styled.dt`
  color: ${(props) => props.theme.colors.neutralGray800};
  ${(props) => props.theme.fonts[18]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`

export const Description = styled.dd`
  color: ${(props) => props.theme.colors.neutralGray400};
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin: 8px 0 16px;
`
