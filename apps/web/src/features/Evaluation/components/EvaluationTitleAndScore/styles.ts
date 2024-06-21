import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.span`
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Scores = styled.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
`

export const Score = styled(Title)`
  color: ${(props) => props.theme.colors.blue500};
`

export const TotalScore = styled(Title)`
  color: ${(props) => props.theme.colors.neutralGray400};
`
