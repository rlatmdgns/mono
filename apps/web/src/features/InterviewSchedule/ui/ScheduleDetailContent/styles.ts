import styled from 'styled-components'

export const DetailContentWrapper = styled.div`
  width: calc(100% - 200px);
  padding: 64px 39px 64px 42px;
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  overflow-y: auto;
`

export const DetailContentHeader = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 16px;

  em {
    flex-shrink: 0;
  }
`
export const DetailContentTitle = styled.h2`
  position: relative;
  word-break: normal;
  ${(props) => props.theme.fonts[20]};
  line-height: 24px;
  letter-spacing: -0.2px;
`

export const TopArea = styled.div`
  margin-bottom: 32px;
`

export const AttendWrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;

  &:nth-child(n + 2) {
    margin-top: 16px;
  }
`

export const InterviewTitle = styled.span`
  flex: 0 0 56px;
  padding: 6px 0;
  ${(props) => props.theme.fonts[14]}
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray500};
`

export const Attend = styled.button`
  display: flex;
  max-width: 332px;
  align-items: center;
  gap: 4px;
  padding: 6px 8px;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.neutralGray100};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray700};
  ${(props) => props.theme.fonts[14]};
`
export const PostingButton = styled(Attend)`
  margin-right: 0;

  a {
    max-width: 100%;
    display: flex;
    align-items: center;
    gap: 4px;
  }
`

export const LinkButtonText = styled.span`
  width: calc(100% - 40px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
