import styled from 'styled-components'

export const Wrapper = styled.div<{ $isTemplate?: boolean }>`
  width: 700px;

  ${(props) => `${props.theme.breakpoints.mobile} and (max-width: 1200px)`} {
    width: 100%;
    padding: 84px 50px 150px;
  }

  ${(props) =>
    props.$isTemplate &&
    `
      position:relative;
      width:100%;
      &:before{
        content:'';
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        z-index:${props.theme.zIndexes.dropdown}
      }
    `}
`

export const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 42.6%;
  border-radius: 10px;
  overflow: hidden;
  background: ${(props) => props.theme.colors.neutralGray100};

  img {
    object-fit: cover;
  }

  ${(props) => props.theme.breakpoints.pc} {
    display: block;
    max-width: 700px;
    height: 298px;
    margin-bottom: 48px;
    padding-top: 0;
  }

  & + div {
    ${(props) => props.theme.breakpoints.pc} {
      display: none;
    }
  }
`

export const RecruitWrapper = styled.div`
  display: none;

  ${(props) => `${props.theme.breakpoints.mobile} and  (max-width: 1200px)`} {
    display: block;
  }
`

export const Content = styled.div`
  ${(props) => `${props.theme.breakpoints.mobile} and (max-width: 1200px)`} {
    margin-top: 0;
  }
`
export const RecruitHeader = styled.div``

export const TitleWrap = styled.div<{ $isTemplate?: boolean }>`
  display: flex;
  align-items: center;
  gap: 14px;

  > button {
    top: -8px;
  }

  ${(props) => `${props.theme.breakpoints.mobile} and  (max-width: 1200px)`} {
    > button {
      display: none;
    }
  }

  ${(props) =>
    props.$isTemplate &&
    `
        > button {
            display: none;
        }
    `}
`

export const PostingTitle = styled.h3`
  ${(props) => props.theme.fonts[24]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
  margin-bottom: 14px;
  & + button {
    top: -6px;
  }
`

export const EnterpriseName = styled.p`
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const RecruitInfo = styled.ul`
  margin-top: 36px;
`
export const Deadline = styled.div`
  img {
    filter: brightness(0) saturate(100%) invert(46%) sepia(56%) saturate(2794%) hue-rotate(202deg)
      brightness(106%) contrast(101%);
  }

  display: flex;
  align-items: center;
  gap: 6px;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.blue500};
`

export const Field = styled.li`
  &:nth-child(n + 2) {
    margin-top: 36px;
  }
`

export const FieldTitle = styled.em`
  ${(props) => props.theme.fonts[14]};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.blue500};
`

export const FieldInfo = styled.p`
  margin: 8px 0 0 0;
  ${(props) => props.theme.fonts[15]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray800};
  white-space: pre-wrap;
`

export const Intro = styled.div`
  padding-top: 36px;

  &:before {
    content: '';
    display: block;
    margin-bottom: 36px;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.colors.neutralGray200};
  }
`

export const MapBox = styled.div`
  width: 100%;
  height: 310px;
  margin-top: 20px;
`
