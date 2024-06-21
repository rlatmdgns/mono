import styled from 'styled-components'

export const WaitingRequestMemberBody = styled.div`
  max-height: 70vh;
  padding: 24px;
  overflow-y: auto;
`

export const Member = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 13px 10px;
  border-radius: 6px;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  background: ${(props) => props.theme.colors.neutralGray100};

  &:nth-child(n + 1) {
    margin-top: 8px;
  }
`

export const Text = styled.span``

export const RightBox = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
`

export const NoList = styled.div`
  padding: 16px 8px;
  text-align: center;
  color: ${(props) => props.theme.colors.neutralGray400};
  ${(props) => props.theme.fonts[14]};
`
