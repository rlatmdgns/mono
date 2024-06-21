import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px 0;
  height: 100%;
  background-color: ${(props) => props.theme.colors.white};
`

export const List = styled.ul`
  display: flex;
  height: 100%;
  overflow-y: auto;
  flex-direction: column;
  gap: 12px;
  background-color: ${(props) => props.theme.colors.white};
`
