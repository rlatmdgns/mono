import styled from 'styled-components'

interface WrapperProps {
  $isFold?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: ${(props) => (props.$isFold ? 'column' : 'row')};
  gap: ${(props) => (props.$isFold ? '12px' : '6px')};
  border-top: ${(props) => !props.$isFold && `1px solid ${props.theme.colors.neutralGray100}`};
  padding: ${(props) => (props.$isFold ? '12px 0' : '20px 0')};
  margin: ${(props) => !props.$isFold && '0 10px'};
`
