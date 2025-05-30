'use client'

import { useForm, zodResolver } from '@mantine/form'
import { useState } from 'react'

import { useCreateUserCharacter } from '@/domains/users/users.hooks'
import { calculateAvailabilityMask, formatPhoneNumber } from '@/utils/functions'

import {
  RegistrationFormPropsValues,
  registrationFormSchema,
} from './registrationForm.schema'

export const useRegistrationForm = () => {
  const mutation = useCreateUserCharacter()
  const [selectedClass, setSelectedClass] = useState('')

  const form = useForm<RegistrationFormPropsValues>({
    mode: 'uncontrolled',
    initialValues: {
      complete_name: '',
      cellphone: '',
      email: '',
      nick_name: '',
      class_name: '',
      game_availability: [],
      '0800_availability': '',
      accept_rules: false,
      accept_terms: false,
    },
    validate: zodResolver(registrationFormSchema),
  })

  const isLoading = mutation.isPending

  const marginBottomOnError = (
    field: keyof RegistrationFormPropsValues,
  ): string | undefined => {
    return (
      form.getInputProps(field).error && 'calc(var(--mantine-spacing-xs) / 2)'
    )
  }

  const handleSubmit = (values: RegistrationFormPropsValues) => {
    mutation.mutateAsync({
      user: {
        full_name: values.complete_name,
        cellphone: formatPhoneNumber(values.cellphone),
        email: values.email,
        game_availability: calculateAvailabilityMask(values.game_availability),
      },
      character: {
        name: values.nick_name,
        class: values.class_name,
        is0800enable: values['0800_availability'] === 'true' ? true : false,
        level: 1,
      },
    })

    setSelectedClass('')
    form.reset()
  }

  return {
    form,
    isLoading,
    selectedClass,
    setSelectedClass,
    marginBottomOnError,
    handleSubmit,
  }
}
