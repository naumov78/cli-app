import React from 'react';
import { connect } from 'react-redux';
import { fetchRecords, createRecord } from '../actions/record_actions';
import Console from './console';

const mapStateToProps = (state) => {
  debugger
  return ({
    console: state.console
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecords: () => dispatch(fetchRecords()),
    createRecord: (record) => dispatch(createRecord(record))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Console);
