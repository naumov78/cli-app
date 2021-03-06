import * as APIUTil from '../util/record_api_util';

export const RECEIVE_RECORDS = 'RECEIVE_RECORDS';

export const receiveRecords = (records) => {
  return {
    type: RECEIVE_RECORDS,
    records: records
  }
}

export const fetchRecords = () => {
  return (dispatch) => {
    return APIUTil.fetchRecords().then((records) => {
      return dispatch(receiveRecords(records))
    })
  }
}

export const createRecord = (record) => {
  return (dispatch) => {
    return APIUTil.createRecord(record).then((records) => {
      return dispatch(receiveRecords(records))
    })
  }
}


export const deleteRecords = (id) => {
  return (dispatch) => {
    return APIUTil.deleteRecords(id).then((records) => {
      return dispatch(receiveRecords(records))
    })
  }
}
