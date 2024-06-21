import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-bottom: 6px;
  padding-bottom: 6px;
  overflow-x: auto;
`

export const List = styled.ul<{ $columnRepeatLength: number }>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.$columnRepeatLength}, 40px)`};
  gap: 12px;
  max-height: 204px;
  overflow: auto;
`
