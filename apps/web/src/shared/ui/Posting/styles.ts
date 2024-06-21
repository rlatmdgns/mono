import { getIsActive, getIsActiveIcon, getIsActiveShadow } from './Posting.function'
import styled, { css } from 'styled-components'

interface JobPostingItem {
  readonly $isActive?: boolean
  readonly $isClose?: boolean
  readonly $isCurrentPage?: boolean
  readonly $isMember?: boolean
  readonly $isNonFolder?: boolean
  readonly $color?: string
  readonly $isColor?: boolean
}

export const Inner = styled.div<JobPostingItem>`
  display: flex;
  align-items: center;
  pointer-events: ${(props) => (props.$isMember ? 'auto' : 'none')};
  width: 100%;
  height: 38px;
  padding: ${(props) => (props.$isNonFolder ? '0 4px 0 2px' : '0 0 0 24px')};

  ${(props) => css`
    &:before {
      display: block;
      content: '';
      margin-right: 16px;
      min-width: 8px;
      height: 8px;
      background: ${props.$isColor
        ? props.$color
        : getIsActiveIcon(props.$isActive, props.$isClose)};
      border-radius: 50%;
      box-shadow: ${getIsActiveShadow(props.$isActive, props.$isClose)};
    }
  `}
`

export const JobPostingItem = styled.div<JobPostingItem>`
  display: flex;
  align-items: center;
  font-weight: ${(props) =>
    props.$isCurrentPage ? props.theme.fontWeights.bold : props.theme.fontWeights.medium};
  text-decoration: ${(props) => (props.$isClose ? 'line-through' : 'none')};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  border-radius: 6px;
  background: ${(props) =>
    props.$isCurrentPage ? props.theme.colors.neutralGray100 : 'transparent'};
  color: ${(props) => getIsActive(props.$isActive, props.$isClose)};
  padding: 0 10px;

  &:active {
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }

  &:hover {
    background: ${(props) => props.theme.colors.neutralGray100};
  }
`

export const Title = styled.span`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const Lock = styled.div`
  display: flex;
  height: 14px;
`
