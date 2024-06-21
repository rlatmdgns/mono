import styled, { css } from 'styled-components'
import Link from 'next/link'

export const Item = styled.li<{ $disabled: boolean }>`
  position: relative;

  ${(props) =>
    props.$disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
  & + & {
    margin-top: 4px;
  }
`

export const StyledLink = styled(Link)<{
  $isActive: boolean
  $disabled: boolean
  $color?: 'neutralGray500' | 'neutralGray800'
}>`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;

  border-radius: 6px;
  padding: 5px 8px;
  height: 32px;

  &:hover {
    background: ${(props) => props.theme.colors.blue100};
  }

  &:active {
    color: ${(props) => props.theme.colors.blue600};
    font-weight: ${(props) => props.theme.fontWeights.medium};

    i {
      filter: invert(44%) sepia(88%) saturate(1380%) hue-rotate(198deg) brightness(101%)
        contrast(101%);
    }
  }

  ${(props) =>
    props.$disabled &&
    css`
      pointer-events: none;
    `}

  ${(props) => props.theme.title[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) =>
    props.$color === 'neutralGray800'
      ? props.theme.colors.neutralGray800
      : props.theme.colors.neutralGray500};

  ${(props) =>
    props.$isActive &&
    css`
      background: ${(props) => props.theme.colors.blue100};
      color: ${(props) => props.theme.colors.blue600};
      font-weight: ${(props) => props.theme.fontWeights.medium};
    `}
`
