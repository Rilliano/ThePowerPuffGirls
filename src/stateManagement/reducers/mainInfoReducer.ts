import { Reducer } from 'redux'

// Action Types
import { MainInfoActionTypes, IMainInfoAction } from '../actions/mainInfoAction'

export interface IImage {
  medium: string
  original: string
}

export interface IMainInfo {
  name: string
  type: string
  image: IImage
  summary: string
}

export interface IMainInfoState {
  readonly payload: undefined | IMainInfo
}

const initialMainInfoState: IMainInfoState = {
  payload: undefined
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
