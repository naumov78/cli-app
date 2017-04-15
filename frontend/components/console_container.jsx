import React from 'react';
import { connect } from 'react-redux';
import { fetchRecords, createRecord, deleteRecords } from '../actions/record_actions';
import Console from './console';

const mapStateToProps = (state) => {
  return ({
    console: state.console
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecords: () => dispatch(fetchRecords()),
    createRecord: (record) => dispatch(createRecord(record)),
    deleteRecords: (id) => dispatch(deleteRecords(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Console);
