import styled from 'styled-components'

export const Header = styled.div`
  padding-top: 32px;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};
`
export const Title = styled.p`
  ${(props) => props.theme.title[16]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Option = styled.ul`
  padding: 14px 0;
`
export const OptionItem = styled.li`
  display: flex;
  gap: 20px;
  padding: 4px 0;
  ${(props) => props.theme.title[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray400};

  & + & {
    margin-top: 2px;
  }
`

export const OptionName = styled.div`
  min-width: 52px;
`
