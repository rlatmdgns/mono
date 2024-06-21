import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 902px;
  margin: 0 auto;
  padding: 0 20px;
`

export const Container = styled.div`
  display: flex;
  height: calc(100vh - 163px);
  overflow: hidden;
  background: ${(props) => props.theme.colors.neutralGray50};
  border: 1px solid ${(props) => props.theme.colors.neutralGray100};
  border-radius: 6px 6px 0 0;
`

export const Content = styled.div`
  flex: 1;
  padding: 24px 16px;
`
