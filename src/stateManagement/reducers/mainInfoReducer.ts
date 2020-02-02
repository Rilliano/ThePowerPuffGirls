import { Reducer } from 'redux'

import { MainInfoActionTypes, IMainInfoAction } from '../actions/mainInfoAction'

export interface IImage {
  medium: string
  original: string
}

export interface IMainInfo {
  name?: string
  type?: string
  image?: IImage
  summary?: string
}

export interface IMainInfoState {
  readonly payload: IMainInfo
}

const initialMainInfoState: IMainInfoState = {
  payload: {}
}

export const mainInfoReducer: Reducer<IMainInfoState, IMainInfoAction> = (
  state = initialMainInfoState,
  action
) => {
  switch (action.type) {
    case MainInfoActionTypes.FETCH_MAIN_CONTENT: {
      return {
        ...state,
        payload: action.payload
      }
    }
    default:
      return state
  }
}
