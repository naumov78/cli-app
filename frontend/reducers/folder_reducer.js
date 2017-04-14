import { RECEIVE_FOLDER } from '../actions/folder_actions';
import merge from 'lodash/merge';

const initState = {}

const FolderReducer = (state = initState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FOLDER:
      const newState = Object.assign({}, state, action.folder)
      debugger
      return newState;
    default:
      return state;
  }
}

export default FolderReducer;
