import styled, { css } from 'styled-components'
import { getTypeStyle } from '@/shared/lib/utils'

interface TagStyleProps {
  $type?: 'standard' | 'primary' | 'warning' | 'gray'
  $isDisabled?: boolean
  $size?: 'md' | 'lg'
}

export const Wrapper = styled.em<TagStyleProps>`
  display: inline-block;
  padding: 8px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  font-style: normal;
  border-radius: 4px;

  ${(props) => props.theme.title[12]};
  ${(props) => getTypeStyle(props.$type)};
  opacity: ${(props) => (props.$isDisabled ? 0.3 : 1)};

  ${(props) =>
    props.$size === 'md' &&
    css`
      padding: 3px 6px 1px;
      font-weight: ${(props) => props.theme.fontWeights.medium};
      ${(props) => props.theme.title[10]};
    `};
`
