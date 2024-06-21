import styled, { css } from 'styled-components'

export const Wrapper = styled.div<{ $isSelected: boolean }>`
  ${(props) =>
    props.$isSelected &&
    css`
      border: 1px solid ${props.theme.colors.neutralGray800};
      box-shadow: 0 4px 20px 0 #a1b0cb66;
    `}
`

export const Inner = styled.div<{ $isSelected?: boolean }>``

export const Title = styled.p`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
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

export const SectionTitle = styled.span`
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`
