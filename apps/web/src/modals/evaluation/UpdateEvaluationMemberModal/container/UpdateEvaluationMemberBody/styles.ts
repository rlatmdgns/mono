import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0 16px;
`

export const AllCheckBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
  margin-top: 24px;
`
