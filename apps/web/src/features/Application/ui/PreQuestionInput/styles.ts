import styled from 'styled-components'

export const Wrapper = styled.div`
  > button {
    margin-top: 20px;
  }
`

export const QuestionBox = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 12px;
`

export const RequiredMark = styled.span`
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.red500};

  &::after {
    content: '*';
  }
`

export const FullCount = styled.span`
  display: flex;
  justify-content: flex-end;
  ${(props) => props.theme.fonts[12]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray400};
  margin-top: 6px;
`

export const Count = styled.span`
  color: ${(props) => props.theme.colors.neutralGray800};
  margin-right: 2px;
`

export const Answer = styled.textarea`
  padding: 12px;
  width: 100%;
  height: 120px;
  ${(props) => props.theme.fonts[12]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray400};
  border: 1px solid ${({ theme }) => theme.colors.neutralGray200};
  color: ${({ theme }) => theme.colors.neutralGray600};
  border-radius: 8px;
  outline: none;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutralGray400};
  }
`

export const TextareaWrapper = styled.div`
  position: relative;
  height: 100%;
  flex-grow: 1;
  z-index: 11;
`

export const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  ${(props) => props.theme.fonts[16]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray400};
  pointer-events: none;
  z-index: 1;
`

export const Textarea = styled.textarea<{
  $hasValue?: boolean
}>`
  position: relative;
  width: 100%;
  border-radius: 0;
  border: none;
  resize: none;
  outline: none;
  color: ${(props) => props.theme.colors.neutralGray800};
  ${(props) => props.theme.fonts[16]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  padding: 0;
`
