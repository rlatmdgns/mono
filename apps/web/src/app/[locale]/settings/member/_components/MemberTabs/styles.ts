import styled from 'styled-components'

export const Tabs = styled.div`
  display: flex;
  gap: 20px;
`
export const Tab = styled.button<{ $isCurrent?: boolean }>`
  display: flex;
  gap: 4px;
  padding: 18px 8px;
  position: relative;
  ${(props) => props.theme.fonts[14]}
  line-height:16px;
  color: ${(props) =>
    props.$isCurrent ? props.theme.colors.neutralGray800 : props.theme.colors.neutralGray400};
  font-weight: ${(props) => props.$isCurrent && props.theme.fontWeights.semiBold};

  &:after {
    content: '';
    position: absolute;
    display: ${(props) => (props.$isCurrent ? 'block' : 'none')};
    width: 100%;
    height: 3px;
    background: ${(props) => props.theme.colors.blue500};
    left: 0;
    bottom: -2.5px;
    border-radius: 100px;
    z-index: ${(props) => props.theme.zIndexes.overlay};
  }
`

export const Count = styled.span``
