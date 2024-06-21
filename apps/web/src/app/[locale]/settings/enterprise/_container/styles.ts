import styled from 'styled-components'

export const Wrapper = styled.form`
  width: 600px;
  padding: 0 20px;
  margin: 0 auto 144px;

  > button {
    margin-top: 26px;
    width: 100px;
    ${(props) => props.theme.fonts[14]};
  }
`
export const Title = styled.p<{ $isRequired?: boolean }>`
  flex: 1 1 100%;
  margin-bottom: 4px;
  ${(props) => props.theme.fonts[12]};
  color: ${(props) => props.theme.colors.neutralGray700};

  &:after {
    display: ${(props) => (props.$isRequired ? 'inline-block' : 'none')};
    content: '*';
    vertical-align: top;
    margin: 2px 0 0 4px;
    color: ${(props) => props.theme.colors.red500};
  }
`

export const RowTitle = styled(Title)`
  margin-bottom: 10px;
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0 24px;
  margin: 10px 0;
`
export const ButtonWrap = styled.div`
  max-width: 150px;
`

export const Info = styled.div<{ $isFullRow?: boolean }>`
  margin-top: 20px;
  flex: 0 0 ${(props) => (props.$isFullRow ? '100%' : 'calc(50% - 12px)')};
`

export const EnterpriseImageWrap = styled.div`
  display: flex;
  width: 160px;
  height: 160px;
  position: relative;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  word-break: keep-all;
  background: ${(props) => props.theme.colors.neutralGray50};
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.neutralGray100};

  > img {
    vertical-align: middle;
    object-fit: cover;
  }
`
export const EnterpriseSignatureImageList = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`
export const SignatureImageTag = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 0 7px;
  height: 24px;
  line-height: 24px;
  font-size: 11px;
  font-weight: ${(props) => props.theme.fontWeights.regular};
  z-index: ${(props) => props.theme.zIndexes.modalDropdown};
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.blue500};
  border-radius: 4px;
`

export const SignatureImageButton = styled(SignatureImageTag)`
  border: 1px solid ${(props) => props.theme.colors.white};
  background: none;
`

export const ImageFileUpload = styled.input.attrs({
  type: 'file',
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 1px;
  clip: rect(0, 0, 0, 0);
`

export const NoImageLabel = styled.label`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`

export const NoImageWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const NoImageText = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  ${(props) => props.theme.fonts[11]};
  color: ${(props) => props.theme.colors.neutralGray400};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`

export const LineBreak = styled.br``

export const Explanation = styled.div`
  flex: 1 1 100%;
`
export const TextArea = styled.textarea`
  width: 100%;
  height: 198px;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.neutralGray100};
  border-radius: 6px;
  resize: none;
  ${(props) => props.theme.fonts[12]};

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.blue500};
    box-shadow: 0 2px 10px 0 rgba(70, 142, 255, 0.2);
    outline: none;
  }
`

export const EnterpriseSignatureImageWrap = styled(EnterpriseImageWrap)`
  width: 277px;
  height: 123px;
`

export const ImageWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    object-fit: cover;
  }
`

export const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;

  + div {
    position: absolute;
    top: 12px;
    right: 12px;

    button:hover {
      filter: none !important;
    }
  }
`

export const ModifyImageLabel = styled.label`
  position: relative;
  display: flex;
  flex: 1 1 100%;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`
