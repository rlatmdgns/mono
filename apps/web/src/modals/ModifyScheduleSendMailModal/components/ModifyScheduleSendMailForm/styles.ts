import styled from 'styled-components'

export const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 27px;
`

export const MailWrap = styled.div<{ $isActive?: boolean }>`
  display: flex;
  gap: 6px;
  width: 100%;
  padding: 12px;
  text-align: left;
  border: 1px solid
    ${(props) => (props.$isActive ? props.theme.colors.blue500 : props.theme.colors.neutralGray400)};
  border-radius: 6px;
  opacity: ${(props) => !props.$isActive && 0.6};
  transition: all 0.3s;
  cursor: pointer;
`

export const MailTypeHeader = styled.p<{ $isActive?: boolean }>`
  position: relative;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  ${(props) => props.theme.fonts[14]};
  height: 16px;
  line-height: 16px;
  margin-bottom: 4px;
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const MailSendTitle = styled(MailTypeHeader)`
  color: ${(props) => props.$isActive && props.theme.colors.blue500};
`

export const MailNotSendTitle = styled(MailTypeHeader)`
  color: ${(props) => props.$isActive && props.theme.colors.red500};
`

export const MailTextBox = styled.div`
  width: 320px;
`

export const MailTypeDesc = styled.p`
  color: ${(props) => props.theme.colors.neutralGray500};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  ${(props) => props.theme.fonts[12]};
`
