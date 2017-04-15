import React from 'react';


class Console extends React.Component {

  constructor(props) {
    super(props)
    this.state = { records: null }
  }


  componentDidMount() {
    this.props.deleteRecords(1).then((result) => {
      this.setState({ records: result.records.records })
    })
  }

  getContent() {
  const records = this.state.records
  return (
     <div className="records-list">
       <ul>
         {records.map((record, i) => {
           return (
           <li key={i}>
               <ul>
                 {this.getRecordLine(record).map((el, i) => {
                   if (i === 0) {
                     return (
                       <li key={i} className="old-path">
                         {el}
                       </li>
                     )
                   } else {
                     return (
                       <li key={i}>
                         {el}
                       </li>
                     )
                   }
                 })}
               </ul>
           </li>
           )
         })}
       </ul>
     </div>
   )
  }

  getRecordLine(incomingRecord) {
    let record = incomingRecord.record_list.split("|")
    if (record.length > 1) {
      const splited = record[1].split(" ")
      const firstEl = record[0];
      splited.unshift(firstEl)
      record = splited;
    }
    return record;
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({ records: nextProps.console.records })
    }
  }




  render() {
    if (this.state.records) {
      return (
        <div className="main-container">
          {this.getContent()}
        </div>
      )
    } else {
      return (
        <div className="main-container">

        </div>
      )
    }
  }


}



export default Console;
