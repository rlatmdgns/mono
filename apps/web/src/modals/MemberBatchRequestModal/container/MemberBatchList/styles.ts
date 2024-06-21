import styled from 'styled-components'

export const MemberBatchList = styled.div`
  height: 100%;
`

export const MemberList = styled.div`
  height: 340px;
  padding: 24px 0;
  overflow-y: auto;
`

export const Error = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const ErrorMessage = styled.p`
  ${(props) => props.theme.fonts[14]};
  color: ${(props) => props.theme.colors.red500};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`

export const Title = styled.div`
  display: flex;
  gap: 2px;
  margin: 16px 0 8px;
  white-space: nowrap;
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};

  > div {
    height: 16px;
  }
`
