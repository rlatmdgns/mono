import styled from 'styled-components'

export const LocationHeader = styled.div``

export const RemoveModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${(props) => props.theme.zIndexes.content};
`

export const LocationBody = styled.div<{ $width?: number }>`
  width: ${({ $width }) => $width && `${$width}px`};
  max-height: 300px;
  overflow-y: auto;
`

export const LocationHeaderButton = styled.div`
  position: relative;

  button {
    text-align: left;
    justify-content: flex-start;
  }
`

export const LocationHeaderButtonIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  width: 16px;
  height: 16px;
  margin-top: -8px;
`

export const CurrentLocationText = styled.span`
  display: block;
  min-width: 0;
  flex: 0 0 92%;
  width: 500px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
