import { skybrInstance } from '@/configs/axios'

import type { CreateUserCharacterDataProps } from './users.types'

const URL_CONTROLLER = 'users'

export async function postUserCharacter(data: CreateUserCharacterDataProps) {
  const response = await skybrInstance.post(`${URL_CONTROLLER}/onboard`, data)
  return response.data
}
