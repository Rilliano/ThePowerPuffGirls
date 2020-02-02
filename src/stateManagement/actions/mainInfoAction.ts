import { ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import axios from 'axios'

// Types
import { IMainInfo, IMainInfoState } from '../reducers/mainInfoReducer'

// Static
import apiEndpoints from '../../static/apiEndpoints'

export enum MainInfoActionTypes {
  FETCH_MAIN_CONTENT = 'FETCH_MAIN_CONTENT'
}

export interface IMainInfoAction {
  type: MainInfoActionTypes.FETCH_MAIN_CONTENT
  payload: IMainInfo
}

export type MainInfoAction = IMainInfoAction

export const getMainInfo: ActionCreator<ThunkAction<
  Promise<any>,
  IMainInfoState,
  null,
  IMainInfoAction
>> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(apiEndpoints.getMainInfo.url)

      dispatch({
        payload: response.data,
        type: MainInfoActionTypes.FETCH_MAIN_CONTENT
      })
    } catch (err) {
      console.error(err)
    }
  }
}
