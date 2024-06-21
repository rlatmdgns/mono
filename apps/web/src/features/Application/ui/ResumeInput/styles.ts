import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  > button {
    margin-top: 20px;
  }
`

export const Inner = styled.div<{ $isSelected: boolean }>`
  padding: 24px;
  width: 600px;

  ${(props) =>
    props.$isSelected &&
    css`
      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 140%;
        transform: translate(0, -50%);
        border: 1px solid ${props.theme.colors.neutralGray800};
        box-shadow: 0 4px 20px 0 #a1b0cb66;
      }
    `}
`
