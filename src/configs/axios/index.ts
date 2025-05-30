import axios from 'axios'

export const skybrInstance = axios.create({
  baseURL: `${process.env.API_BASE_URL}/api`,
})
