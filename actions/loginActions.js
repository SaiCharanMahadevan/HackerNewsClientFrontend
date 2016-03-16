import * as types from '../constants/ActionTypes'

export function loginClicked() {
  console.log('action');
  return {
    type: types.LOGIN_CLICKED
  }
}

export function logOutClicked() {
  console.log('action');
  return {
    type: types.LOGOUT_CLICKED
  }
}
