import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.white};
  overflow: auto;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 308px;

  ${(props) => props.theme.breakpoints.landscapeMobile} {
    max-width: 600px;
    padding: 32px 0;
  }
`

export const Container = styled.div``

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${(props) => props.theme.breakpoints.pc} {
    gap: 40px;
  }
`

export const ChannelTalk = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 0 56px;
  padding: 10px 0;
  width: 100%;
  max-width: 600px;
`

export const ChannelTalkText = styled.p`
  text-align: center;
  ${(props) => props.theme.fonts[14]};
  line-height: 21px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray400};
`

export const ChannelTalkLink = styled(ChannelTalkText)`
  color: ${(props) => props.theme.colors.blue500};
  text-decoration: underline;
  cursor: pointer;
`
