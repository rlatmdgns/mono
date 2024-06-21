import styled from 'styled-components'

export const Profile = styled.div`
  text-align: center;
`

export const AvatarWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`

export const ProfileAvatar = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
`

export const ProfileInput = styled.input`
  width: 1px;
  height: 1px;
  opacity: 0;
  clip: rect(0, 0, 0, 0);
`

export const ProfileLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.55);
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  padding: 10px;
  opacity: 0;

  &:hover {
    opacity: 1;
  }
`

export const ProfileInfo = styled.div`
  padding-bottom: 14px;
  line-height: 16px;
`

export const Name = styled.p`
  margin: 6px 0 4px;
  ${(props) => props.theme.fonts[12]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray900};
`

export const Email = styled.p`
  margin: 0;
  ${(props) => props.theme.fonts[12]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray400};
`
