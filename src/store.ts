import { applyMiddleware, createStore, compose } from 'redux'
import reducer from './redux/rootReducer'
import thunk from 'redux-thunk'

interface WindowWithReduxExtension extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: <R>(a: R) => R
}

/* eslint-disable no-underscore-dangle */

const configureStore = () => {
  const composeEnhancers =
    process.env.NODE_ENV !== 'production'
      ? (window as WindowWithReduxExtension)
          .__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
      : compose

  const enhancers = composeEnhancers(applyMiddleware(thunk))
  const store = createStore(reducer, {}, enhancers)

  return store
}

/* eslint-enable */

const store = configureStore()

const rootState = store.getState()
export type RootState = typeof rootState

export default store