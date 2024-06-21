import styled from 'styled-components'

export const Member = styled.div<{ $isDuplicate?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0 10px;
  border-radius: 6px;
  background: ${(props) =>
    props.$isDuplicate ? props.theme.colors.red400 : props.theme.colors.neutralGray100};

  &:nth-child(n + 2) {
    margin-top: 8px;
  }
`

export const Email = styled.span`
  width: calc(100% - 170px);
  text-overflow: ellipsis;
  overflow: hidden;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const MemberUtil = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`

export const SelectWrap = styled.div`
  width: 130px;

  > div > div {
    border: none;
    background: none;
  }
`
