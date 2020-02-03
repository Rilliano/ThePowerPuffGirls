import { combineReducers } from 'redux'

// Reducer imports
import { mainInfoReducer, IMainInfoState } from './mainInfoReducer'
import { episodeListReducer, IEpisodeListState } from './episodeListReducer'
import {
  singleEpisodeListReducer,
  ISingleEpisodeListState
} from './singleEpisodeListReducer'

export interface IAppState {
  mainInfoState: IMainInfoState
  episodeListState: IEpisodeListState
  singleEpisodeListState: ISingleEpisodeListState
}

export const rootReducer = combineReducers<IAppState>({
  mainInfoState: mainInfoReducer,
  episodeListState: episodeListReducer,
  singleEpisodeListState: singleEpisodeListReducer
})
