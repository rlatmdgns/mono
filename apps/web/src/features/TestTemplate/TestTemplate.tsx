import { ThemeProvider } from 'styled-components'
import Themes from '@/styles/theme'

interface TestTemplateProps {
  children: React.JSX.Element | React.JSX.Element[]
}

const TestTemplate = ({ children }: TestTemplateProps) => {
  return <ThemeProvider theme={Themes}>{children}</ThemeProvider>
}

export default TestTemplate
