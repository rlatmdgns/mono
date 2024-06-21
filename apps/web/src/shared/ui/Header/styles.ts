import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 40px;
`
export const Title = styled.h3`
  ${(props) => props.theme.title[18]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
`
export const Description = styled.p`
  margin: 8px 0 0 0;
  ${(props) => props.theme.title[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray400};
`
export const Right = styled.div``
