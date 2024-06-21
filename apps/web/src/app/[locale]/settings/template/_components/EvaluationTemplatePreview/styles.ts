import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.colors.neutralGray100};
  padding: 32px 50px;
  overflow-y: auto;
`

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
`
