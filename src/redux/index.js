// this is where the store will reside

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from 'src/redux/reducers'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

const middlewares = [thunk]

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)))

export default store