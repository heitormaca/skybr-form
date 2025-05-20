import { z } from 'zod'

export const registrationFormSchema = z.object({
  complete_name: z
    .string()
    .min(3, 'Insira um nome válido')
    .nonempty('Campo obrigatório'),
  cellphone: z.string().min(19, 'Insira um número válido'),
  email: z.string().email('Insira um e-mail válido'),
  nick_name: z.string().nonempty('Campo obrigatório'),
  class_name: z
    .string()
    .min(2, 'Campo obrigatório')
    .nonempty('Campo obrigatório'),
  game_availability: z
    .array(z.string())
    .refine((arr) => arr.length, { message: 'Campo obrigatório' }),
  '0800_availability': z.string().nonempty('Campo obrigatório'),
  accept_rules: z.boolean().refine((val) => val === true, {
    message:
      'Você precisa concordar com as regras do clã para enviar o formulário.',
  }),
  accept_terms: z.boolean().refine((val) => val === true, {
    message:
      'Você precisa concordar com os Termos de Uso e Política de Privacidade para enviar o formulário',
  }),
})

export type RegistrationFormPropsValues = z.infer<typeof registrationFormSchema>
