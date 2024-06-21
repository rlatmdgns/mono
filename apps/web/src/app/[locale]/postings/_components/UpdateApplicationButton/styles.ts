import styled from 'styled-components'

export const Title = styled.div`
  color: ${(props) => props.theme.colors.neutralGray500};
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  padding: 8px 10px;
`

export const ButtonBox = styled.div`
  a {
    justify-content: flex-start;
    padding: 8px;

    span {
      font-weight: ${(props) => props.theme.fontWeights.medium};
    }
  }
`
