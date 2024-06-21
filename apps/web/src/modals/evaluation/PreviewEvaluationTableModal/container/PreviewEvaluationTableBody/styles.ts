import styled from 'styled-components'

export const Wrapper = styled.div`
  max-height: 600px;
  background-color: ${(props) => props.theme.colors.neutralGray100};
  padding: 16px 22px;
  overflow-y: auto;
`

export const Content = styled.div`
  width: 432px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  padding: 16px;
  margin: 0 auto;
`

export const Title = styled.div`
  ${(props) => props.theme.fonts[18]};
  line-height: 24px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
  padding: 24px 16px;
`
