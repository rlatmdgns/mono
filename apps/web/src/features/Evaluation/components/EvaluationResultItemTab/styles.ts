import styled from 'styled-components'

export const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.neutralGray200};
  border-radius: 6px;
  overflow: hidden;
`

export const Item = styled.li<{ $isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  flex: 1 1 10%;
  background-color: ${(props) =>
    props.$isSelected ? props.theme.colors.neutralGray50 : props.theme.colors.white};
  color: ${(props) =>
    props.$isSelected ? props.theme.colors.neutralGray800 : props.theme.colors.neutralGray400};
  ${(props) => props.theme.title[12]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};

  &:not(:last-of-type) {
    border-right: 1px solid ${(props) => props.theme.colors.neutralGray200};
  }
`
