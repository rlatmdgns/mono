import styled, { keyframes } from 'styled-components'

const titleSlideDown = keyframes`
    from {
        transform: translate(-50%, -20%);
        opacity: 0;
    }
    to {
        transform: translate(-50%, 40%);
        opacity: 1;
    }
`

const processSlideDown = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const bgZoomUp = keyframes`
    from {
        transform: translate(-50%, 20%);
        opacity: 0;
    }
    to {
        transform: translate(-50%, 20%);
        opacity: 1;
    }
`

const ServiceZoomUp = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const CardMove = keyframes`
    10% {
        opacity: 0;
        transform: scale(0.7)
    }
    20% {
        opacity: 1;
    }
    50% {
        transform: scale(1.1);
    }
    90% {
        transform: scale(1.1);
    }
    92% {
        transform: scale(1.12);
    }
    100% {
        top: 19%;
        left: 20%;
        opacity: 1;
        transform: scale(1);
    }
`
const SmallCardMove = keyframes`
  10% {
    opacity: 0;
    transform: scale(0.7)
  }
  20% {
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
  }
  90% {
    transform: scale(1.1);
  }
  92% {
    transform: scale(1.12);
  }
  100% {
    top: 30%;
    left: 20%;
    opacity: 1;
    transform: scale(1);
  }
`

const LargeCardMove = keyframes`
  10% {
    opacity: 0;
    transform: scale(0.7)
  }
  20% {
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
  }
  90% {
    transform: scale(1.1);
  }
  92% {
    transform: scale(1.12);
  }
  100% {
    top: 15%;
    left: 20%;
    opacity: 1;
    transform: scale(1);
  }
`

export const Wrapper = styled.div`
  ${(props) => props.theme.breakpoints.pc} {
    display: block;
    width: 100%;
    max-width: 50vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    background: linear-gradient(#f8fafc 28%, #edf2fd 100%);
  }

  @media only screen and (max-height: 700px) {
    display: none;
  }
  display: none;
`

export const TitleWrapper = styled.div`
  @media only screen and (max-height: 920px) {
    top: 8%;
    width: 50%;
    height: 0;
    padding-top: 10%;
    > img {
      height: auto !important;
    }
  }

  @media only screen and (min-width: 2000px) {
    width: 80%;
    max-width: 500px;
    height: 0;
    padding-top: 10%;
  }

  position: absolute;
  width: 60%;
  max-width: 363px;
  height: 71px;
  top: 10%;
  left: 50%;
  animation: ${titleSlideDown} 1s ease-in-out forwards;
`
export const ProcessWrapper = styled.div`
  @media only screen and (max-height: 920px) {
    top: 35%;
    width: 80%;
  }

  @media only screen and (min-width: 2000px) {
    max-width: 700px;
  }

  display: flex;
  max-width: 566px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: absolute;
  top: 32%;
  left: 50%;
  z-index: 3;
  transform: translate(-50%, -50%);
`
export const ProcessImg = styled.div<{ $process_step: number }>`
  flex: 0 0 129px;
  width: 129px;
  height: 102px;
  position: relative;

  &:nth-child(3) {
    flex: 0 0 114px;
  }
  &:nth-child(4) {
    flex: 0 0 114px;
  }
  > img {
    width: auto !important;
    opacity: 0;
    animation: ${processSlideDown} 0.5s ease-in forwards;
    animation-delay: ${(props) => props.$process_step * 0.5}s;
  }
  @media only screen and (min-width: 2000px) {
    flex: 0 0 155px;
    width: 155px;
    height: 122px;
    &:nth-child(3) {
      flex: 0 0 136px;
    }
    &:nth-child(4) {
      flex: 0 0 136px;
    }
  }
`

export const BgWrapper = styled.div`
  @media only screen and (max-height: 920px) {
    width: 90%;
    height: 0;
    top: 20%;
    padding-top: 80%;
  }

  @media only screen and (min-width: 2000px) {
    width: 90%;
    height: 0;
    padding-top: 85%;
  }

  width: 720px;
  height: 742px;
  position: absolute;
  top: 15%;
  left: 50%;
  opacity: 0;
  animation: ${bgZoomUp} 0.5s ease-in forwards;
  animation-delay: 2s;
`

export const ServiceWrapper = styled.div`
  @media only screen and (max-height: 920px) {
      width: 100%;
      height: 0;
      left: 5%;
      padding-top: 120%;
  }
  @media only screen and (min-width: 2000px) {
    width:100%;
    height:0;
    left:5%;
    padding-top:90%;
    > img {
      height: auto!important;
    }
  }
  position: absolute;
  width: 1183px;
  height: 856px;
  left: 0;
  bottom: -36%;
  opacity: 0;
  animation: ${ServiceZoomUp} 1.5s ease-in forwards;
  animation-delay: 1s;
}
`

export const CardWrapper = styled.div`
  @media only screen and (max-height: 920px) {
    width: 25%;
    height: 0;
    padding-top: 18%;
    animation: ${SmallCardMove} 1.5s ease-in forwards;
  }
  @media only screen and (min-width: 2000px) {
    animation: ${LargeCardMove} 1.5s ease-in forwards;
  }
  position: absolute;
  width: 281px;
  height: 136px;
  top: 20%;
  left: 40%;
  z-index: 2;
  opacity: 0;
  animation: ${CardMove} 1.5s ease-in forwards;
  animation-delay: 2s;
`

export const CursorWrapper = styled.div`
  position: absolute;
  width: 24px;
  height: 32px;
  bottom: 30px;
  right: 45px;
  z-index: 2;
`
