import styled from 'styled-components'

interface WrapperProps {
  $isFold?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};
  gap: 8px;
  padding: ${(props) => (props.$isFold ? '0 12px' : '0 20px')};
`

export const Posting = styled.span`
  max-width: 178px;
  color: ${(props) => props.theme.colors.neutralGray700};
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
