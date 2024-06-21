import styled from 'styled-components'

export const Item = styled.li`
  padding: 16px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.neutralGray100};
  border-radius: 8px;
  box-shadow: 0 18px 30px 0 rgba(161, 176, 203, 0.14);
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Contents = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
`

export const Right = styled.div`
  display: flex;
  align-items: center;
`
