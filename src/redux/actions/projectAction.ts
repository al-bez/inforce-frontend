import { projectService } from '../../services/index'
import { Dispatch } from 'redux'
import {
  IProject,
  ProjectActionTypes,
  ProjectAction,
  SnackBarAction,
  IServerResponse,
  ISnackbarNotification,
  SnackbarTypes,
} from 'types'
import { v4 as uuidv4 } from 'uuid'

export const getProjectsRange =
  () => async (dispatch: Dispatch<ProjectAction | SnackBarAction>) => {
    try {
      dispatch({
        type: ProjectActionTypes.FETCH_PROJECTS_START,
      })
      const response = await projectService.fetchProjects<
        IServerResponse<IProject[]>
      >()
      dispatch({
        type: ProjectActionTypes.FETCH_PROJECTS_SUCCESS,
        payload: response.data.data,
      })
    } catch (err) {
      dispatch({
        type: ProjectActionTypes.FETCH_PROJECTS_ERROR,
      })
      const notification: ISnackbarNotification = {
        key: uuidv4(),
        message: 'Cannot get projects information!',
        variant: 'error',
      }

      dispatch({
        type: SnackbarTypes.ENQUEUE_SNACKBAR,
        key: uuidv4(),
        notification,
      })
    }
  }

export const getProjectById =
  (id: string) =>
  async (dispatch: Dispatch<ProjectAction | SnackBarAction>) => {
    try {
      const response = await projectService.fetchProjectById<
        IServerResponse<IProject>
      >(id)
      dispatch({
        type: ProjectActionTypes.FETCH_PROJECT_BY_ID,
        payload: response.data.data,
      })
    } catch (err) {
      const notification: ISnackbarNotification = {
        key: uuidv4(),
        message: 'Cannot get project by ID!',
        variant: 'error',
      }

      dispatch({
        type: SnackbarTypes.ENQUEUE_SNACKBAR,
        key: uuidv4(),
        notification,
      })
    }
  }

export const pickCurrentProject = (project: IProject) => {
  return {
    type: ProjectActionTypes.PICK_PROJECT_BY_ID,
    payload: project,
  }
}

export const projectsClear = () => {
  return {
    type: ProjectActionTypes.CLEAR,
  }
}
