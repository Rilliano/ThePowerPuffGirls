import React from 'react'

import { connect } from 'react-redux'

//
import { IMainInfo } from './stateManagement/reducers/mainInfoReducer'
import { IAppState } from './stateManagement/reducers'

interface IProps {
  mainInfo: IMainInfo
}

const MainInfo: React.FC<IProps> = ({ mainInfo }) => {
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
    mainInfo: store.mainInfoState.payload
  }
}

export default connect(mapStateToProps)(MainInfo)
