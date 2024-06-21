import styled from 'styled-components'

interface WrapperProps {
  $isFold?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  height: ${(props) => !props.$isFold && '70px'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: ${(props) => (props.$isFold ? '12px' : '0 20px')};
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Name = styled.span`
  color: ${(props) => props.theme.colors.neutralGray800};
  ${(props) => props.theme.fonts[20]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`
