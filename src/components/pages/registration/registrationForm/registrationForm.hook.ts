'use client'

import { useForm, zodResolver } from '@mantine/form'

import {
  RegistrationFormPropsValues,
  registrationFormSchema,
} from './registrationForm.schema'

export const useRegistrationForm = () => {
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

  const marginBottomOnError = (
    field: keyof RegistrationFormPropsValues,
  ): string | undefined => {
    return (
      form.getInputProps(field).error && 'calc(var(--mantine-spacing-xs) / 2)'
    )
  }

  const handleSubmit = (values: RegistrationFormPropsValues) => {
    console.log('values:', values)
  }

  return { form, marginBottomOnError, handleSubmit }
}
