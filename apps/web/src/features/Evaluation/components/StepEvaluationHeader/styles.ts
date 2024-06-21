import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.white};
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};
  padding: 0 16px;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Score = styled.span`
  margin-left: 4px;
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.blue500};
`

export const PercentageBox = styled.div`
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray400};
  margin-left: 8px;
`

export const PercentageScore = styled.span`
  color: ${(props) => props.theme.colors.neutralGray500};
`
