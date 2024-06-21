import styled from 'styled-components'

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  & > em {
    flex-shrink: 0;
  }
`

export const Name = styled.span<{ $size?: 'sm' | 'md' }>`
  max-width: ${(props) => (props.$size === 'sm' ? '48px' : '136px')};
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Myself = styled.span`
  padding: 0 4px;
  ${(props) => props.theme.fonts[10]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray600};
  background-color: ${(props) => props.theme.colors.neutralGray100};
`
