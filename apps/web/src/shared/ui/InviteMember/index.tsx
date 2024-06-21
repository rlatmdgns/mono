'use client'

import * as Styles from './styles'
import { IconButton, Select } from '@/shared/ui'
import { ENTERPRISE_AUTHORITY_OPTIONS } from '@/shared/constants/'
import { Controller, useFormContext } from 'react-hook-form'
import React, { useEffect } from 'react'

interface InviteMemberProps {
  formKey: string
  data: any
  isChange: boolean
  isDelete: boolean
  onDelete?: () => void
}

export const InviteMember = ({
  formKey,
  data,
  isChange,
  isDelete,
  onDelete,
}: InviteMemberProps) => {
  const { watch, setValue, control } = useFormContext()

  const initOptions = () => {
    const defaultOption = ENTERPRISE_AUTHORITY_OPTIONS.find(
      (option) => option.value === data.user_authority,
    )

    if (!defaultOption) return

    setValue(`${formKey}`, {
      email: data.email,
      user_authority: defaultOption,
    })
  }

  const handleOptionChange = (formKey: string, event: any) => {
    setValue(`${formKey}.user_authority`, event)
  }

  useEffect(() => {
    initOptions()
  }, [])

  return (
    <Styles.Member key={data.email} $isDuplicate={data.is_duplicate}>
      <Styles.Email>{data.email}</Styles.Email>
      <Styles.MemberUtil>
        {isChange && (
          <Styles.SelectWrap>
            <Controller
              render={() => (
                <>
                  <Select
                    options={ENTERPRISE_AUTHORITY_OPTIONS}
                    value={watch(`${formKey}.user_authority`)}
                    placeholder="권한 선택"
                    onChange={(event) => handleOptionChange(formKey, event)}
                  />
                </>
              )}
              name={`${formKey}`}
              control={control}
            />
          </Styles.SelectWrap>
        )}
        {isDelete && (
          <IconButton
            icon="icon/cancle-line1"
            onClick={onDelete}
            size="sm"
            color="neutralGray500"
          />
        )}
      </Styles.MemberUtil>
    </Styles.Member>
  )
}
