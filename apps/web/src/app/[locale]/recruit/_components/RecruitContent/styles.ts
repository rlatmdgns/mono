import styled from 'styled-components'

export const Wrapper = styled.div`
  overflow: auto;
  max-height: 100vh;
`

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 1180px;
  margin: 100px auto 176px auto;
  padding: 0 40px;
  position: relative;

  ${(props) => `${props.theme.breakpoints.mobile} and (min-width: 1200px)`} {
    display: block;
    margin: 0 auto;
  }
`
