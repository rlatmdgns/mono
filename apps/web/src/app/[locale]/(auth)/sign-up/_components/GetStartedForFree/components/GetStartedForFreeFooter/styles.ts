import Link from 'next/link'
import styled from 'styled-components'

export const Footer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`

export const Text = styled.span`
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`

export const LinkToSignIn = styled(Link)`
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.blue600};
  text-decoration: underline;
`
