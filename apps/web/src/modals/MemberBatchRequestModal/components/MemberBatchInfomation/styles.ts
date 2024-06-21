import styled from 'styled-components'

export const MemberBatchInformation = styled.div`
  margin-top: 24px;
  ${(props) => props.theme.fonts[14]};
`

export const Title = styled.p`
  margin-bottom: 12px;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const InformationList = styled.ul`
  padding: 16px 12px;
  border-radius: 6px;
  background: ${(props) => props.theme.colors.neutralGray50};
`

export const InfoItem = styled.li`
  display: flex;
  gap: 6px;
  line-height: 16px;
  align-items: center;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  &:before {
    content: '';
    flex: 0 0 4px;
    width: 4px;
    height: 4px;
    margin-left: 2px;
    background: ${(props) => props.theme.colors.black};
    border-radius: 50%;
  }
  &:nth-child(n + 2) {
    margin-top: 12px;
  }
`

export const FileDownload = styled.button`
  color: ${(props) => props.theme.colors.blue500};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`
