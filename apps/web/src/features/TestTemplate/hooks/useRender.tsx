import { render } from '@testing-library/react'
import TestTemplate from '@/features/TestTemplate/TestTemplate'

interface useRenderProps {
  children: React.JSX.Element | React.JSX.Element[]
}

const useRender = ({ children }: useRenderProps) => {
  return render(<TestTemplate>{children}</TestTemplate>)
}

export default useRender
