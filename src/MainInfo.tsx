import React, { useEffect } from 'react'

import { connect, useDispatch } from 'react-redux'

//
import { IMainInfo } from './stateManagement/reducers/mainInfoReducer'
import { IEpisode } from './stateManagement/reducers/episodeListReducer'
import { IAppState } from './stateManagement/reducers'
import { getEpisodeList } from './stateManagement/actions'

interface IProps {
  mainInfo: IMainInfo | undefined
  episodeList: IEpisode[]
}

const MainInfo: React.FC<IProps> = ({ mainInfo, episodeList }) => {
  console.log('episodeList', episodeList)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getEpisodeList())
  }, [])

  return (
    <div>
      {mainInfo && (
        <header className="App-header">
          {mainInfo.image && (
            <img src={mainInfo.image.medium} className="App-logo" alt="logo" />
          )}
          {mainInfo.name}
          <br />
          <br />
          {mainInfo.summary}
        </header>
      )}
    </div>
  )
}

const mapStateToProps = (store: IAppState) => {
  return {
    mainInfo: store.mainInfoState.payload,
    episodeList: store.episodeListState.payload
  }
}

export default connect(mapStateToProps)(MainInfo)
