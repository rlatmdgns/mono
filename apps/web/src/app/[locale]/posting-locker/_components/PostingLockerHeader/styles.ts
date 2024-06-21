import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0 40px;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns:
    minmax(320px, 1fr) minmax(77px, 180px) minmax(100px, 230px)
    minmax(100px, 260px) minmax(100px, 260px) 60px;
  align-items: center;
  justify-content: left;
  height: 48px;
  padding: 0 8px;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray200};
`

export const NavItem = styled.div`
  ${(props) => props.theme.title[14]};
  color: ${(props) => props.theme.colors.neutralGray400};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`
