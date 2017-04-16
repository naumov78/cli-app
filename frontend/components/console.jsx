import React from 'react';


class Console extends React.Component {

  constructor(props) {
    super(props)
    this.state = { records: null, color: this.props.color }
  }


  componentDidMount() {
    debugger
    this.props.deleteRecords(1).then((result) => {
      this.setState({ records: result.records.records })
    })
  }

  getStyle() {
    if (this.state.color === 'black') {
      return ['main-container-black', 'old-path-black', 'old-records-black']
    } else if (this.state.color === 'green') {
      return ['main-container-green', 'old-path-green', 'old-records-green']
    } else if (this.state.color === 'blue') {
      return ['main-container-blue', 'old-path-blue', 'old-records-blue']
    } else {
      return ['main-container', 'old-path', 'old-records']
    }
  }


  getContent() {
  const records = this.state.records
  return (
     <div>
       <ul>
         {records.map((record, i) => {
           return (
           <li key={i}>
               <ul>
                 {this.getRecordLine(record).map((el, i) => {
                   if (i === 0) {
                     return (
                       <li key={i} className={this.getStyle()[1]}>
                         {el}
                       </li>
                     )
                   } else {
                     return (
                       <li key={i} className={this.getStyle()[2]}>
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
      this.setState({ records: nextProps.console.records, color: nextProps.color })
    }
  }

  render() {
    if (this.state.records) {
      return (
        <div className={this.getStyle()[0]}>
          {this.getContent()}
        </div>
      )
    } else {
      return (
        <div className={this.getStyle()[0]}>

        </div>
      )
    }
  }


}



export default Console;
