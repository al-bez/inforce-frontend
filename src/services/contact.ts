import api from '../utils/api'
import { AxiosResponse } from 'axios'
import { IContact } from 'types'

const sendContact = async <T>(contact: IContact): Promise<AxiosResponse<T>> => {
  return await api.post('/contact', contact)
}

const projectService = {
  sendContact,
}

export default projectService
