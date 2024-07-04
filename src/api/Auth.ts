import apiClient from './ApiInstance'

export async function registration(login: string, password: string) {
  return await apiClient.post('auth/registration', { login, password })
}
