import styled from 'styled-components'

export const Footer = styled.div`
  position: fixed;
  width: calc(100% - 208px);
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 16px 28px;
  border-top: ${(props) => `1px solid ${props.theme.colors.neutralGray200}`};
  box-shadow: 0 4px 40px 0 rgba(161, 176, 203, 0.28);
  background: ${(props) => props.theme.colors.neutralGray50};

  & + div {
    position: fixed;
  }
`

export const PaymentTypeList = styled.div`
  display: flex;
  gap: 8px;
`

export const Icon = styled.i`
  display: block;
  width: 16px;
  height: 16px;
  position: relative;
  border-radius: 50%;
`

export const Type = styled.button<{ $isActive: boolean }>`
  display: flex;
  height: 40px;
  padding: 0 16px;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  border: ${(props) =>
    `1px solid ${
      props.$isActive ? props.theme.colors.blue500 : props.theme.colors.neutralGray200
    }`};
  background: ${(props) =>
    props.$isActive ? props.theme.colors.blue100 : props.theme.colors.white};
  transition: all 0.3s;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};

  i {
    background: ${(props) =>
      props.$isActive ? props.theme.colors.blue200 : props.theme.colors.neutralGray100};

    &:before {
      content: '';
      width: 8px;
      height: 8px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: ${(props) => (props.$isActive ? props.theme.colors.blue500 : 'none')};
    }
  }
`
export const PaymentButtonWrapper = styled.div`
  min-width: 128px;
`
