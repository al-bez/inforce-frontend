export type Status = 'success' | 'fail'

export interface IServerResponse<T> {
  status: Status
  results?: number
  data: T
}
