import styled from 'styled-components'

export const Item = styled.li<{ $isIncluded?: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px;
  border-radius: 6px;
  background: ${(props) =>
    props.$isIncluded ? props.theme.colors.blue100 : props.theme.colors.neutralGray100};
  color: ${(props) =>
    props.$isIncluded ? props.theme.colors.blue500 : props.theme.colors.neutralGray800};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  ${(props) => props.theme.title[11]};
  cursor: pointer;
`

export const Input = styled.input`
  border: 0;
  background: transparent;
`
