import styled from 'styled-components'
import Link from 'next/link'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: center;
  border-top: 1px solid ${(props) => props.theme.colors.neutralGray200};
`
export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 12px;
`

export const Item = styled.li``

export const StyledLink = styled(Link)<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: ${(props) =>
    props.$isActive ? props.theme.colors.white : props.theme.colors.neutralGray400};
  border-radius: 4px;
  background: ${(props) =>
    props.$isActive ? props.theme.colors.blue500 : props.theme.colors.white};
  ${(props) => props.theme.title[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};

  &:hover {
    background: ${(props) =>
      props.$isActive ? props.theme.colors.blue500 : props.theme.colors.neutralGray100};
  }
`
