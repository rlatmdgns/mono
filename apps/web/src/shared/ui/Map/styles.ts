import styled from 'styled-components'

export const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  > a {
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 8px;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 20%) 0 0 8px;
    background: ${(props) => props.theme.colors.white};
    ${(props) => props.theme.fonts[14]};
    z-index: ${(props) => props.theme.zIndexes.overlay};
  }
`

export const Map = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.neutralGray200};
`
