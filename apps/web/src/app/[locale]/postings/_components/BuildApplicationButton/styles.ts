import styled from 'styled-components'

export const Wrapper = styled.div`
  height: calc(100vh - 128px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.neutralGray50};
  border-radius: 8px;
  margin: 20px 40px;
`

export const Title = styled.p`
  background: linear-gradient(
    92deg,
    #949eff -18.66%,
    #3181ff 61.02%,
    #6ea7ff 119.18%,
    #6ea7ff 119.18%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${(props) => props.theme.fonts[22]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin-bottom: 12px;
`

export const SubTitle = styled.span`
  color: ${(props) => props.theme.colors.neutralGray600};
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin-bottom: 32px;
`

export const Content = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.neutralGray200};
  border-radius: 8px;
  padding: 24px;
`

export const Text = styled.p`
  color: ${(props) => props.theme.colors.neutralGray800};
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  margin: 24px 0 8px;
`

export const Description = styled.p`
  width: 280px;
  color: ${(props) => props.theme.colors.neutralGray500};
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin-bottom: 24px;
`
