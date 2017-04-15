
export const fetchRecords = () => {
  return $.ajax({
    method: "GET",
    url: 'api/records'
  })
}

export const createRecord = (record) => {
  return $.ajax({
    method: "POST",
    url: 'api/records',
    data: { record_line: { record_list: record }}
  })
}
