import styled from 'styled-components'

export const Wrapper = styled.li`
  display: grid;
  grid-template-columns:
    minmax(150px, 1fr) minmax(77px, 180px) minmax(100px, 230px)
    minmax(100px, 260px) minmax(100px, 260px) 60px;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};
`

export const Title = styled.span``

export const Count = styled.span``

export const Member = styled.span``

export const Date = styled.span``

export const AvatarWrap = styled.div``
