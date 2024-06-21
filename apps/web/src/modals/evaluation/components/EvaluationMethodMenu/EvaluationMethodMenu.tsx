import * as Styles from './styles'
import EvaluationMethodItem from '@/modals/evaluation/components/EvaluationMethodItem'
import { getEvaluationMethodMenuPosition } from '@/modals/evaluation/evaluation.factory'
import { EVALUATION_METHODS } from '@/modals/evaluation/evaluation.constants'
import {
  EvaluationMethod,
  EvaluationMethodArray,
  EvaluationMethodLabel,
} from '@/modals/evaluation/evaluation.interface'
import React, { useRef } from 'react'
import { createPortal } from 'react-dom'

interface EvaluationMethodListProps {
  isOpen?: boolean
  onClose: () => void
  selectedMethod: EvaluationMethod
  element: HTMLElement
  containerRef: React.RefObject<HTMLDivElement>
  onClick?: (label: EvaluationMethodLabel) => void
}

const EvaluationMethodMenu = ({
  isOpen,
  onClose,
  selectedMethod,
  element,
  containerRef,
  onClick,
}: EvaluationMethodListProps) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const position = getEvaluationMethodMenuPosition(containerRef.current)
  const methodArray = Object.entries(EVALUATION_METHODS) as EvaluationMethodArray[]

  const handleBackgroundClick = (event: React.MouseEvent<HTMLElement>) => {
    if (modalRef.current?.contains(event.target as Node)) return
    onClose()
  }

  const handleClick = (label: EvaluationMethodLabel) => {
    if (!onClick) return
    onClick(label)
    onClose()
  }

  if (!isOpen) return null

  const evaluationMethodMenu = (
    <Styles.Background onClick={handleBackgroundClick}>
      <Styles.Container
        ref={modalRef}
        $top={position.top}
        $left={position.left}
        $width={position.width}
      >
        {methodArray.map((method) => (
          <EvaluationMethodItem
            key={method[0]}
            label={method[0]}
            values={method[1]}
            isSelected={selectedMethod.label === method[0]}
            onClick={handleClick}
          />
        ))}
      </Styles.Container>
    </Styles.Background>
  )

  return createPortal(evaluationMethodMenu, element)
}

export default EvaluationMethodMenu
