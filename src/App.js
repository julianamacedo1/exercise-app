//https://medium.com/@peterjd42/building-timers-in-react-stopwatch-and-countdown-bc06486560a2

import React from "react"

export default class Stopwatch extends React.Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
    };

    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, 10);
    };

    stopTimer = () => {
        this.setState({ timerOn: false });
        clearInterval(this.timer);
    };

    resetTimer = () => {
        this.setState({
            timerStart: 0,
            timerTime: 0
        });
    };

    render() {
        const { timerTime } = this.state;
        let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        return (
            <>
                <p style={{ "margin": "10px 5px 5px 5px", "font-family": "courier" }}>
                    Timer: {minutes} : {seconds} : {centiseconds}
                </p>
                {this.state.timerOn === false && this.state.timerTime === 0 && (
                    <button onClick={this.startTimer} style={{ "margin": "3px", "font-family": "courier" }}>Start</button>
                )}
                {this.state.timerOn === true && (
                    <button onClick={this.stopTimer} style={{ "margin": "3px", "font-family": "courier" }}>Stop</button>
                )}
                {this.state.timerOn === false && this.state.timerTime > 0 && (
                    <button onClick={this.startTimer} style={{ "margin": "3px", "font-family": "courier" }}>Resume</button>
                )}
                {this.state.timerOn === false && this.state.timerTime > 0 && (
                    <button onClick={this.resetTimer} style={{ "margin": "3px", "font-family": "courier" }}>Reset</button>
                )}
            </>   
        );
    }
}

import RepetitionExercise from "./components/RepetitionExercise"
import DurationExercise from "./components/DurationExercise"

const MENU = "menu"
const REPETITION_EXERCISE = "repetition_exercise"
const DURATION_EXERCISE = "duration_exercise"

class MenuScreen extends React.Component {
  constructor(props) {
    super(props)
    let objects = [
      { objType: "number", name: "Push Ups", value: 0 },
      { objType: "timer", name: "Bicycling" },
      { objType: "number", name: "Jumping Jacks", value: 0 },
      { objType: "timer", name: "Running" },
      { objType: "number", name: "Sit Ups", value: 0 }
    ]
    this.state = {
      currentScreen: MENU,
      selectedItem: undefined,
      currentObjects: objects,
      filterNumberedItems: false
    }
  } 
  
  updateValue(newValue) {
    let propertyName = this.state.selectedItem.objType === "number" ? "value" : "timer"
    this.setState((prevState) => {
      let objectToUpdate = prevState.currentObjects.find(
        (obj) => obj === this.state.selectedItem
      )
      objectToUpdate[propertyName] = newValue
      return { currentObjects: this.state.currentObjects }
    })
  }
  render() {
    let screen
    switch (this.state.currentScreen) {
      case MENU:
        let filteredArray = this.state.filterNumberedItems
          ? this.state.currentObjects.filter(
            (item) => item.objType === "number"
          )
          : this.state.currentObjects
        screen = (
          <>
            <h2 style={{ "margin": "10px 5px 5px 5px", "font-family": "courier" }}>Go Do Something!</h2>
            <p style={{ "margin": "10px 5px 5px 5px", "font-family": "courier" }}>Select an exercise:</p>
            <ul style={{ "padding": "5px", "list-style-type": "none" }}>
              {filteredArray.map((obj, index) =>
                <li key={index}>
                  <button
                    style={{ "margin": "3px", "font-family": "courier"}}
                    onClick={() =>
                      this.setState({
                        currentScreen:
                          obj.objType === "number"
                            ? REPETITION_EXERCISE
                            : DURATION_EXERCISE,
                        selectedItem: obj
                      })
                    }
                  >{obj.name}</button>
                </li>
              )}
            </ul>
          </>
        )
        break
      case REPETITION_EXERCISE:
        screen = (
          <>
            <RepetitionExercise
              {...this.state.selectedItem}
              updateValue={(value) => this.updateValue(value)}
            ></RepetitionExercise>
            <button onClick={() => this.setState({ currentScreen: MENU })}
              style={{ "margin": "3px", "font-family": "courier" }}
            >
              Back
            </button>
          </>
        )
        break
      case DURATION_EXERCISE:
        screen = (
          <>
            <DurationExercise
              {...this.state.selectedItem}
            ></DurationExercise>
            <button onClick={() => this.setState({ currentScreen: MENU })}
              style={{ "margin": "3px", "font-family": "courier" }}
            >
              Back
            </button>
          </>
        )
        break
      default:
        screen = undefined
    }
    return screen
  }
}

export default class App extends React.Component {
  render() {
    return <MenuScreen></MenuScreen>
  }
}