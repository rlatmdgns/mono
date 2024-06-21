import styled from 'styled-components'

export const Content = styled.dl`
  text-align: center;
  width: 520px;
  margin: 0 0 20px 0;
`
export const Title = styled.dt`
  ${(props) => props.theme.fonts[28]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`
export const Description = styled.dd`
  margin: 20px 0 0 0;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`
