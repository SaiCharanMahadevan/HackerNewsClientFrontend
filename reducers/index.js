import { combineReducers } from 'redux'
import login from './login'
import hackernews from './hackernews'

const rootReducer = combineReducers({
  login,
  hackernews
})

export default rootReducer
