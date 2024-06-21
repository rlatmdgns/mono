import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Content = styled.dl`
  text-align: center;
  width: 520px;
  margin: 20px 0;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;
`
export const Title = styled.dt`
  font-size: 28px;
  letter-spacing: -0.28px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`
export const Description = styled.dd`
  margin: 20px 0 0 0;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray600};
`
