import styled from 'styled-components'

export const Form = styled.form`
  margin-bottom: 28px;
`

export const TopArea = styled.div`
  position: relative;
`

export const ChangePassword = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);

  & > a {
    ${(props) => props.theme.fonts[12]};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    color: ${(props) => props.theme.colors.neutralGray600};
  }
`

export const AvatarWrap = styled.div`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  align-items: center;
  gap: 12px;
`

export const ProfileWrapper = styled.div`
  ${(props) => props.theme.fonts[12]};
  padding-right: 150px;
`

export const ProfileLabel = styled.label`
  position: relative;
  cursor: pointer;
  color: ${(props) => props.theme.colors.blue600};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  word-break: keep-all;
`

export const ProfileUpload = styled.input.attrs({
  type: 'file',
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 1px;
  clip: rect(0, 0, 0, 0);
`
export const ProfileDesc = styled.p``

export const InfoWrap = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Info = styled.div`
  margin-top: 20px;
  flex: 0 0 calc(50% - 12px);
`
export const SaveButton = styled.div`
  max-width: 120px;
  margin-top: 20px;
`
