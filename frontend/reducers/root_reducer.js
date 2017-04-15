import { combineReducers } from 'redux';
import FolderReducer from './folder_reducer';
import ConsoleReducer from './console_reducer';

const RootReducer = combineReducers({
  currentFolder: FolderReducer,
  console: ConsoleReducer
});

export default RootReducer;
