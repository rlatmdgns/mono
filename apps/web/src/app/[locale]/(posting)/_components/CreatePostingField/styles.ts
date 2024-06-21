import styled, { css } from 'styled-components'

export const Field = styled.fieldset`
  border: 0;
  width: 640px;
  margin: 0 auto;
`
export const Legend = styled.legend`
  font-size: 0;
`
export const TitleItem = styled.div<{ $isTemplate?: boolean }>`
  ${(props) =>
    props.$isTemplate
      ? css``
      : css`
          display: grid;
          grid-template-columns: minmax(240px, 2.5fr) 5fr;
          gap: 12px;
        `};
`
export const Column = styled.div`
  & + & {
    margin-top: 32px;
  }
`
export const Text = styled.div<{ $isRequired?: boolean }>`
  margin-bottom: 12px;
  ${(props) => props.theme.title[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.neutralGray800};

  &:after {
    display: ${(props) => (props.$isRequired ? 'inline-block' : 'none')};
    content: '*';
    vertical-align: top;
    margin: 2px 0 0 4px;
    color: ${(props) => props.theme.colors.red500};
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  height: 200px;
  border: 1px solid ${({ theme }) => theme.colors.neutralGray200};
  color: ${({ theme }) => theme.colors.neutralGray600};
  border-radius: 8px;
  padding: 12px 16px;
  outline: none;
  font-size: 14px;
  line-height: 21px;

  &::placeholder {
    ${(props) => props.theme.fonts[14]};
    color: ${({ theme }) => theme.colors.neutralGray400};
    font-weight: ${(props) => props.theme.fontWeights.medium};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.blue500};
    box-shadow: 0 2px 10px 0 rgba(70, 142, 255, 0.2);
    outline: none;
  }
`
export const Deadline = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  ${(props) => props.theme.fonts[14]};
  color: ${({ theme }) => theme.colors.neutralGray800};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`

export const DataPickerWrapper = styled.div`
  display: flex;
  gap: 12px;
  width: 492px;
`
export const Template = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px;
  border-radius: 8px;
  ${(props) => props.theme.fonts[14]};
  color: ${({ theme }) => theme.colors.neutralGray800};
  background: ${({ theme }) => theme.colors.neutralGray50};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`
