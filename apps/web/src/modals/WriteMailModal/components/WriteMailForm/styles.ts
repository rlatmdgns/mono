import styled from 'styled-components'
import { getCurrentLocale } from '@/shared/lib/utils'

export const Form = styled.form`
  width: 650px;
  height: 600px;
  overflow: auto;
  padding: 12px 24px;
`

export const Item = styled.div``
export const Column = styled.div`
  display: flex;
  gap: 12px;

  ${Item} {
    flex: 1;
  }

  & + & {
    margin-top: 16px;
  }
`
export const Label = styled.label<{ $isRequired?: boolean }>`
  display: flex;
  width: ${() => (getCurrentLocale() === 'ko' ? '70px' : '120px')};
  color: ${({ theme }) => theme.colors.neutralGray800};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  ${(props) => props.theme.title[14]};
  line-height: 40px;

  &:after {
    display: ${(props) => (props.$isRequired ? 'inline-block' : 'none')};
    margin: 2px 0 0 4px;
    content: '*';
    color: ${(props) => props.theme.colors.red500};
    vertical-align: top;
  }
`

export const CCButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.colors.neutralGray800};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  ${(props) => props.theme.title[16]};
`
export const Fieldset = styled.fieldset`
  width: 100%;
  border: none;
  padding: 0;
  margin: 0;
`
export const EditorBox = styled.div`
  margin-top: 24px;

  .ql-container.ql-snow .ql-editor {
    min-height: 200px;
    max-height: 400px;
    overflow: auto;
  }
`
export const TemplateSave = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 20px;
  ${(props) => props.theme.title[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray600};
`
