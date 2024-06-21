import styled from 'styled-components'

export const Title = styled.em`
  font-style: normal;
  color: ${(props) => props.theme.colors.neturalGray800};

  ${(props) => props.theme.title[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`
export const List = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 12px;
`
