import 'react-app-polyfill/ie9'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import * as serviceWorker from './serviceWorker'

// State Management
import configureStore from './stateManagement/Store'
import { getMainInfo } from './stateManagement/actions'
import { IAppState } from './stateManagement/reducers'

// Components
import App from './App'

interface IProps {
  store: Store<IAppState>
}

const Root: React.SFC<IProps> = ({ store }) => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

// Generate the store
const store = configureStore()
store.dispatch(getMainInfo())

// Render the App
ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root') as HTMLElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
