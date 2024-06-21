import Link from 'next/link'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin: 10px 0 18px;
`

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 10px;
  width: 100%;
  margin: 0 auto;
  border-radius: 8px;
  ${(props) => props.theme.title[14]}
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray500};

  &:hover {
    background: ${(props) => props.theme.colors.blue100};
  }
`
