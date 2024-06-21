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

export const TitleWrapper = styled.p`
  display: flex;
  gap: 4px;
  align-items: center;
`

export const Title = styled.span`
  display: flex;
  gap: 4px;
  align-items: center;
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
  white-space: pre-wrap;
  word-break: break-word;
`

export const RequiredMark = styled.span`
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.red500};
`
