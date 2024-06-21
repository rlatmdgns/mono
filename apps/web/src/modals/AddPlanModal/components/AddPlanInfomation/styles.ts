import styled from 'styled-components'

export const PlanInfo = styled.div`
  padding-bottom: 24px;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray200};
  ${(props) => props.theme.fonts[14]}
`

export const Info = styled.div`
  display: flex;

  &:nth-child(n + 2) {
    margin-top: 20px;
  }
`
export const Title = styled.span`
  width: 96px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray500};
`
export const Desc = styled.div``

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
  align-items: center;
  gap: 4px;

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
