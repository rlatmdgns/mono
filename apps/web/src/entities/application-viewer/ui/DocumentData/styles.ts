import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 24px 16px;
`

export const FileBox = styled.div<{ $isDeleted?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 12px;
  opacity: ${(props) => (props.$isDeleted ? 0.5 : 1)};
`

export const FileContent = styled.div`
  width: calc(100% - 70px);
  display: flex;
  align-items: center;
  gap: 8px;
`

export const FileName = styled.p`
  width: calc(100% - 24px);
  color: ${(props) => props.theme.colors.neutralGray500};
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const FileStateChip = styled.span`
  height: 24px;
  display: flex;
  align-items: center;
  padding: 0 6px;
  gap: 2px;
  background-color: ${(props) => props.theme.colors.neutralGray200};
  border-radius: 24px;
  color: ${(props) => props.theme.colors.neutralGray700};
  ${(props) => props.theme.fonts[11]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  flex-shrink: 0;
`
