import React from 'react';



class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = { folders: [], items: [], currentFolder: null, input: "", list: false, options: null }
    this.getCommand = this.getCommand.bind(this)
  }


  componentDidMount() {
    this.props.fetchFolder(0).then((result) => {
      this.setState({ folders: result.folder.folders, items: result.folder.items });
    })
  }


  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({ folders: nextProps.folder.folders, items: nextProps.folder.items, input: "", list: false });
    }
  }

  update(e) {
    e.preventDefault();
    debugger
    this.setState({ input: e.currentTarget.value })
  }

  // commands

  getDate() {
    const date = new Date(Date.now()).toString();
    this.props.createRecord(date).then(() => {
      this.setState({ input: "" })
    })
  }


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
    if (typeof name === 'undefined') {
      let path = this.path();
      const errorMesssage = path + " Need a folder name to create new folder"
      this.props.createRecord(errorMesssage).then(() => {
        this.setState({ input: "" })
      })
    }
    const parentFolderId = this.props.folder.id
    this.props.createFolder(name, parentFolderId).then((result) => {
      this.props.fetchFolder(this.props.folder.id).then((result) => {
        this.setState({ folders: result.folder.folders, items: result.folder.items, input: "" });
      })
    })
  }

  renameFolder(name, newName) {
    let id;
    this.props.folder.folders.forEach((folder) => {
      if (folder.name === name) id = folder.id
    })
    if (typeof id === 'undefined') {
      let path = this.path();
      const errorMesssage = path + " No such folder"
      this.props.createRecord(errorMesssage).then(() => {
        this.setState({ input: "" })
      })
    }
    this.props.renameFolder(id, newName).then((result) => {
      this.props.fetchFolder(this.props.folder.id).then((result) => {
        this.setState({ folders: result.folder.folders, items: result.folder.items, input: "" });
      })
    })
  }


  deleteFolder(name) {
    let id;
    this.props.folder.folders.forEach((folder) => {
      if (folder.name === name)
      id = folder.id
        if (folder.size > 0) id = 0
    })
    if (typeof id === 'undefined') {
      let path = this.path();
      const errorMesssage = path + " No such folder"
      this.props.createRecord(errorMesssage).then(() => {
        this.setState({ input: "" })
      })
    }
    if (id === 0) {
      const errorMesssage = path + " Folder is not empty"
      this.props.createRecord(errorMesssage).then(() => {
        this.setState({ input: "" })
      })
    }
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
    if (typeof id === 'undefined') {
      let path = this.path();
      const errorMesssage = path + " No such folder"
      this.props.createRecord(errorMesssage).then(() => {
        this.setState({ input: "" })
      })
    }
    this.props.fetchFolder(id)
  }

  goBack() {
    let id = this.props.folder.parent_folder_id
    if (!id) {
      let path = this.path();
      const errorMesssage = path + " You're in the root folder"
      this.props.createRecord(errorMesssage).then(() => {
        this.setState({ input: "" })
      })
    }
    this.props.fetchFolder(id)
  }

  // items (files)

  renameItem(name, newName) {
    let id;
    this.props.folder.items.forEach((item) => {
      if ((item.name + "." + item.ext) === name) id = item.id
    })
    if (typeof id === 'undefined') {
      let path = this.path();
      const errorMesssage = path + " No such file"
      this.props.createRecord(errorMesssage).then(() => {
        this.setState({ input: "" })
      })
    }
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
    if (typeof id === 'undefined') {
      let path = this.path();
      const errorMesssage = path + " No such file"
      this.props.createRecord(errorMesssage).then(() => {
        this.setState({ input: "" })
      })
    }
    this.props.deleteItem(id).then((result) => {
      this.props.fetchFolder(this.props.folder.id).then((result) => {
        this.setState({ folders: result.folder.folders, items: result.folder.items, input: "" });
      })
    })
  }


  getFoldersNames(folders) {
    const names = []
    folders.forEach(folder => {
      names.push(folder.name);
    })
    return names;
  }

  getItemsNames(items) {
    const names = []
    items.forEach(item => {
      names.push(item.name + '.' + item.ext);
    })
    return names;
  }

  getCommand(e) {
    e.preventDefault();
    let path = this.path();
    const commandLine = this.state.input.split(" ");
    const command = commandLine[0]
    path = path + " " + command;
    const options = commandLine.slice(1);
    const consoleOptions = commandLine.slice(1).join(" ");
    path += (" " + consoleOptions);
    const folders = this.getFoldersNames(this.props.folder.folders).join(" ");
    const items = this.getItemsNames(this.props.folder.items).join(" ");
    if (command === 'ls') {
      const list = path + "|" + folders + " " + items
      this.props.createRecord(list)
    } else {
      this.props.createRecord(path)
    }
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
      return this.renameFolder(options[0], options[1]);
    } else if (command === 'rn') {
      return this.renameItem(options[0], options[1]);
    } else if (command === 'rm') {
      return this.deleteItem(options[0]);
    } else if (command === "date") {
      return this.getDate();
    } else {
        return (
          <div>Unknown command</div>
        )
    }
  }


  path() {
    if (this.props.folder.name === "") {
      return `/$`
    } else {
      return (
        `~${this.props.folder.path}/${this.props.folder.name}$`
      )
    }
  }

// {this.listFiles()}

  render() {
    if (this.state.list) {
      return (
        <div className="input-container">

          <form onSubmit={(e) => this.getCommand(e)}>
            <span className="path">{this.path()} </span>
            <input autoFocus={true}
              className="input-field"
              type="text"
              onChange={(e) => this.update(e)}
              value={this.state.input}
              />
          </form>
        </div>
      )
    } else {
      return (
        <div className="input-container">

          <form onSubmit={(e) => this.getCommand(e)}>
            <span className="path">{this.path()} </span>
            <input autoFocus={true}
              className="input-field"
              type="text"
              onChange={(e) => this.update(e)}
              value={this.state.input}/>
          </form>
        </div>
      )
    }
  }


}




export default Input;
