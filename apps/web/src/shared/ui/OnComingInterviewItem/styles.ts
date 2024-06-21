import styled from 'styled-components'

export const InterviewSchedule = styled.li<{ $postingColor: string }>`
  min-width: 284px;
  width: 284px;
  min-height: 120px;
  padding: 16px;
  background: ${(props) => props.theme.colors.white};
  position: relative;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.neutralGray100};
  overflow: hidden;
  box-shadow: 0 2px 30px 0 rgba(194, 205, 225, 0.18);

  &:before {
    content: '';
    position: absolute;
    top: 16px;
    right: 16px;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    background-color: ${(props) => props.$postingColor};
  }
`

export const InterviewScheduleTitle = styled.h3`
  width: 94%;
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${(props) => props.theme.title[14]};
  color: ${(props) => props.theme.colors.neutralGray800};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`

export const InterviewScheduleTime = styled.p`
  display: flex;
  gap: 6px;
  margin: 8px 0;

  svg {
    flex-shrink: 0;
  }
`

export const Text = styled.p`
  ${(props) => props.theme.title[14]};
  color: ${(props) => props.theme.colors.blue500};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const InterviewScheduleApplicants = styled(InterviewScheduleTime)``
