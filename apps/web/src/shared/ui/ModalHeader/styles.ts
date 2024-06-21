import styled from 'styled-components'

export const Header = styled.div`
  background: ${(props) => props.theme.colors.white};
  padding: 18px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const Inner = styled.div``
export const Title = styled.em`
  display: flex;
  align-items: center;
  gap: 4px;
  font-style: normal;
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`
export const SubTitle = styled.p`
  margin-top: 8px;
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray500};
`
