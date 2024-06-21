import styled from 'styled-components'

interface FoldProps {
  $isFold: boolean
}

export const Wrapper = styled.div<FoldProps>`
  flex-shrink: 0;
  width: ${(props) => (props.$isFold ? '56px' : '260px')};
  border-right: 1px solid ${(props) => props.theme.colors.neutralGray200};
  box-shadow: 2px 4px 10px rgba(215, 215, 215, 0.23);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }
`

export const Container = styled.div<FoldProps>`
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.$isFold ? 'calc(100% - 58px)' : 'calc(100% - 128px)')};
  padding: ${(props) => (props.$isFold ? '12px 10px 0' : '0 10px')};
`
