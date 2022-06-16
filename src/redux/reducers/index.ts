import { combineReducers } from 'redux'
import projectReducer from './projectReducer'
import snackbarReducer from './snackbarReducer'

const rootReducer = combineReducers({
  projects: projectReducer,
  notifications: snackbarReducer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
