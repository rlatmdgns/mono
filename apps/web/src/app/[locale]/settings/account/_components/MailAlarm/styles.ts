import styled from 'styled-components'

export const MailAlarmWrap = styled.div`
  margin-bottom: 30px;
`

export const MailAlarmList = styled.ul`
  margin-top: 8px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.neutralGray200};
`

export const MailAlarmItem = styled.li`
  padding: 16px 20px;
  position: relative;

  &:nth-child(n + 2) {
    border-top: 1px solid ${(props) => props.theme.colors.neutralGray200};
  }
`

export const ToggleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ToggleText = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  ${(props) => props.theme.fonts[14]};
  color: ${(props) => props.theme.colors.neutralGray800};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`

export const IconBox = styled.div`
  width: 40px;
  height: 40px;
  padding: 12px;
  background-color: ${(props) => props.theme.colors.blue100};
  border-radius: 8px;
`
