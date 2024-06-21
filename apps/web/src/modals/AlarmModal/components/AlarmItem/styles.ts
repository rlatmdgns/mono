import styled from 'styled-components'

export const AlarmItem = styled.li<{ $icon: any }>`
  flex: 1 1 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 16px;
  position: relative;

  &:nth-of-type(n + 2) {
    border-top: 1px solid ${(props) => props.theme.colors.neutralGray100};
  }

  &:hover {
    transition: all 0.3s;
    background: ${(props) => props.theme.colors.blue100};

    & > span {
      background-color: ${(props) => props.theme.colors.white};
    }
  }
`

export const IconBox = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.blue100};
  padding: 12px;
  transition: all 0.3s;
`

export const AlarmInformation = styled.div`
  width: calc(100% - 56px);
`

export const AlarmHeader = styled.header`
  display: flex;
  justify-content: space-between;
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
`

export const AlarmDate = styled.span`
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray400};
  margin-left: auto;
`

export const AlarmType = styled.span`
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const AlarmMessage = styled.div`
  margin-top: 8px;
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray500};

  a {
    display: block;
  }
`

export const LinkBox = styled.div<{ $isLickAccess: boolean }>`
  a {
    pointer-events: ${(props) => (props.$isLickAccess ? 'auto' : 'none')};
  }
`
