import styled from 'styled-components'

export const Content = styled.div`
  padding: 20px;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  pointer-events: none;

  img {
    max-width: 100%;
  }
`
