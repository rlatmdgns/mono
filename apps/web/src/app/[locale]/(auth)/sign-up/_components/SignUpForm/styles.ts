import styled from 'styled-components'

export const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  padding: 154px 0 169px 0;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.white};
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Container = styled.div`
  height: fit-content;
`
