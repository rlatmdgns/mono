import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  align-items: center;
  gap: 6px 8px;
`

export const Time = styled.p`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${(props) => props.theme.colors.blue500};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  line-height: 24px;
  ${(props) => props.theme.fonts[14]};
`

export const ChangeStatus = styled.button<{ $toggleStatus: boolean }>`
  display: flex;
  align-items: center;
  ${(props) => props.theme.fonts[11]};
  color: ${(props) => props.theme.colors.neutralGray500};

  svg {
    margin-top: -2px;
    transform: ${(props) => (props.$toggleStatus ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`

export const ChangeTime = styled.p`
  flex: 1 1 100%;
  padding-left: 22px;
  text-decoration: line-through;
  color: ${(props) => props.theme.colors.neutralGray500};
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`
