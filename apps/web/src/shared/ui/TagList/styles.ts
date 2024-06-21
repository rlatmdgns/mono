import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  max-width: 100%;
  overflow-x: auto;
  width: 100%;
  white-space: nowrap;
  padding-bottom: 8px;

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.neutralGray200};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    border: 4px solid ${(props) => props.theme.colors.neutralGray400};
    border-radius: 4px;
  }
`
