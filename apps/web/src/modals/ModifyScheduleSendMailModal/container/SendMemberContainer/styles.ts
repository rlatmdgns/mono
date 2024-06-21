import styled from 'styled-components'

export const Wrapper = styled.div<{ $isSendAlarm: boolean }>`
  margin-top: 12px;
  padding: 10px;
  border-radius: 6px;
  background: ${(props) => props.theme.colors.neutralGray50};
  transition: all 0.3s;
  filter: ${(props) => (props.$isSendAlarm ? 'none' : 'opacity(0.5)')};
`

export const Wrap = styled.div`
  flex: 1 1 100%;
  border-radius: 6px;

  &:nth-child(n + 2) {
    margin-top: 20px;
  }
`

export const Title = styled.p`
  display: flex;
  gap: 4px;
  margin-bottom: 6px;
  align-items: center;
  height: 16px;
  font-size: 11px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`

export const CheckBoxIconWrapper = styled.div``

export const Info = styled.span`
  display: flex;
  height: 16px;
  gap: 4px;
  line-height: 16px;
  font-size: 11px;
`

export const InfoTitle = styled.span`
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Count = styled.span`
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray500};
`

export const CheckBoxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

export const CheckBoxRow = styled.div`
  position: relative;
  border-radius: 8px;
  max-width: 100%;
`

export const Member = styled.label`
  display: flex;
  align-items: center;
  padding: 6px 8px;
  gap: 4px;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.neutralGray100};
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray700};
`

export const CheckBox = styled.input.attrs({
  type: 'checkbox',
})<{ $isActive?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  appearance: none;
  transition: border 0.3s;
  border-radius: 4px;
  border: 1px solid ${(props) => (props.$isActive ? props.theme.colors.blue500 : 'none')};
`
