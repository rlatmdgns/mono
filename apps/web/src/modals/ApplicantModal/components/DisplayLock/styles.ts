import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 4px;
  background-color: ${(props) => props.theme.colors.neutralGray900};
  border-radius: 10px 10px 0 0;
`

export const Title = styled.span`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fonts[14]}
  font-weight: ${(props) => props.theme.fontWeights.medium};
`
