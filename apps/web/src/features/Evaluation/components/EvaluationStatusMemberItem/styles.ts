import styled from 'styled-components'

export const Member = styled.li<{ $isMemberEvaluationSubmitted: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.neutralGray100};
  border-radius: 8px;
  box-shadow: 0 18px 30px 0 rgba(161, 176, 203, 0.14);
  opacity: ${(props) => (props.$isMemberEvaluationSubmitted ? 1 : 0.5)};
  cursor: ${(props) => !props.$isMemberEvaluationSubmitted && 'not-allowed'};
`

export const LeftContainer = styled.div`
  display: flex;
  gap: 14px;
`

export const Avatar = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
`

export const IconBox = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 16px;
  height: 16px;
  padding: 3px;

  &::before {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 50%;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
  }
`

export const MemberInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
`
