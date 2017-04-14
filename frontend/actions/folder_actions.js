import * as APIUtils from '../util/folder_api_util';

export const RECEIVE_FOLDER = "RECEIVE_FOLDER"


export const receiveFolder = (folder) => {
  debugger
  return {
    type: RECEIVE_FOLDER,
    folder: folder
  }
}

//  folders

export const fetchFolder = (id) => {
  return (dispatch) => {
    return APIUtils.fetchFolder(id).then((result) => {
      return dispatch(receiveFolder(result));
    });
  }
}

export const createFolder = (name, parentFolderId) => {
  return (dispatch) => {
    return APIUtils.createFolder(name, parentFolderId).then((result) => {
      return dispatch(receiveFolder(result));
    });
  }
}

export const renameFolder = (id, newName) => {
  return (dispatch) => {
    return APIUtils.renameFolder(id, newName).then((result) => {
      return dispatch(receiveFolder(result));
    });
  }
}

export const deleteFolder = (id) => {
  return (dispatch) => {
    return APIUtils.deleteFolder(id).then((result) => {
      return dispatch(receiveFolder(result));
    });
  }
}

// items

export const renameItem = (id, newName) => {
  return (dispatch) => {
    return APIUtils.renameItem(id, newName).then((result) => {
      return dispatch(receiveFolder(result));
    });
  }
}

export const deleteItem = (id) => {
  return (dispatch) => {
    return APIUtils.deleteItem(id).then((result) => {
      return dispatch(receiveFolder(result));
    });
  }
}
