import styled from 'styled-components'

interface ContainerProps {
  $isPublic: boolean
}

export const Wrapper = styled.div`
  width: calc(100vw - 96px);
  min-width: 872px;
  height: calc(100vh - 72px);
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.white};
`

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-grow: 1;
  height: ${(props) => (props.$isPublic ? '100%' : 'calc(100% - 44px)')};
`
