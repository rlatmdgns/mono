import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  width: 85%;
  padding: 11px 16px;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};
`

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
`

export const SelectWrap = styled.label`
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  align-content: center;

  > div {
    width: 130px;
  }
`

export const Text = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: #374a6a;
`
