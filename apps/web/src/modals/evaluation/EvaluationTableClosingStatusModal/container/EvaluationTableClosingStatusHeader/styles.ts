import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const Title = styled.h2`
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const CountBox = styled.div`
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.blue500};
`

export const SelectCount = styled.span`
  color: ${(props) => props.theme.colors.neutralGray400};
`

export const TableName = styled.span`
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${(props) => props.theme.title[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`
