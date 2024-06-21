import styled from 'styled-components'

export const InterviewScheduleContainer = styled.div``
export const InterviewSchedulesTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 6px;
  ${({ theme }) => theme.title[18]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.neutralGray800};

  svg {
    vertical-align: middle;
  }
`

export const Text = styled.span``

export const NoInterviewSchedules = styled.div`
  display: flex;
  min-width: 265px;
  width: 265px;
  height: 120px;
  align-items: center;
  padding: 30px 60px;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.neutralGray100};
  box-shadow: 0 2px 30px 0 rgba(194, 205, 225, 0.18);
  background: ${(props) => props.theme.colors.white};
`

export const NoInterviewTitle = styled.p`
  ${(props) => props.theme.title[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray500};
`

export const InterviewSchedules = styled.ul`
  display: flex;
  gap: 12px;
  overflow: auto;
  padding-top: 30px;
  margin-top: -10px;
  padding-bottom: 12px;
`
