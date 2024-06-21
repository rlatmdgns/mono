import styled from 'styled-components'

export const PageTitle = styled.div`
  margin-bottom: 40px;
  text-align: center;
`
export const Title = styled.h2<{ $icon?: string }>`
  position: relative;
  margin: 0 auto 12px;
  text-align: center;
  ${(props) => props.theme.fonts[28]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};

  &:before {
    content: '';
    display: ${(props) => (props.$icon ? 'block' : 'none')};
    width: 64px;
    height: 64px;
    margin: 0 auto 20px;
    background: ${(props) => `url(${props.$icon}) no-repeat center / contain`};
  }
`

export const Desc = styled.p`
  margin-top: 12px;

  ${(props) => props.theme.fonts[14]};
  color: ${(props) => props.theme.colors.neutralGray500};
`
