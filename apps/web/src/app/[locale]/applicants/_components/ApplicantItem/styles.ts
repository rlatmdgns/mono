import styled from 'styled-components'

export const Wrapper = styled.li`
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};
`
export const Inner = styled.div<{ $isAccess: boolean }>`
  display: grid;
  align-items: center;
  grid-template-columns:
    minmax(90px, 1fr) minmax(320px, 1fr) minmax(110px, 1fr) minmax(110px, 1fr)
    minmax(110px, 1fr) minmax(110px, 1fr) minmax(110px, 1fr);
  padding-left: 8px;
  width: 100%;
  height: 56px;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray800};

  opacity: ${(props) => (props.$isAccess ? 1 : 0.5)};
  cursor: ${(props) => (props.$isAccess ? 'pointer' : 'default')};

  &:hover {
    background-color: ${(props) => props.$isAccess && props.theme.colors.neutralGray50};
  }
`

const Ellipsis = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 12px;
`

export const ApplicantName = styled(Ellipsis)`
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  padding-right: 0;
`

export const ApplicantNameBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding-right: 12px;
`

export const JobPosting = styled(Ellipsis)`
  max-width: calc(100% - 26px);
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`
export const Step = styled(Ellipsis)`
  color: ${(props) => props.theme.colors.neutralGray900};
`
export const Category = styled(Ellipsis)`
  color: ${(props) => props.theme.colors.neutralGray900};
`
export const Tag = styled(Ellipsis)`
  > div {
    padding-bottom: 0;
  }
`
export const Route = styled(Ellipsis)`
  max-width: 85%;
  color: ${(props) => props.theme.colors.neutralGray900};
`
export const Date = styled(Ellipsis)`
  color: ${(props) => props.theme.colors.neutralGray500};
`
