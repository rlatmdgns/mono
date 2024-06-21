import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${(props) => props.theme.colors.white};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  height: fit-content;
  background-color: ${(props) => props.theme.colors.white};
`

export const TextBox = styled.dl`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  margin: 0;
  text-align: center;
`

export const Title = styled.dt`
  ${(props) => props.theme.fonts[18]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Desc = styled.dd`
  margin: 0;
  ${(props) => props.theme.fonts[16]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray400};
`
