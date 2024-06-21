import * as Styles from './styles'
import { EVALUATION_METHODS } from '@/modals/evaluation/evaluation.constants'
import {
  EvaluationAllMethodLabel,
  EvaluationMethod,
} from '@/modals/evaluation/evaluation.interface'
import { filterMethodWithOutComment } from '@/modals/evaluation/evaluation.factory'
import EvaluationMethodMenu from '@/modals/evaluation/components/EvaluationMethodMenu'
import EvaluationMethodDropdownButton from '@/modals/evaluation/components/EvaluationMethodDropdownButton'
import { useRef, useState } from 'react'

interface EvaluationMethodBoxProps {
  method: EvaluationAllMethodLabel
  onClick?: (label: EvaluationAllMethodLabel) => void
}

const EvaluationMethodDropdown = ({ method, onClick }: EvaluationMethodBoxProps) => {
  const element = document.getElementById('dropdown') as HTMLElement
  const containerRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  if (!method) return null

  const filterMethod = filterMethodWithOutComment(method)

  const selectedMethod = {
    label: filterMethod,
    values: Object.values(EVALUATION_METHODS[filterMethod]),
  } as EvaluationMethod
  const handleToggle = () => setIsOpen(!isOpen)
  const handleClose = () => setIsOpen(false)

  return (
    <Styles.Wrapper ref={containerRef}>
      <EvaluationMethodDropdownButton
        isOpen={isOpen}
        onClick={handleToggle}
        selectedMethod={selectedMethod}
      />
      <EvaluationMethodMenu
        isOpen={isOpen}
        onClose={handleClose}
        selectedMethod={selectedMethod}
        element={element}
        containerRef={containerRef}
        onClick={onClick}
      />
    </Styles.Wrapper>
  )
}

export default EvaluationMethodDropdown
