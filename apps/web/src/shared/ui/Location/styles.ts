import styled from 'styled-components'

export const Location = styled.p<{
  $icon: 'icon/phone-solid' | 'icon/video-solid' | 'icon/map-solid'
}>`
  display: flex;
  gap: 6px;

  svg {
    flex-shrink: 0;
    margin-top: 2px;
  }
`

export const Text = styled.p`
  display: -webkit-box;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray500};
  ${(props) => props.theme.fonts[14]};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
`
