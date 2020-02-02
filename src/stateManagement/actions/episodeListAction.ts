import { ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import axios from 'axios'

// Types
import { IEpisode, IEpisodeListState } from '../reducers/episodeListReducer'

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
