import { styled } from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.colors.white};

  .prev_evaluation_wrap {
    max-width: 400px;
    padding: 10px;

    > div {
      margin-top: 10px;
      padding: 10px 0;
      border-radius: 4px;

      h4 {
        font-size: 16px;
        font-weight: bold;
      }
    }

    .evaluation_result {
      margin-top: 10px;

      p {
        position: relative;
        padding-left: 10px;

        &:before {
          content: ' · ';
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }

    .evalutaion_description {
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid #bebebe;
      word-break: keep-all;
    }

    .evalutaion_description .title {
      margin-bottom: 10px;
      font-size: 16px;
      font-weight: bold;
    }
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 102px);
  padding-right: 2px;
  word-break: break-word;
  overflow-y: auto;
`

export const Title = styled.span`
  padding: 16px 0;
  ${(props) => props.theme.fonts[24]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
`
