export interface CreateUserCharacterDataProps {
  user: {
    full_name: string
    cellphone: string
    email: string
    game_availability: number
  }
  character: {
    name: string
    class: string
    level: number
    is0800enable: boolean
  }
}
