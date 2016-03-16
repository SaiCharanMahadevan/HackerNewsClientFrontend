import ActionTypes from '../actions/loginActions';
import Immutable from 'immutable';
import { NEXT_CLICKED, PREVIOUS_CLICKED, LOGIN_CLICKED } from '../constants/ActionTypes'
var data = require('../mocks/HackerNews.json');

export const initialState = Immutable.fromJS({
  data: data,
  dataIndex: 0,
  currPage: 1,
  prevPage: null,
  nextPage: 2

})

export function hackernews(state = initialState, action) {
  switch (action.type) {
    case LOGIN_CLICKED:
      return Object.assign({}, state, {
        data: data,
        dataIndex: 0,
        currPage: 1,
        prevPage: null,
        nextPage: 2,
      });
    case NEXT_CLICKED:
      return Object.assign({}, state, {
        dataIndex: state.currPage,
        currPage: state.currPage + 1,
        prevPage: state.prevPage + 1,
        nextPage: state.nextPage + 1
      });
    case PREVIOUS_CLICKED:
      console.log('giving the new hacker');
      return Object.assign({}, state, {
        dataIndex: state.prevPage - 1,
        currPage: state.currPage - 1,
        prevPage: state.prevPage - 1,
        nextPage: state.nextPage - 1
      });
    default:
      return state
  }
}

export default hackernews
