import { combineReducers } from 'redux'

import StateExample from './reducer_example'

const rootReducer = combineReducers({
  example: StateExample
});

export default rootReducer