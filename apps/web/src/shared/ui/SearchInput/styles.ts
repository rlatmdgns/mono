import styled from 'styled-components'

export const Box = styled.div<{
  $maxWidth: string
  $width: string
  $size: 'sm' | 'md'
}>`
  position: relative;
  background-color: ${(props) => props.theme.colors.white};
  max-width: ${({ $maxWidth }) => $maxWidth};
  width: ${({ $width }) => $width};

  input {
    height: ${(props) => (props.$size === 'md' ? '40px' : '32px')};
    background: transparent;
    border-radius: ${(props) => (props.$size === 'md' ? '6px' : '4px')};
    padding: 12px 34px 12px 12px;
  }
`
export const IconBox = styled.div`
  position: absolute;
  display: flex;
  height: 16px;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  pointer-events: none;
`
