import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const Icon = styled.img``

export const Box = styled.div`
  display: flex;
  align-items: center;
`

export const Text = styled.span<{ $isClosed?: boolean }>`
  color: ${(props) =>
    props.$isClosed ? props.theme.colors.neutralGray400 : props.theme.colors.blue500};
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`
