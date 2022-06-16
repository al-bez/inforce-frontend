export enum StatusTypes {
  IDLE = 'idle',
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected',
}

export type TStatus =
  | StatusTypes.IDLE
  | StatusTypes.PENDING
  | StatusTypes.FULFILLED
  | StatusTypes.REJECTED
