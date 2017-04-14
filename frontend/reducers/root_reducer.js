import { combineReducers } from 'redux';
import FolderReducer from './folder_reducer';

const RootReducer = combineReducers({
  currentFolder: FolderReducer
});

export default RootReducer;
