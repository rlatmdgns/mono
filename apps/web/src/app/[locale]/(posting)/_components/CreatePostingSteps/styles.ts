import styled from 'styled-components'

export const List = styled.ol`
  display: flex;
  align-items: center;
  gap: 12px;
`
export const ListItem = styled.li<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.$isActive ? props.theme.colors.blue500 : props.theme.colors.neutralGray300};
  font-weight: ${(props) => props.theme.fontWeights.medium};

  &:not(:last-child)::after {
    flex: 0 0 140px;
    width: 140px;
    content: '';
    border-bottom: 8px dotted;
    border-color: ${(props) =>
      props.$isActive ? props.theme.colors.blue500 : props.theme.colors.neutralGray300};
    transform: scale(0.25);
    margin: 0 -50px 0 -42px;
  }
`

export const Order = styled.em<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 16px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  font-style: normal;
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fonts[10]}
  background: ${(props) =>
    props.$isActive ? props.theme.colors.blue500 : props.theme.colors.neutralGray300};
  margin-right: 8px;
`
