import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns:
    minmax(180px, 1fr) minmax(180px, 1fr) minmax(180px, 1fr)
    minmax(124px, 1fr) minmax(210px, 1fr) 210px;
  height: 44px;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};

  ${(props) => props.theme.title[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray400};
  padding-left: 8px;
`
