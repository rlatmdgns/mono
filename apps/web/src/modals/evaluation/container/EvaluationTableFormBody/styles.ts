import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 1024px;
  max-width: calc(100vw - 104px);
  height: 70vh;
  background-color: ${(props) => props.theme.colors.neutralGray100};
  padding: 16px 32px;
  overflow-y: auto;
`

export const Content = styled.div<{ $isOms?: boolean }>`
  width: ${(props) => (!props.$isOms ? '432px' : '100%')};
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  padding: 16px;
  margin: 0 auto;
`
