import styled from 'styled-components'

export const ValueBoxText = styled.span`
  ${(props) => props.theme.fonts[14]};
  color: ${(props) => props.theme.colors.neutralGray800};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  text-align: left;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const CopyButtonBox = styled.div`
  width: 16px;
  height: 16px;

  button {
    &:not(:disabled):hover,
    &:active {
      filter: invert(46%) sepia(17%) saturate(354%) hue-rotate(174deg) brightness(94%) contrast(86%);
    }
  }
`

export const Wrapper = styled.div`
  margin-bottom: 16px;

  ${CopyButtonBox} {
    display: none;
  }

  &:hover {
    ${CopyButtonBox} {
      display: block;
    }
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`

export const Name = styled.div`
  ${(props) => props.theme.fonts[11]};
  color: ${(props) => props.theme.colors.neutralGray400};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`
