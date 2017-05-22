import React from 'react';
import ConsoleContainer from './console_container';
import InputContainer from './input_container';
import Rules from './rules';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { color: 'white', leftLight: true, middleCount: 0, middleLight: false, leftIntervalID: null, middleTimerId: null }
    this.changeLight = this.changeLight.bind(this)
    this.middleLight2 = this.middleLight2.bind(this)
    this.changeMiddleLight = this.changeMiddleLight.bind(this)
    this.changeMiddle = this.changeMiddle.bind(this)
  }

  componentDidMount() {
    const leftLightID = setInterval(this.changeLight, 700);
    const middleLightID = setInterval(this.middleLight2, 5000);
    this.setState({ leftIntervalID: leftLightID, middleTimerId: middleLightID })

  }

  componentWillUnmount() {
    clearInterval(this.state.leftIntervalID)
    clearInterval(this.state.middleTimerId)
  }


  changeMiddle() {
    this.setState({ middleLight: !this.state.middleLight })
  }

  middleLight2() {
    for (let i = 0; i < 10; i++) {
      const blink = setInterval(this.changeMiddle, 50);
      if (i === 9) {
        debugger
        clearInterval(blink);
      }
    }
  }

  changeLight() {
    this.setState({ leftLight: !this.state.leftLight })
  }

  getLeftLightClass() {
    if (this.state.leftLight) {
      return "light-on"
    } else {
      return "light-off"
    }
  }

  getMiddleLightClass() {
    if (this.state.middleLight) {
      return "light-on"
    } else {
      return "light-off"
    }
  }

  render() {
    return (
      <div className="app-container">
        <div className="left-block">
          <Rules />
        </div>
        <div className="right-block">
          <div className="monitor">
            <div className="top-camera"></div>
            <div className="screen">
              <ConsoleContainer color={this.state.color} />
              <InputContainer color={this.state.color} />
            </div>
          </div>
          <div className="keyboard">
            <div className="lights">
              <span id="left-light" className={`light ${this.getLeftLightClass()} `}></span>
              <span className={`light ${this.getMiddleLightClass()}`}></span>
              <span className="light light-off"></span>
            </div>
          </div>
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


// changeMiddleLight() {
//   this.setState({ middleCount: this.state.middleCount + 1, middleLight: !this.state.middleLight })
// }



// window.addEventListener('keypress', function(e){
//   debugger
//   const key = e.keyCode||e.whitch
//   if(key === 13) {
//     debugger
//     middleLight2();
//   }
// })

// middleLight() {
//   if (this.state.middleCount < 7) {
//     const changeMiddleID = setInterval(this.changeMiddleLight, 200)
//     console.log(this.state.middleCount);
//   } else {
//     console.log(this.state.middleCount);
//     this.setState({ middleLight: false, middleCount: 0 })
//     clearInterval(changeMiddleID);
//   }
// }
