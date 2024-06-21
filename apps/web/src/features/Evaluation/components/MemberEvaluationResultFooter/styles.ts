import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Name = styled.span`
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`
export const Myself = styled.span`
  padding: 0 4px;
  ${(props) => props.theme.fonts[10]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray600};
  background-color: ${(props) => props.theme.colors.neutralGray100};
`
