import styled from 'styled-components'

interface DropdownProps {
  $isOpen: boolean
}

export const Label = styled.label<DropdownProps>`
  display: ${(props) => !props.$isOpen && 'none'};
  color: ${(props) => props.theme.colors.blue500};
  ${(props) => props.theme.fonts[12]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  margin: 8px 0;
`

export const ButtonBox = styled.div<DropdownProps>`
  > div {
    background-color: ${(props) => props.$isOpen && props.theme.colors.blue100};

    &,
    > span {
      color: ${(props) => props.$isOpen && props.theme.colors.blue500};
    }
  }
`
