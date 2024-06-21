import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`

export const HomeLinkBox = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`

export const Logo = styled(Image)`
  margin-bottom: 20px;
`

export const Container = styled.div`
  width: 330px;
  margin: 0 auto;
  text-align: center;
`

export const Title = styled.h2`
  width: 240px;
  margin: 0 auto 30px;
  text-align: center;
  word-break: keep-all;
  ${(props) => props.theme.fonts[20]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Nav = styled.p`
  display: flex;
  justify-content: center;
  gap: 8px;
  color: ${(props) => props.theme.colors.neutralGray500};
  ${(props) => props.theme.fonts[14]};
  margin: 20px 0 0 0;
`

export const SignUp = styled.em`
  color: ${(props) => props.theme.colors.blue500};
  font-style: normal;
  text-decoration: underline;
`

export const LinkPage = styled(Link)`
  display: block;
  margin: 10px 0 16px 0;
  text-align: left;
  ${(props) => props.theme.fonts[14]};
  color: ${(props) => props.theme.colors.neutralGray500};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`

export const Form = styled.form``

export const Field = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  border: 0;
`

export const Label = styled.label`
  display: flex;
  color: ${(props) => props.theme.colors.neutralGray700};
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin-bottom: 6px;
`

export const LocationButtonWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;

  p {
    display: none;
  }
`
