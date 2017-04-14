import React from 'react';
import List from './ls';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { folders: [], items: [], currentFolder: null, input: "", list: false, options: null }
    this.getCommand = this.getCommand.bind(this)
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.props.fetchFolder(0).then((result) => {
      this.setState({ folders: result.folder.folders, items: result.folder.items });
    })
  }

// this.setState({ folders: result.folder.folders, items: result.folder.items });

  componentWillReceiveProps(nextProps) {
    debugger
    if (this.props !== nextProps) {
      this.setState({ folders: nextProps.folder.folders, items: nextProps.folder.items, input: "", list: false });
    }
  }

  update(e) {
    e.preventDefault();
    this.setState({ input: e.currentTarget.value })
  }

  // commands

  listFiles() {
    const folders = this.props.folder.folders
    const items = this.props.folder.items
    switch (this.state.options) {
    case null:
     return (
        <div>
          <ul>
            {folders.map((folder, i) => {
              return (
              <li key={i}>
                <span>{folder.name}</span>
              </li>
              )
            })}
          </ul>
          <ul>
            {items.map((item, i) => {
              return (
              <li key={i}>
                <span>{`${item.name}.${item.ext}`}</span>
              </li>
              )
            })}
          </ul>
        </div>
      )
    case '-s':
    return (
       <div>
         <ul>
           {folders.map((folder, i) => {
             return (
             <li key={i}>
               <span>{`${folder.size}  `} </span>
               <span>{folder.name}</span>
             </li>
             )
           })}
         </ul>
         <ul>
           {items.map((item, i) => {
             return (
             <li key={i}>
               <span>{`${item.size}  `} </span>
               <span>{`${item.name}.${item.ext}`}</span>
             </li>
             )
           })}
         </ul>
       </div>
     )
    case '-t':
    return (
       <div>
         <ul>
           {folders.map((folder, i) => {
             return (
             <li key={i}>
               <span>{`${folder.updated_at}  `} </span>
               <span>{folder.name}</span>
             </li>
             )
           })}
         </ul>
         <ul>
           {items.map((item, i) => {
             return (
             <li key={i}>
               <span>{`${item.updated_at}  `} </span>
               <span>{`${item.name}.${item.ext}`}</span>
             </li>
             )
           })}
         </ul>
       </div>
     )
    default:
      return;
    }
  }

  // listSingleItem(name) {
  //   if (name) {
  //     const items = this.props.folder.items
  //     return (
  //       <ul>
  //         {items.map((item, i) => {
  //           if (item.name === name) {
  //             return (
  //             <li key={i}>
  //               <span>{`${item.name}.${item.ext}`}</span>
  //             </li>
  //             )
  //           }
  //         })}
  //       </ul>
  //     )
  //   } else {
  //     return null;
  //   }
  // }

  createFolder(name) {
    const parentFolderId = this.props.folder.id
    this.props.createFolder(name, parentFolderId).then((result) => {
      this.props.fetchFolder(this.props.folder.id).then((result) => {
        debugger
        this.setState({ folders: result.folder.folders, items: result.folder.items, input: "" });
      })
    })
  }

  renameFolder(name, newName) {
    let id;
    this.props.folder.folders.forEach((folder) => {
      if (folder.name === name) id = folder.id
    })
    this.props.renameFolder(id, newName).then((result) => {
      this.props.fetchFolder(this.props.folder.id).then((result) => {
        this.setState({ folders: result.folder.folders, items: result.folder.items, input: "" });
      })
    })
  }


  deleteFolder(name) {
    let id;
    this.props.folder.folders.forEach((folder) => {
      if (folder.name === name) id = folder.id
    })
    this.props.deleteFolder(id).then((result) => {
      this.props.fetchFolder(this.props.folder.id).then((result) => {
        this.setState({ folders: result.folder.folders, items: result.folder.items, input: "" });
      })
    })
  }

  cd(name) {
    let id;
    this.props.folder.folders.forEach((folder) => {
      if (folder.name === name) id = folder.id
    })
    this.props.fetchFolder(id)
  }

  goBack() {
    debugger
    let id = this.props.folder.parent_folder_id
    this.props.fetchFolder(id)
  }

  // items (files)

  renameItem(name, newName) {
    let id;
    this.props.folder.items.forEach((item) => {
      if ((item.name + "." + item.ext) === name) id = item.id
    })
    this.props.renameItem(id, newName).then((result) => {
      this.props.fetchFolder(this.props.folder.id).then((result) => {
        this.setState({ folders: result.folder.folders, items: result.folder.items, input: "" });
      })
    })
  }

  deleteItem(name) {
    let id;
    this.props.folder.items.forEach((item) => {
      if ((item.name + "." + item.ext) === name) id = item.id
    })
    this.props.deleteItem(id).then((result) => {
      this.props.fetchFolder(this.props.folder.id).then((result) => {
        this.setState({ folders: result.folder.folders, items: result.folder.items, input: "" });
      })
    })
  }


  getCommand(e) {
    e.preventDefault();
    const commandLine = this.state.input.split(" ")
    const command = commandLine[0]
    const options = commandLine.slice(1)
    this.commandDispatcher(command, options)
  }

  commandDispatcher(command, options) {
    if (command === 'ls') {
      if(options[0]) {
        return this.setState({input: "", list: true, options: options[0]})
      }
      return this.setState({input: "", list: true, options: null})
    } else if(command === 'cd') {
      return this.cd(options[0]);
    } else if (command === 'cd..') {
      return this.goBack();
    } else if (command === 'mkdir') {
      return this.createFolder(options[0]);
    } else if (command === 'rmdir') {
      return this.deleteFolder(options[0]);
    } else if (command === 'rndir') {
      return this.renameFolder(options[0], options[1])
    } else if (command === 'rn') {
      return this.renameItem(options[0], options[1])
    } else if (command === 'rm') {
      return this.deleteItem(options[0])
    } else {
        return (
          <div>Unknown command</div>
        )
    }
  }

  path() {
    if (this.props.folder.name === "") {
      return <span>{`/$`}</span>
    } else {
      return (
        <span>{`${this.props.folder.path}/${this.props.folder.name}$`}</span>
      )
    }
  }

  render() {
    // debugger
    if (this.state.list) {
      return (
        <div className="main-container">
          {this.listFiles()}
          <form onSubmit={(e) => this.getCommand(e)}>
            {this.path()}<input autoFocus={true} className="input-field" type="text" onChange={(e) => this.update(e)} value={this.state.input}/>
          </form>
        </div>
      )
    } else {
      return (
        <div className="main-container">

          <form onSubmit={(e) => this.getCommand(e)}>
            {this.path()}<input autoFocus={true} className="input-field" type="text" onChange={(e) => this.update(e)} value={this.state.input}/>
          </form>
        </div>
      )
    }
  }


}




export default App;
