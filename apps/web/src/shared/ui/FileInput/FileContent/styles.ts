import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
  box-shadow: 0 2px 10px 0 rgba(166, 183, 216, 0.3);
  padding: 0 4px 0 12px;
  gap: 8px;
`

export const FileName = styled.span`
  max-width: 90%;
  color: ${(props) => props.theme.colors.neutralGray800};
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin-right: auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  & + button {
    flex: 0 0 32px;
  }
`
