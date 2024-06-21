import styled from 'styled-components'

interface TabWrapperProps {
  $isApplication?: boolean
  $isActive: boolean
  $length?: number
}

export const Wrapper = styled.div<TabWrapperProps>`
  position: relative;
  max-width: ${(props) => props.$length && `calc((100% - 150px) / ${props.$length})`};
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.$isActive && 'space-between'};
  gap: 8px;

  flex-shrink: ${(props) => props.$isApplication && 0};
  background-color: ${(props) => props.theme.colors.white};
  border-bottom: 1px solid
    ${(props) => (props.$isActive ? props.theme.colors.neutralGray800 : 'transparent')};
  padding: 0 24px;
  opacity: ${(props) => (props.$isActive ? 1 : 0.3)};
  margin-bottom: -1px;

  &:hover {
    opacity: ${(props) => !props.$isActive && 0.7};
  }
`

export const Title = styled.span`
  flex-shrink: 1;
  color: ${(props) => props.theme.colors.neutralGray800};
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  cursor: default;
`
