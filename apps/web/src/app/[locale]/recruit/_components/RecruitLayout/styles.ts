import styled from 'styled-components'

export const Wrapper = styled.div`
  overflow: auto;
  max-height: 100vh;
`

export const Container = styled.section`
  ${(props) => `${props.theme.breakpoints.mobile} and (min-width: 1200px)`} {
    max-width: 1128px;
    margin: 84px auto 164px;
  }

  display: block;
  justify-content: space-between;
  position: relative;
`
