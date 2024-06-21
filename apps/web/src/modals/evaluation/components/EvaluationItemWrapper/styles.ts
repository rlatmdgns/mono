import styled from 'styled-components'

interface ContainerProps {
  $isFocused?: boolean
}

export const Wrapper = styled.div`
  position: relative;
`

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid ${(props) => (props.$isFocused ? props.theme.colors.blue500 : 'transparent')};
  border-radius: 10px;
  padding: 16px;

  &:hover {
    border-color: ${(props) => !props.$isFocused && props.theme.colors.blue300};
  }
`
