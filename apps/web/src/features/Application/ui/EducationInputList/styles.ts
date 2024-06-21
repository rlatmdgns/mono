import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 28px;

  > button {
    margin-top: 20px;
  }
`

export const EducationInputItemWrapper = styled.div``

export const SchoolDetailSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const SchoolFieldWrapper = styled.div`
  position: relative;

  &:nth-child(n + 2) {
    margin-top: 28px;
  }
`

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  &:first-of-type {
    margin-top: 8px;
  }
`

export const SectionMajorWrapper = styled(SectionWrapper)`
  display: flex;
  width: calc(100% - 20px);
  gap: 20px;
  align-items: center;
  flex-direction: initial;
  > div {
    flex: 0 0 50%;
  }
`

export const MajorWrapper = styled.div``

export const MajorTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

export const SectionTitle = styled.span`
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CheckboxWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray500};
`

export const FormWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  > div {
    flex: 1 0 98px;
  }
`

export const RemoveButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 28px 0 -16px;
`

export const MajorList = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  > div {
    line-height: initial;
  }
`
