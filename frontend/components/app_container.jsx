import React from 'react';
import { connect } from 'react-redux';
import { fetchFolder, createFolder, renameFolder, deleteFolder, renameItem, deleteItem } from '../actions/folder_actions';
import App from './app';

const mapStateToProps = (state) => {
  debugger
  return ({
    folder: state.currentFolder
  })
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchFolder: (id) => dispatch(fetchFolder(id)),
    createFolder: (name, parentFolderId) => dispatch(createFolder(name, parentFolderId)),
    renameFolder: (id, newName) => dispatch(renameFolder(id, newName)),
    deleteFolder: (id) => dispatch(deleteFolder(id)),
    renameItem: (id, newName) => dispatch(renameItem(id, newName)),
    deleteItem: (id) => dispatch(deleteItem(id))
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
