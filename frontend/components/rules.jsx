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
            <span className="level1">- MyFiles</span><br />
              <span className="level2">- Pictures</span><br />
                <span className="level3">maldives.jpg</span><br />
                <span className="level3">vacation.png</span><br />
                <span className="level3">cartoon.gif</span><br />
              <span className="level2">- Documents</span><br />
                <span className="level3">resume.doc</span><br />
                <span className="level3">schedule.xls</span><br />
                <span className="level3">products.ppt</span><br />
                <span className="level3">biography.doc</span><br />
                <span className="level3">income.xls</span><br />
              <span className="level2">letter.doc</span><br />
              <span className="level2">utilities.xls</span><br />
              <span className="level2">shipping.txt</span><br />
            <span className="level1">- Projects</span><br />
              <span className="level2">- History</span><br />
                <span className="level3">story.doc</span><br />
                <span className="level3">tale.doc</span><br />
                <span className="level3">song.doc</span><br />
              <span className="level2">project1.doc</span><br />
              <span className="level2">calculations.xls</span><br />
              <span className="level2">project2.doc</span><br />
            <span className="level1">setup.ini</span><br />
            <span className="level1">civ.exe</span>
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
