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

export const Text = styled.span`
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`
