import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.white};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 331px;
  height: fit-content;
  background-color: ${(props) => props.theme.colors.white};
`

export const Title = styled.h1`
  margin-top: 22px;
  ${(props) => props.theme.fonts[28]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Desc = styled.p`
  margin: 12px 0 0 0;
  text-align: center;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray800};
`
