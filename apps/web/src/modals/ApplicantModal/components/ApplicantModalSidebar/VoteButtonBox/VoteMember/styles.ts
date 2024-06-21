import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
`

export const Name = styled.span`
  flex-grow: 1;
  max-width: 64px;
  color: ${(props) => props.theme.colors.neutralGray700};
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin-left: 4px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`
