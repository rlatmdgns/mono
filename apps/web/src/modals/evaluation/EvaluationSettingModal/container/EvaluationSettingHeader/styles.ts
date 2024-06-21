import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 0 16px;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray200};
`

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.neutralGray800};
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`

export const DescriptionBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`

export const StepName = styled.span`
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const ApplicantCount = styled.span`
  color: ${(props) => props.theme.colors.neutralGray500};
`
