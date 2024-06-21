import styled from 'styled-components'
import Image from 'next/image'

export const Logo = styled(Image)`
  margin-bottom: 20px;
`

export const Container = styled.div`
  width: 330px;
  margin: 0 auto;
  text-align: center;
`

export const Title = styled.h2`
  margin: 0 auto 12px;
  text-align: center;
  ${(props) => props.theme.fonts[28]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Description = styled.p`
  margin: 0 auto 52px;
  ${(props) => props.theme.fonts[14]}
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray800};
  word-break: keep-all;
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
