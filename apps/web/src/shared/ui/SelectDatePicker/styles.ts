import styled, { css } from 'styled-components'

export const Wrapper = styled.div<{
  $disabled?: boolean
}>`
  & > div > div > input {
    ${(props) => props.theme.fonts[14]};
    color: ${(props) => props.theme.colors.neutralGray800};
    border: 1px solid ${(props) => props.theme.colors.neutralGray200};

    &::placeholder {
      color: ${(props) => props.theme.colors.neutralGray400};
    }

    &:hover {
      border: 1px solid ${(props) => props.theme.colors.neutralGray400};
    }

    &:focus {
      box-shadow: 0 2px 10px 0 rgba(70, 142, 255, 0.2);
      border: 1px solid ${(props) => props.theme.colors.blue500};
      outline: none;
    }
  }

  ${(props) =>
    props.$disabled &&
    css`
      cursor: not-allowed;

      > div {
        pointer-events: none;

        > div > input {
          background-color: ${props.theme.colors.neutralGray100};
        }
      }
    `}
`

export const DatePickerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`
