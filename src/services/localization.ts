import axios, { AxiosResponse } from 'axios'

export const fetchLocalizationData = async <T>(): Promise<AxiosResponse<T>> => {
  return await axios.get('https://ipapi.co/json/')
}

const localizationService = {
  fetchLocalizationData,
}

export default localizationService
