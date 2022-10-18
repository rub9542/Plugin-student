import { combineReducers } from 'redux'
import authReducer from 'modules/Auth/reducers'
import registerReducers from '../modules/Onboarding/Register/reducers'
import { onboarding } from '../modules/Onboarding/reducers'

export default combineReducers({
  auth: authReducer,
  register: registerReducers,
  studentData: onboarding,
})
