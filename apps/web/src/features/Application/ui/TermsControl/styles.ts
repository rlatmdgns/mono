import styled from 'styled-components'

export const Option = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 12px;
  border-top: 1px solid ${(props) => props.theme.colors.neutralGray100};
`

export const Contetns = styled.div`
  & > textarea {
    margin-top: 8px;
  }
`

export const Name = styled.span`
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Mark = styled(Name)`
  color: ${(props) => props.theme.colors.red500};
`

export const BottomWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`

export const TextWrap = styled.div``

export const Text = styled.span`
  ${(props) => props.theme.fonts[12]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray400};
`

export const Count = styled(Text)`
  color: ${(props) => props.theme.colors.neutralGray800};
`
