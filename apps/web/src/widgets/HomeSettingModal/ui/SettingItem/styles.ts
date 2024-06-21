import styled from 'styled-components'

export const Item = styled.li`
  width: 100%;
  flex-basis: 100%;
  cursor: pointer;

  a,
  button {
    display: flex;
    width: 100%;
    height: 44px;
    padding: 8px;
    gap: 8px;
    justify-content: left;
    align-items: center;
    background: none;
    color: ${(props) => props.theme.colors.neutralGray800};
    ${(props) => props.theme.fonts[14]};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    border-radius: 6px;

    &:not(:disabled, :active):hover {
      background-color: ${(props) => props.theme.colors.neutralGray100};
    }

    span {
      flex: 1;
      font-weight: ${(props) => props.theme.fontWeights.medium};
    }

    svg path {
      fill: ${(props) => props.theme.colors.neutralGray500};
    }
  }
`

export const Button = styled.button``
