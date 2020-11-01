import * as reducers from './reducers/index'
import { createStore, combineReducers } from 'redux'

export default createStore(combineReducers({
    ...reducers
  }));