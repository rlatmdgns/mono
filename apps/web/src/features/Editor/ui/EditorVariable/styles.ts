import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 48px;
  padding: 0 12px;
  border: 1px solid #e5e8eb;
  border-radius: 6px 6px 0 0;
  border-bottom: none;
  background: #f9fafb;
`
export const Variable = styled.button<{
  $color: string
  $backgroundColor: string
}>`
  padding: 4px 8px;
  ${(props) => props.theme.title[12]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.$color};
  background: ${(props) => props.$backgroundColor};
  border-radius: 4px;
`
