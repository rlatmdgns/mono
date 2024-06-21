import styled, { css } from 'styled-components'

export const Item = styled.li<{
  $isAdditionalArea: boolean
  $isEvaluator: boolean
}>`
  position: relative;
  min-width: 282px;
  max-width: 282px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.neutralGray50};

  ${(props) =>
    props.$isAdditionalArea &&
    !props.$isEvaluator &&
    css`
      margin-right: 32px;
    `}
`
