import { combineReducers } from 'redux'

// Reducer imports
import { mainInfoReducer, IMainInfoState } from './mainInfoReducer'

export interface IAppState {
  mainInfoState: IMainInfoState
}

export const rootReducer = combineReducers<IAppState>({
  mainInfoState: mainInfoReducer
})
