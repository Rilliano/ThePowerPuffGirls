import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// State Management
import { IAppState } from './stateManagement/reducers'
import { IMainInfo } from './stateManagement/reducers/mainInfoReducer'

// Components
import Header from './components/Header'

// PageTypes
import Home from './pageTypes/Home'
import EpisodeDetail from './pageTypes/EpisodeDetail'

// Styles
import GlobalStyle from './styles'

interface IProps {
  mainInfo: IMainInfo | undefined
}

const App: React.FC<IProps> = ({ mainInfo }) => {
  return (
    <Router>
      <GlobalStyle />
      {mainInfo && <Header name={mainInfo.name} image={mainInfo.image} />}

      <Route path="/" exact component={Home} />
      <Route path="/episode/:id" component={EpisodeDetail} />
    </Router>
  )
}

const mapStateToProps = (store: IAppState) => {
  return {
    mainInfo: store.mainInfoState.payload
  }
}

export default connect(mapStateToProps)(App)
