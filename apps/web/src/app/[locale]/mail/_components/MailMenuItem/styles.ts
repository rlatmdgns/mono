import styled from 'styled-components'
import Link from 'next/link'

export const Item = styled.li<{ $isActive?: boolean }>`
  width: 100%;
  min-width: 214px;
  border-radius: 6px;
  ${(props) => props.theme.title[14]};
  color: ${(props) => props.theme.colors.neutralGray800};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  opacity: ${(props) => (props.$isActive ? 1 : 0.3)};
  background: ${(props) => (props.$isActive ? props.theme.colors.neutralGray100 : 'transparent')};

  &:hover {
    background: ${(props) => props.theme.colors.neutralGray100};
    opacity: 1;
  }
`
export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
  height: 36px;
`
export const Title = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`
export const Count = styled.span``
