import { combineReducers } from 'redux'

// Reducer imports
import { mainInfoReducer, IMainInfoState } from './mainInfoReducer'
import { episodeListReducer, IEpisodeListState } from './episodeListReducer'

export interface IAppState {
  mainInfoState: IMainInfoState
  episodeListState: IEpisodeListState
}

export const rootReducer = combineReducers<IAppState>({
  mainInfoState: mainInfoReducer,
  episodeListState: episodeListReducer
})
