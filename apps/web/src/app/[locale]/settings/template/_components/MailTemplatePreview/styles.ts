import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 32px 40px;
`

export const Subject = styled.p`
  ${(props) => props.theme.fonts[20]}
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Content = styled.p`
  margin-top: 34px;
  ${(props) => props.theme.fonts[14]}
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray800};

  img {
    max-width: 100%;
  }
`
