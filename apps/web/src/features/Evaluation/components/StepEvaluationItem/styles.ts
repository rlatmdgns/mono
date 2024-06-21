import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 16px;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.neutralGray100};
  border-radius: 8px;
  box-shadow: 0 18px 30px 0 rgba(161, 176, 203, 0.12);
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const Step = styled.div<{ $isClosed: boolean }>`
  max-width: ${(props) => (props.$isClosed ? '90px' : '246px')};
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.black};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
