import { ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import axios from 'axios'

// Types
import { IEpisodeListState } from '../reducers/episodeListReducer'
import { IEpisode } from '../../types'

// Static
import apiEndpoints from '../../static/apiEndpoints'

export enum EpisodeListActionTypes {
  FETCH_EPISODE_LIST = 'FETCH_EPISODE_LIST'
}

export interface IEpisodeListAction {
  type: EpisodeListActionTypes.FETCH_EPISODE_LIST
  payload: IEpisode[]
}

export type EpisodeListAction = IEpisodeListAction

export const getEpisodeList: ActionCreator<ThunkAction<
  Promise<any>,
  IEpisodeListState,
  null,
  IEpisodeListAction
>> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(apiEndpoints.getEpisodesList.url)

      dispatch({
        payload: response.data,
        type: EpisodeListActionTypes.FETCH_EPISODE_LIST
      })
    } catch (err) {
      console.error(err)
    }
  }
}
