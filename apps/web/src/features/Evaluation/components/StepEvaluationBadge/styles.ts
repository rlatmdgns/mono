import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 3px;
  padding: 0 8px;
  background-color: ${(props) => props.theme.colors.blue50};
  border: 1px solid ${(props) => props.theme.colors.neutralGray100};
  border-radius: 4px;
`

export const Status = styled.span<{ $status: string }>`
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) =>
    props.$status === '평가 마감'
      ? props.theme.colors.blue500
      : props.$status === '평가 중'
        ? props.theme.colors.neutralGray600
        : props.theme.colors.neutralGray400};
`

export const ScoreBox = styled.div`
  display: flex;
  align-content: center;
`

export const TotalScore = styled.span`
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.blue500};
`
export const PercentageBox = styled.div`
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray400};
  margin-left: 2px;
`

export const PercentageScore = styled.span`
  color: ${(props) => props.theme.colors.neutralGray500};
`
