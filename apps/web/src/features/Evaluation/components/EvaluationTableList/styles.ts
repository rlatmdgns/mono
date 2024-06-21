import styled from 'styled-components'

export const Wrapper = styled.ul<{ $isEmpty: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin-top: ${(props) => (props.$isEmpty ? '0' : '16px')};
`
