import { ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import axios from 'axios'

// Types
import { ISingleEpisodeListState } from '../reducers/singleEpisodeListReducer'
import { IEpisode } from '../../types'

// Static
import apiEndpoints from '../../static/apiEndpoints'

export enum SingleEpisodeListActionTypes {
  FETCH_SINGLE_EPISODE = 'FETCH_SINGLE_EPISODE'
}

export interface ISingleEpisodeAction {
  type: SingleEpisodeListActionTypes.FETCH_SINGLE_EPISODE
  payload: IEpisode
}

export type SingleEpisodeAction = ISingleEpisodeAction

export const getSingleEpisode: ActionCreator<ThunkAction<
  Promise<any>,
  ISingleEpisodeListState,
  null,
  ISingleEpisodeAction
>> = (episodeId: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(
        `${apiEndpoints.getSingleEpisodes.url}/${episodeId}`
      )

      dispatch({
        payload: response.data,
        type: SingleEpisodeListActionTypes.FETCH_SINGLE_EPISODE
      })
    } catch (err) {
      console.error(err)
    }
  }
}
