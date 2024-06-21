'use client'

import { sequenceLine, wrapper } from '@/widgets/onboarding/ui/Sequences/styles.css'
import { SequenceHeader } from '@/entities/onboarding/ui/SequenceHeader'
import React, { useEffect, useRef, useState } from 'react'
import {
  HandleAddSequence,
  HandleDeleteSequence,
  HandleUpdateSequence,
} from '@/features/onboarding/type'
import { SequenceRow } from '@/entities/onboarding'

interface SequencesProps {
  isPublish: boolean
  managerSequence: any
  freshmanSequence: any
  onAdd: HandleAddSequence
  onUpdate: HandleUpdateSequence
  onRemove: HandleDeleteSequence
}

export const Sequences = ({
  isPublish,
  managerSequence,
  freshmanSequence,
  onAdd,
  onUpdate,
  onRemove,
}: SequencesProps) => {
  const scenarioWrapperRef = useRef<HTMLDivElement>(null)
  const [scenarioLineHeight, setScenarioLineHeight] = useState('')

  const getScenarioLineHeight = () => {
    if (managerSequence.length < 3) {
      return '100vh'
    }
    if (scenarioWrapperRef.current) {
      return `${scenarioWrapperRef.current?.clientHeight + 300}px`
    }
  }

  useEffect(() => {
    getScenarioLineHeight()
  }, [managerSequence])

  if (!managerSequence) return null

  return (
    <div className={wrapper} ref={scenarioWrapperRef}>
      <SequenceHeader isPublish={isPublish} />
      <ul>
        {managerSequence.map((sequence: any, index: number) => (
          <SequenceRow
            key={`sequence_row_${index}`}
            index={index}
            managerSequence={managerSequence[index]}
            freshmanSequence={freshmanSequence[index]}
            isPublish={isPublish}
            onAdd={onAdd}
            onUpdate={onUpdate}
            onRemove={onRemove}
          />
        ))}
      </ul>
      <i
        className={sequenceLine}
        style={{
          height: `${scenarioLineHeight}`,
        }}
      ></i>
    </div>
  )
}
