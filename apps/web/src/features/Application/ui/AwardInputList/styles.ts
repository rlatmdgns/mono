import styled from 'styled-components'

export const Wrapper = styled.div`
  > button {
    margin-top: 20px;
  }
`

export const ItemWrapper = styled.div``

export const ItemContainer = styled.ul`
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

export const RemoveButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 28px 0 -16px;
`
