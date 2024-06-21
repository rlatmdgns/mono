import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};
  margin-bottom: 16px;
  gap: 6px;

  & > div {
    height: 16px;
  }
`

export const Title = styled.span`
  color: ${(props) => props.theme.colors.neutralGray800};
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`
