import styled from 'styled-components'

interface WrapperProps {
  $size?: 'md' | 'lg'
  $hasFooter?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  height: calc(100% - ${(props) => (props.$size === 'md' ? '56px' : '64px')});
  padding: ${(props) => (props.$hasFooter ? '0 16px 120px' : '0 16px')};
  overflow: auto;
`
