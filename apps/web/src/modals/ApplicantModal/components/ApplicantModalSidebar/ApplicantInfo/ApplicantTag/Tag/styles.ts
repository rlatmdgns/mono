import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  gap: 4px;
  background-color: ${(props) => props.theme.colors.neutralGray100};
  border-radius: 4px;
  color: ${(props) => props.theme.colors.neutralGray600};
  ${(props) => props.theme.fonts[12]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  padding: 8px;
`

export const Text = styled.span`
  max-width: 182px;
  color: ${(props) => props.theme.colors.neutralGray600};
  ${(props) => props.theme.fonts[12]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
