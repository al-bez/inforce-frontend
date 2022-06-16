export interface IImage {
  src_pixel: string
  src: string
}

export interface ICustomer {
  name: string
  avatar: IImage
  review: string
  logo: IImage
  business_needs: string
  result: string
}

export interface IProject {
  _id: string
  title: string
  description: string
  img_preview: IImage
  imgs: IImage[]
  customer: ICustomer
}

export enum ProjectActionTypes {
  FETCH_PROJECTS_START = 'inforce/projects/FETCH_PROJECTS_START',
  FETCH_PROJECTS_SUCCESS = 'inforce/projects/FETCH_PROJECTS_SUCCESS',
  FETCH_PROJECTS_ERROR = 'inforce/projects/FETCH_PROJECTS_ERROR',
  FETCH_PROJECT_BY_ID = 'inforce/projects/FETCH_PROJECT_BY_ID',
  PICK_PROJECT_BY_ID = 'inforce/projects/PICK_PROJECT_BY_ID',
  CLEAR = 'inforce/projects/CLEAR',
}

interface FetchProjectsActionStart {
  type: ProjectActionTypes.FETCH_PROJECTS_START
}

interface FetchProjectsActionSuccess {
  type: ProjectActionTypes.FETCH_PROJECTS_SUCCESS
  payload: IProject[]
}

interface FetchProjectsActionError {
  type: ProjectActionTypes.FETCH_PROJECTS_ERROR
}

interface FetchProjectByIdAction {
  type: ProjectActionTypes.FETCH_PROJECT_BY_ID
  payload: IProject
}

interface PickProjectById {
  type: ProjectActionTypes.PICK_PROJECT_BY_ID
  payload: IProject
}

interface ProjectActionClear {
  type: ProjectActionTypes.CLEAR
}

export type ProjectAction =
  | FetchProjectsActionStart
  | FetchProjectsActionSuccess
  | FetchProjectsActionError
  | FetchProjectByIdAction
  | PickProjectById
  | ProjectActionClear
