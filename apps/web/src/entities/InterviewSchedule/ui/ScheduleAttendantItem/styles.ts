import styled from 'styled-components'

export const Wrapper = styled.button`
  display: flex;
  max-width: 332px;
  align-items: center;
  gap: 4px;
  padding: 6px 8px;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.neutralGray100};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray700};
  ${(props) => props.theme.fonts[14]};
`

export const Text = styled.span`
  display: block;
  max-width: 80px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
