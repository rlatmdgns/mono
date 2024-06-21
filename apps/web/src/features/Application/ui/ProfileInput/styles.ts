import styled from 'styled-components'

export const Wrapper = styled.div`
  > button {
    margin-top: 20px;
  }
`

export const ProfileWrapper = styled.div`
  position: relative;
  display: flex;
  width: 160px;
  height: 200px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.neutralGray100};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  ${(props) => props.theme.fonts[11]};

  img {
    height: fit-content !important;
    inset: initial !important;
  }
`

export const NoProfile = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 60px 0;
  justify-content: center;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid ${(props) => props.theme.colors.neutralGray200};
  background: ${(props) => props.theme.colors.neutralGray100};
`

export const ProfileDesc = styled.p`
  font-weight: ${(props) => props.theme.fontWeights.medium};
  ${(props) => props.theme.fonts[11]};
  text-align: center;
  color: ${(props) => props.theme.colors.neutralGray400};
`

export const ProfileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`

export const ProfileLabel = styled.label`
  display: flex;
  margin-top: 8px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  width: 160px;
  border-radius: 6px;
  background: ${(props) => props.theme.colors.neutralGray100};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  ${(props) => props.theme.fonts[11]};
  cursor: pointer;
`

export const RemoveButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
`
