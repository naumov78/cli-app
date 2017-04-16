import React from 'react';


class Console extends React.Component {

  constructor(props) {
    super(props)
    this.state = { records: null, color: this.props.color }
  }


  componentDidMount() {
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

  getTimeDetails(string) {
    const result = []
    const lines = string.split(" ")
    lines.forEach(line => {
      const inner_line = line.split(",")
        const newDate = inner_line[0].split('*').join(' ');
        const newLine = newDate + " | " + inner_line[1]
        result.push(newLine);
    })
    return result;
  }

  getSizeDetails(string) {
    const result = []
    const lines = string.split(" ")
    lines.forEach(line => {
      const inner_line = line.split(",")
        const newSize = inner_line[0]
        const newLine = newSize + " - " + inner_line[1]
        result.push(newLine);
    })
    return result;
  }

  getRecordLine(incomingRecord) {
    debugger
    let record = incomingRecord.record_list.split("|")
    if (record.length > 1) {
      let splited = record[1].split(" ")
      if (record[1].includes("*")) {
        debugger
        splited = this.getTimeDetails(record[1])
      } else {
        splited = this.getSizeDetails(record[1])
      }
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
