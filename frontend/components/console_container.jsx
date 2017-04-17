import React from 'react';
import { connect } from 'react-redux';
import { fetchRecords, deleteRecords } from '../actions/record_actions';
import Console from './console';

const mapStateToProps = (state) => {
  return ({
    console: state.console
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecords: () => dispatch(fetchRecords()),
    deleteRecords: (id) => dispatch(deleteRecords(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Console);
