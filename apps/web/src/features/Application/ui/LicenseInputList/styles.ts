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
  margin-top: 28px;
`

export const InputItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`

export const SectionTitle = styled.span`
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const SectionPeriod = styled.div`
  display: flex;
  gap: 8px;

  > :first-of-type {
    min-width: 98px;
  }
`

export const RemoveButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: -8px;
`
