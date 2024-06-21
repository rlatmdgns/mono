import styled from 'styled-components'

export const Wrapper = styled.div`
  max-height: 280px;
  overflow-y: auto;

  & > div {
    min-width: 164px;
    padding: 12px;
    cursor: default;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.neutralGray100};
  }

  &::-webkit-scrollbar-thumb {
    border: 4px solid ${(props) => props.theme.colors.neutralGray300};
  }
`

export const Name = styled.span`
  width: 66px;
  margin-right: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
