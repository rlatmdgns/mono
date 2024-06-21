import styled from 'styled-components'

export const Item = styled.div<{ $isActive: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr 40px;
  align-items: center;

  color: ${(props) => props.theme.colors.neutralGray800};
  height: 48px;
  padding: 0 8px;
  ${(props) => props.theme.title[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};

  cursor: pointer;
  background-color: ${(props) =>
    props.$isActive ? props.theme.colors.neutralGray100 : 'transparent'};

  &:hover {
    background-color: ${(props) => props.theme.colors.neutralGray50};
  }
`
