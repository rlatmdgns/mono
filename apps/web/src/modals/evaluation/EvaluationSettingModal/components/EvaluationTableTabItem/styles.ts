import styled from 'styled-components'

interface WrapperProps {
  $isSelected: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  width: 200px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
  opacity: ${(props) => (props.$isSelected ? 1 : 0.3)};

  &:hover {
    opacity: 1;
  }
`

export const Text = styled.span`
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
  padding-left: 16px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const MenuBox = styled.div`
  height: 16px;
`
