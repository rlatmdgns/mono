import styled, { css } from 'styled-components'

export const Wrapper = styled.div<{ $isSelected?: boolean }>`
  ${(props) =>
    props.$isSelected &&
    css`
      border: 1px solid ${props.theme.colors.neutralGray800};
      box-shadow: 0 4px 20px 0 #a1b0cb66;
    `}
`

export const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  > div {
    flex: 0 0 100%;
  }
`
