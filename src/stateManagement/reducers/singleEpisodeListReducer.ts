import { Reducer } from 'redux'

import {
  SingleEpisodeListActionTypes,
  ISingleEpisodeAction
} from '../actions/singleEpisodeListAction'
import { IEpisode } from '../../types'

export interface ISingleEpisodeListState {
  readonly payload: IEpisode[]
}

const initialSingleEpisodeListState: ISingleEpisodeListState = {
  payload: []
}

export const singleEpisodeListReducer: Reducer<
  ISingleEpisodeListState,
  ISingleEpisodeAction
> = (state = initialSingleEpisodeListState, action) => {
  switch (action.type) {
    case SingleEpisodeListActionTypes.FETCH_SINGLE_EPISODE: {
      return {
        ...state,
        payload: [...state.payload, action.payload]
      }
    }
    default:
      return state
  }
}
