import styled from 'styled-components'
import Link from 'next/link'

export const Aside = styled.aside`
  width: 208px;
  flex: 0 0 208px;
  height: calc(100vh - 56px);
  padding: 20px;
  border-right: 1px solid ${(props) => props.theme.colors.neutralGray200};
`
export const MenuList = styled.ul``
export const MenuItem = styled.li`
  & + & {
    margin-top: 24px;
  }
`
export const Title = styled.div`
  padding: 10px;
  ${(props) => props.theme.title[12]};
  color: ${(props) => props.theme.colors.neutralGray800};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  opacity: 0.4;
`
export const MenuSubList = styled.ul``
export const MenuSubItem = styled.li`
  ${Title} {
    opacity: 1;
    padding: 0;
  }
`
export const StyledLink = styled(Link)<{ $isActive: boolean }>`
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  background: ${(props) =>
    props.$isActive ? props.theme.colors.neutralGray100 : props.theme.colors.white};

  &:hover {
    background: ${(props) => props.theme.colors.neutralGray50};
  }
`
