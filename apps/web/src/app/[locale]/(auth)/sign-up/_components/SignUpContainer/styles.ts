import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.white};
`

export const HomeLinkBox = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`

export const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
`
