import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 24px 16px;
  border: 1px solid ${(props) => props.theme.colors.neutralGray100};
  border-radius: 4px;
  background: ${(props) => props.theme.colors.neutralGray50};
`
export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > button {
    ${(props) => props.theme.fonts[14]};
    font-weight: ${(props) => props.theme.fontWeights.medium};
  }
`
