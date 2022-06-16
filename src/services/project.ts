import api from '../utils/api'
import { AxiosResponse } from 'axios'

const fetchProjects = async <T>(): Promise<AxiosResponse<T>> => {
  return await api.get('/projects')
}

const fetchProjectById = async <T>(id: string): Promise<AxiosResponse<T>> => {
  return await api.get(`/projects/${id}`)
}

const projectService = {
  fetchProjects,
  fetchProjectById,
}

export default projectService
