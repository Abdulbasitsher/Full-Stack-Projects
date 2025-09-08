import { combineReducers } from "redux";
import alert from "./alert.js"
import auth from './auth.js'

// put your reducers inside {}
const rootReducer = combineReducers({
  alert,
  auth
  // auth: authReducer,
  // posts: postReducer,
})

export default rootReducer
