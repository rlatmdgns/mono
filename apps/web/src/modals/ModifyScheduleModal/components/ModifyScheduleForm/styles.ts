import styled from 'styled-components'
import { Input } from '@/shared/ui/TextInput/styles'

export const Form = styled.form`
  .react-datepicker__input-container {
    input {
      padding: 12px;
      width: 100%;
      height: 40px;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: -0.01em;
      font-weight: 500;
      color: #2b3c56;
      background-color: #ffffff;
      border-radius: 6px;

      &::placeholder {
        color: ${(props) => props.theme.colors.neutralGray400};
      }
    }

    .react-datepicker-popper {
      z-index: 2;

      .react-datepicker {
        border: 0;
      }
    }
  }
`
export const Fieldset = styled.fieldset`
  max-height: calc(80vh - 100px);
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 0;
  padding: 16px;
  overflow-y: auto;
`
export const Column = styled.div`
  display: flex;
  gap: 24px;
`
export const Label = styled.label<{ $isNotRequired?: boolean }>`
  display: flex;
  gap: 4px;
  min-width: 52px;
  padding: 10px 0;
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray700};

  &:after {
    content: '*';
    display: ${(props) => (!props.$isNotRequired ? 'inline-block' : 'none')};
    color: ${(props) => props.theme.colors.red500};
  }
`
export const Item = styled.div`
  flex: 1;
`
export const DisabledItem = styled(Input)`
  display: flex;
  width: 100%;
  gap: 8px;
  padding: 3px 8px 3px 12px;
  align-items: center;
  background: ${(props) => props.theme.colors.neutralGray50};
`

export const Applicant = styled.div`
  padding: 6px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.neutralGray100};
`

export const DatepickerBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`
