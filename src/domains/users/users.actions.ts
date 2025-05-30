'use server'

import axios from 'axios'

import { postUserCharacter } from './users.service'

import type { CreateUserCharacterDataProps } from './users.types'

export async function onboardUserCharacterAction(
  data: CreateUserCharacterDataProps,
) {
  try {
    return await postUserCharacter(data)
  } catch (err: unknown) {
    if (axios.isAxiosError(err) && err.response) {
      throw new Error(err.response.data.message)
    }
    throw new Error('Erro inesperado')
  }
}
