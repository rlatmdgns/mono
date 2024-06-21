import styled, { css } from 'styled-components'

interface WrapperProps {
  $isFold?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  height: 64px;
  display: flex;
  justify-content: space-between;
  gap: 6px;
  padding: 4px 10px 20px;

  > div {
    min-width: 130px;
  }

  > button {
    flex-shrink: 0;
  }

  ${(props) =>
    props.$isFold &&
    css`
      height: initial;
      align-items: center;
      flex-direction: column;
      gap: 12px;
      padding: 0;

      > div {
        min-width: initial;
      }
    `}
`
