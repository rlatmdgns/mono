import styled from 'styled-components'

export const ShowMoreSchedules = styled.div`
  width: 320px;
  padding: 8px;
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.neutralGray100};
  border-radius: 8px;
  background: ${(props) => props.theme.colors.white};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply;
    box-shadow: -6px 0 26px 0 rgba(230, 238, 244, 0.8);
    z-index: -1;
  }
`

export const Header = styled.div`
  display: flex;
  padding: 12px 8px;
  align-items: center;
  gap: 4px;
  position: relative;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray500};
  ${(props) => props.theme.fonts[14]};

  button {
    margin-left: auto;
  }
`

export const Length = styled.span`
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.blue500};
`

export const Interviews = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const Interview = styled.button`
  flex: 1 1 100%;
  padding: 12px 8px;
  border-radius: 6px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};

  &:hover {
    background: ${(props) => props.theme.colors.neutralGray50};
  }
`
