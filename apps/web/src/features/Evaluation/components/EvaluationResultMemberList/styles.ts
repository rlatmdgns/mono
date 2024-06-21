import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;
  min-height: 600px;
  background-color: ${(props) => props.theme.colors.white};
`

export const Members = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${(props) => props.theme.colors.white};
`
