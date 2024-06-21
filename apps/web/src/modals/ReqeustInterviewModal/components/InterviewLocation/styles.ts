import { Input } from '@/shared/ui/TextInput/styles'
import styled from 'styled-components'

export const InterviewLocation = styled.div`
  width: 640px;
  margin: 0 auto;
`

export const FormWrap = styled.div`
  margin-top: 24px;
`
export const Title = styled.div`
  display: flex;
  margin-bottom: 10px;
  gap: 4px;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: #374a6a;
`

export const TextArea = styled(Input).attrs({
  as: 'textarea',
})`
  display: block;
  width: 100%;
  height: 100px;
  resize: none;
`

export const OptionLabelWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const OptionLabel = styled.span`
  font-size: 12px;
`

export const Required = styled.span`
  color: #ff5b46;
`
