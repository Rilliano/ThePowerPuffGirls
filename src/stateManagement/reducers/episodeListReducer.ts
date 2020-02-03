import { Reducer } from 'redux'

import {
  EpisodeListActionTypes,
  IEpisodeListAction
} from '../actions/episodeListAction'
import { IEpisode } from '../../types'

export interface IEpisodeListState {
  readonly payload: IEpisode[]
}

const initialEpisodeListState: IEpisodeListState = {
  payload: []
}

export const episodeListReducer: Reducer<
  IEpisodeListState,
  IEpisodeListAction
> = (state = initialEpisodeListState, action) => {
  switch (action.type) {
    case EpisodeListActionTypes.FETCH_EPISODE_LIST: {
      return {
        ...state,
        payload: action.payload
      }
    }
    default:
      return state
  }
}
