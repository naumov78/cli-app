import React from 'react';

class Rules extends React.Component {
  constructor(props) {
    super(props)
    this.state = { show: false }
  }

  toggleRules() {
    this.setState({ show: !this.state.show })
  }


  getContent() {
    return (
      <div className="rules-text-container">
        <div className="rules-text">
          Command line application is a simulator of terminal command line.
          Users can perform commands on a fake file structure.
          Users can change color settings by click to corresponding buttons under the console.
        </div>

        <div className="rules-text">
          <span className="rule-title">Application commands are the following:</span><br /><br />
          <table className="commands-table">
            <tbody>
              <tr>
                <td>ls</td><td>get the list of folder and files in the current folder</td>
              </tr>
              <tr>
                <td>ls -s</td><td>get the list of folder and files and their sizes in the current folder</td>
              </tr>
              <tr>
                <td>ls -t</td><td>get the list of folder and files and their update date/time in the current folder</td>
              </tr>
              <tr>
                <td>cd (FolderName)</td><td>go into corresponding folder</td>
              </tr>
              <tr>
                <td>cd..</td><td>go up one level</td>
              </tr>
              <tr>
                <td>mkdir (FolderName)</td><td>create new folder</td>
              </tr>
              <tr>
                <td>rndir (OldFolderName) (NewFolderName)</td><td>rename folder</td>
              </tr>
              <tr>
                <td>rmdir (FolderName)</td><td>delete folder</td>
              </tr>
              <tr>
                <td>rn (FileName)</td><td>rename file</td>
              </tr>
              <tr>
                <td>rm (FileName)</td><td>delete file</td>
              </tr>
              <tr>
                <td>date</td><td>current time/date</td>
              </tr>
              <tr>
                <td>touch (ItemName)</td><td>update file/folder timestamps</td>
              </tr>
              <tr>
                <td>c</td><td>clear console</td>
              </tr>
            </tbody>
          </table>
          <br />
          <span className="rule-title">The app handles the following errors</span><br /><br />
          - folder/file not found (with commands: cd, rndir, rmdir, rn, rm, touch)<br />
          - need folder name (with commands mkdir, rndir)<br />
          - root folder (with command cd..)<br />
          - folder not empty (with rmdir)<br />
          - command not found (with unknown commands)<br />
          <br />
          Folder names can not include dots and blank spaces.
        </div>

        <div className="fs-text">
          <span className="rule-title">Initial File Structure</span>
          <br />
          /root<br />
            &nbsp;&nbsp;- MyFiles<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Pictures<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maldives.jpg<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vacation.png<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cartoon.gif<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Documents<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resume.doc<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;schedule.xls<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;products.ppt<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;biography.doc<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;income.xls<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;letter.doc<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;utilities.xls<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;shipping.txt<br />
            &nbsp;&nbsp;- Projects<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- History<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;story.doc<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tale.doc<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;song.doc<br />
              &nbsp;&nbsp;&nbsp;&nbsp;project1.doc<br />
              &nbsp;&nbsp;&nbsp;&nbsp;calculations.xls<br />
              &nbsp;&nbsp;&nbsp;&nbsp;project2.doc<br />
            &nbsp;&nbsp;setup.ini<br />
            &nbsp;&nbsp;civ.exe
        </div>

      </div>
    )
  }



  render() {
    if (this.state.show) {
      return (
        <div className="rules-container">
          <div>
            <a onClick={() => this.toggleRules()}>
              Instructions <span><i className="fa fa-caret-up" aria-hidden="true"></i></span>
            </a>
          </div>
          {this.getContent()}
        </div>
      )
    } else {
      return (
        <div className="rules-container">
          <a onClick={() => this.toggleRules()}>
            Instructions <span><i className="fa fa-caret-down" aria-hidden="true"></i></span>
          </a>
        </div>
      )
    }
  }



}


export default Rules;


// Command line application is a simulator of terminal command line.
// Users can perform command on a fake file structure.
// Users can change color settings by click to corresponding buttons under the console.
// Application commands are the following:
//
// ls - get the list of folder and files in the current folder
// ls -s get the list of folder and files and their sizes in the current folder
// ls -t get the list of folder and files and their update date/time in the current folder
// cd <FolderName> - go into corresponding folder
// cd.. - go up one level
// mkdir <FolderName> - create new folder
// rndir <OldFolderName> <NewFolderName> - rename folder
// rmdir <FolderName> - delete folder
// rn <FileName> - rename file
// rm <FileName> - delete file
// date - current time/date
// touch <ItemName> - update file/folder timestamps
// c - clear console
//
// The app handles the following errors
// - folder/file not found (with commands: cd, rndir, rmdir, rn, rm, touch)
// - need folder name (with commands mkdir, rndir)
// - root folder (with command cd..)
// - folder not empty (with rmdir)
// - command not found (with unknown commands)
//
// Folder names can't include dots and blank spaces.
//
// Initial File Structure
//
// /root
//   -MyFiles
//     -Pictures
//       maldives.jpg
//       vacation.png
//       cartoon.gif
//     -Documents
//       resume.doc
//       schedule.xls
//       products.ppt
//       biography.doc
//       income.xls
//     letter.doc
//     utilities.xls
//     shipping.txt
//   -Projects
//     -History
//       story.doc
//       tale.doc
//       song.doc
//     project1.doc
//     calculations.xls
//     project2.doc
//   setup.ini
//   civ.exe
