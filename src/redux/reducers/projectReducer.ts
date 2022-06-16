import {
  IProject,
  ProjectActionTypes,
  ProjectAction,
  TStatus,
  StatusTypes,
} from 'types'

export interface ProjectState {
  projects: IProject[]
  status: TStatus
  currentProject: IProject | null
}

const initialState: ProjectState = {
  projects: [],
  status: StatusTypes.IDLE,
  currentProject: null,
}

const projectReducer = (
  state: ProjectState = initialState,
  action: ProjectAction
) => {
  switch (action.type) {
    case ProjectActionTypes.FETCH_PROJECTS_START:
      return {
        ...state,
        status: StatusTypes.PENDING,
      }
    case ProjectActionTypes.FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload,
        status: StatusTypes.FULFILLED,
      }
    case ProjectActionTypes.FETCH_PROJECTS_ERROR:
      return {
        ...state,
        status: StatusTypes.REJECTED,
      }
    case ProjectActionTypes.FETCH_PROJECT_BY_ID:
      return {
        ...state,
        currentProject: action.payload,
      }
    case ProjectActionTypes.PICK_PROJECT_BY_ID:
      return {
        ...state,
        currentProject: action.payload,
      }
    case ProjectActionTypes.CLEAR:
      return {
        ...initialState,
      }
    default:
      return state
  }
}

export default projectReducer
