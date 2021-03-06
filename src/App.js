import React from "react"
import RepetitionExercise from "./components/RepetitionExercise"
import DurationExercise from "./components/DurationExercise"
import TotalExercise from "./components/TotalExercise"
import "./App.css"

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
      { objType: "number", name: "Sit Ups", value: 0 },
      { objType: "timer", name: "Planking" },
      { objType: "number", name: "Squats", value: 0 }
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
            <TotalExercise></TotalExercise>
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