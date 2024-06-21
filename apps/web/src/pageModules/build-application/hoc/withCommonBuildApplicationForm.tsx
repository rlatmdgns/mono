import React, { ComponentType } from 'react'

interface WithCommonBuildApplicationFormProps {}

export const withCommonBuildApplicationForm = <P extends WithCommonBuildApplicationFormProps>(
  FormComponent: ComponentType<P>,
) => {
  const WithCommonFunctionality: React.FC<Omit<P, keyof WithCommonBuildApplicationFormProps>> = (
    props,
  ) => {
    return <FormComponent {...(props as P)} />
  }

  return WithCommonFunctionality
}
