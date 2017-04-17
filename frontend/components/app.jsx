import React from 'react';
import ConsoleContainer from './console_container';
import InputContainer from './input_container';
import Rules from './rules';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { color: 'white' }
  }

  render() {
    return (
      <div className="app-container">
        <div className="left-block">
          <Rules />
        </div>
        <div className="right-block">
          <ConsoleContainer color={this.state.color} />
          <InputContainer color={this.state.color} />
          <div className="color-buttons-container">
            <input type='submit' id='white' onClick={() => this.setState({ color: 'white' })} value="White" />
            <input type='submit' id='black' onClick={() => this.setState({ color: 'black' })} value="Black" />
            <input type='submit' id='green' onClick={() => this.setState({ color: 'green' })} value="Green" />
            <input type='submit' id='blue' onClick={() => this.setState({ color: 'blue' })} value="Blue" />
          </div>
          <div className="copyright">command line app | created by <a href="https://www.linkedin.com/in/aleksei-naumov/" target="_blank">Aleksei Naumov</a></div>
        </div>
      </div>
    )
  }

}

export default App;
