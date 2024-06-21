import styled from 'styled-components'

export const Item = styled.li`
  cursor: pointer;

  > div > div {
    height: 40px;
    padding: 12px;

    &::before {
      margin-right: 12px;
    }
  }

  > div > div > span {
    ${(props) => props.theme.fonts[14]};
    font-weight: ${(props) => props.theme.fontWeights.medium};
  }
`
