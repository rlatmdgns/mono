import styled from 'styled-components'

export const Form = styled.form``
export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 0;
  max-height: calc(80vh - 100px);
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

export const DatepickerBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`
