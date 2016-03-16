import ActionTypes from '../actions/loginActions';
import Immutable from 'immutable';
import { LOGIN_CLICKED, LOGOUT_CLICKED } from '../constants/ActionTypes'

export const initialState = Immutable.fromJS({
  isAuthorized: false,
  redirectToHackerPage: false
})

export function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_CLICKED:
      return Object.assign({}, state, {
        isAuthorized: true,
        redirectToHackerPage: true
      });
    case LOGOUT_CLICKED:
      return Object.assign({}, state, {
        isAuthorized: false,
        redirectToHackerPage: false
      });
    default:
      return state
  }
}

export default login
