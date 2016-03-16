import * as types from '../constants/ActionTypes'

export function nextClicked() {
  console.log('action');
  return {
    type: types.NEXT_CLICKED
  }
}

export function prevClicked() {
  console.log('action');
  return {
    type: types.PREVIOUS_CLICKED
  }
}
