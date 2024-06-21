import styled, { css } from 'styled-components'

export const Wrapper = styled.div<{ $isSelected: boolean }>`
  ${(props) =>
    props.$isSelected &&
    css`
      border: 1px solid ${props.theme.colors.neutralGray800};
      box-shadow: 0 4px 20px 0 #a1b0cb66;
    `}
`

export const Inner = styled.div<{ $isSelected?: boolean }>``

export const Title = styled.p`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`
