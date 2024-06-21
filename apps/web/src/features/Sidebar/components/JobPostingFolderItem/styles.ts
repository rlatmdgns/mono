import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  color: ${(props) => props.theme.colors.neutralGray700};

  .no-dragging {
    max-height: 0;
    overflow: hidden;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  height: 40px;

  & > div {
    position: absolute;
    top: 12px;
    right: 10px;
    height: 16px;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.neutralGray100};
    border-radius: 6px;
  }
`

export const Left = styled.span`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
`

export const Name = styled.span`
  color: ${(props) => props.theme.colors.neutralGray500};
  ${(props) => props.theme.title[12]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${(props) => props.theme.colors.neutralGray500};
  width: 80%;
  max-width: 85%;
`

export const Arrow = styled.div<{ $isIncluded?: boolean }>`
  height: 16px;
  transform: rotate(${(props) => (props.$isIncluded ? '180deg' : '0deg')});
`
