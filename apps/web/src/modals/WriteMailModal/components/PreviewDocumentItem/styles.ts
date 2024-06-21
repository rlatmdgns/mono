import styled from 'styled-components'

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  padding: 6px 10px;
`

export const Title = styled.p`
  width: 80px;
  color: ${(props) => props.theme.colors.neutralGray800};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const Notice = styled.span`
  color: ${(props) => props.theme.colors.neutralGray500};
`
