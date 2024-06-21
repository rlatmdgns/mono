import { tabsWrapper } from './styles.css'

interface NavigationTabsWrapperProps {
  size?: 'md' | 'lg'
  children: React.ReactNode
}

export const NavigationTabsWrapper = ({ children }: NavigationTabsWrapperProps) => {
  return <div className={tabsWrapper}>{children}</div>
}
