import styled from 'styled-components'

export const RecruitSummary = styled.div<{ $isTemplate?: boolean }>`
  padding: 28px;
  background: ${(props) => props.theme.colors.neutralGray50};
  border-radius: 8px;

  > div:nth-child(n + 2) {
    margin-top: 12px;
  }

  ${(props) => `${props.theme.breakpoints.mobile} and  (max-width: 1200px)`} {
    margin: 24px 0 22px;
    padding: 16px 28px;
  }

  ${(props) =>
    props.$isTemplate &&
    `
    max-width:520px!important;
    margin:24px 0 22px;
    position:static!important;
    box-sizing:border-box;
  `}
`
export const Summary = styled.div``

export const SummaryTitle = styled.p`
  margin-bottom: 4px;
  ${(props) => props.theme.fonts[12]};
  color: ${(props) => props.theme.colors.neutralGray400};
`
export const SummaryInfo = styled.p`
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray800};
`
