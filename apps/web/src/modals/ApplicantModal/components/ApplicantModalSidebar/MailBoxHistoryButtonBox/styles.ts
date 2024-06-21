import styled from 'styled-components'

interface WrapperProps {
  $isFold?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => (props.$isFold ? '0 0 26px 0' : '0 8px 24px')};
  gap: ${(props) => props.$isFold && '12px'};
  margin-top: auto;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 40px;
  color: ${(props) => props.theme.colors.neutralGray700};
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  padding: 0 4px 0 10px;
`

export const Divider = styled.span`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};
`
