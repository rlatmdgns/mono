import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 30px 0;
  width: 560px;
  margin: 0 auto;
`
export const Title = styled.h3`
  padding: 10px 0;
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Content = styled.div`
  margin-top: 12px;
`
export const Item = styled.div`
  & + & {
    margin-top: 12px;
  }
`
export const AppTitle = styled.p`
  padding: 10px 0;
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray700};
`
