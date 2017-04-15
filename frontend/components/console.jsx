import React from 'react';


class Console extends React.Component {

  constructor(props) {
    super(props)
    this.state = { records: null }
  }

  componentDidMount() {
    this.props.fetchRecords().then((result) => {
      debugger
      this.setState({ records: result.records.records })
    })
  }

  getContent() {
  const records = this.state.records
  return (
     <div className="records-list">
       <ul>
         {records.map((record, i) => {
           debugger
           return (
           <li key={i}>
               <ul>
                 {this.getRecordLine(record).map((el, i) => {
                   debugger
                   return (
                     <li key={i}>
                       {el}
                     </li>
                   )
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
    // /$ ls |My_Files Projects setup.ini civ.exe
    // ['/$', 'ls', '|My_Files', 'Projects', 'setup.ini', 'civ.exe']
    // ['/$', 'ls'] ['|My_Files', 'Projects', 'setup.ini', 'civ.exe']
    // ['/$', 'cd', 'Projects']
    debugger
    let record = incomingRecord.record_list.split("|")
    debugger
    if (record.length > 1) {
      debugger
      const splited = record[1].split(" ")
      debugger
      const firstEl = record[0];
      splited.push(firstEl)
      record = splited;
    }
    return record;
  }


  componentWillReceiveProps(nextProps) {
    debugger
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
