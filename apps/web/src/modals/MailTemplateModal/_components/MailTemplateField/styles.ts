import styled from 'styled-components'

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
export const Fieldset = styled.fieldset`
  width: 694px;
  border: none;
  padding: 12px 24px 0;
  margin: 0;
  overflow: auto;
  height: 600px;
`
export const Label = styled.label<{ $isRequired?: boolean }>`
  display: flex;
  min-width: 70px;
  line-height: 40px;
  color: ${({ theme }) => theme.colors.neutralGray800};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  ${(props) => props.theme.title[16]};

  &:after {
    display: ${(props) => (props.$isRequired ? 'inline-block' : 'none')};
    margin: 2px 0 0 4px;
    content: '*';
    color: ${(props) => props.theme.colors.red500};
    vertical-align: top;
  }
`

export const EditorWrapper = styled.div`
  margin-top: 24px;
  width: 640px;

  .ql-container.ql-snow {
    height: 400px;
    overflow: auto;
  }
`
