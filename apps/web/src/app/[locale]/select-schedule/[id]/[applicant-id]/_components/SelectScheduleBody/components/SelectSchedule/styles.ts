import styled from 'styled-components'

export const SelectSchedule = styled.li`
  flex: 0 0 calc(33.3% - 8px);
  ${(props) => `${props.theme.breakpoints.mobile} and  (max-width: 670px)`} {
    margin-top: 10px;

    &:first-child {
      margin-top: 0;
    }
  }
`
export const TimeWrap = styled.button.attrs({
  type: 'button',
})<{ $isActive: boolean }>`
  width: 100%;
  font-size: 13px;
  padding: 7px 8px;
  border: 1px solid #2275f8;
  border-radius: 6px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.13px;
  transition: all 0.3s;
  color: ${(props) => (props.$isActive ? props.theme.colors.white : props.theme.colors.blue500)};
  background: ${(props) =>
    props.$isActive ? props.theme.colors.blue500 : props.theme.colors.white};
  white-space: nowrap;
`

export const Time = styled.span``
