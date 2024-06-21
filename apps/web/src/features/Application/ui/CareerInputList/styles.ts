import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 28px;

  > button {
    margin-top: 20px;
  }
`

export const InnerWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Title = styled.p`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`

export const RadioWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  > div {
    flex: 0 0 100%;
  }
`

export const InputList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 28px;
`

export const InputItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`

export const TotalCareer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
  width: 100%;
`

export const SectionTitle = styled.span`
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const SectionText = styled(SectionTitle)`
  ${(props) => props.theme.fonts[16]};
`

export const SectionPeriod = styled.div`
  display: flex;
  gap: 8px;

  > div:not(:first-of-type) {
    flex: 0 1 100%;
  }

  > :first-of-type {
    width: 110px;
    flex-shrink: 0;
  }
`

export const SectionPosition = styled.div`
  display: flex;
  gap: 8px;

  > div {
    flex: 0 1 100%;
  }
`

export const RemoveButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 28px 0 -8px;
`
