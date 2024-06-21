import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${(props) => props.theme.colors.neutralGray500};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  ${(props) => props.theme.title[14]};

  svg {
    fill: ${(props) => props.theme.colors.neutralGray500};
  }
`
