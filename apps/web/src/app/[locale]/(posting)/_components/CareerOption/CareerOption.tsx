import React from 'react'
import * as Styles from './styles'
import { useFormContext } from 'react-hook-form'

interface CareerProps {
  career: string
  name: string
  onChange: () => void
}

const CareerOption = ({ career, name, onChange }: CareerProps) => {
  const { watch, register } = useFormContext()

  return (
    <Styles.Label>
      <input type="checkbox" {...register(name)} value={watch(name)} onChange={onChange} />
      <Styles.Text>{career}</Styles.Text>
    </Styles.Label>
  )
}

export default CareerOption
