import styled, { css } from 'styled-components'

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.span`
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const ButtonBox = styled.div<{ $disabled: boolean }>`
  ${(props) =>
    props.$disabled &&
    css`
      button {
        opacity: 0.3;
        box-shadow: none;
        cursor: not-allowed;
        pointer-events: none;
      }
    `}
`
