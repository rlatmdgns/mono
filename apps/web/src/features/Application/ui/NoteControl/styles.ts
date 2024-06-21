import styled from 'styled-components'

export const NoteOption = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 22px 12px;
  border-top: 1px solid ${(props) => props.theme.colors.neutralGray100};
`

export const NoteContents = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Name = styled.dt`
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Input = styled.div`
  margin-top: 8px;
  width: 100%;
`
