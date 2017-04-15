import { RECEIVE_RECORDS } from '../actions/record_actions';
import merge from 'lodash/merge';

const initState = {}

const ConsoleReducer = (state = initState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RECORDS:
      const newState = Object.assign({}, state, action.records)
      debugger
      return newState;
    default:
      return state;
  }
}

export default ConsoleReducer;
