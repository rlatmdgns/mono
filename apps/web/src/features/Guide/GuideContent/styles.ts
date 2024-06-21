import styled from 'styled-components'

export const GuideDetailWrap = styled.div<{ $isDetailOpen: boolean }>`
  overflow: hidden;
  width: 446px;
  position: absolute;
  bottom: 50px;
  right: -488px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  z-index: 100;
  visibility: ${(props) => (props.$isDetailOpen ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.$isDetailOpen ? 1 : 0)};
  transform: ${(props) => (props.$isDetailOpen ? 'translate(0, 0)' : 'translate(80px, 0)')};
  transition: all 0.3s;
`

export const GuideCloseBox = styled.div`
  button {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 20px;
    right: 20px;
    color: #d9d9d9;
    z-index: 10;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #3f4254;
    }
  }
`

export const GuideDetailBody = styled.div<{ $detailStep: number }>`
  position: relative;
  min-height: 500px;
  transform: ${(props) => `translate(${props.$detailStep * -100}%, 0)`};
  transition: all 0.3s;
`
