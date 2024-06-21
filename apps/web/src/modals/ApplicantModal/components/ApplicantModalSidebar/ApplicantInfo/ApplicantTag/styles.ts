import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0 10px;
`

export const Title = styled.div`
  ${(props) => props.theme.fonts[11]};
  color: ${(props) => props.theme.colors.neutralGray400};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin-bottom: 4px;
`
