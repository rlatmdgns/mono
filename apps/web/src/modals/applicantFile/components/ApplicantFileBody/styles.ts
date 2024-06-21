import styled, { css } from 'styled-components'

interface TextProps {
  $isEssential?: boolean
}

export const Wrapper = styled.div`
  padding: 20px 16px;
`

export const InputBox = styled.div`
  &:first-of-type {
    margin-bottom: 20px;
  }
`

export const Text = styled.div<TextProps>`
  color: ${(props) => props.theme.colors.neutralGray800};
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  margin-bottom: 6px;

  ${(props) =>
    props.$isEssential &&
    css`
      &:after {
        content: '*';
        color: ${(props) => props.theme.colors.red500};
        margin-left: 4px;
      }
    `}
`
