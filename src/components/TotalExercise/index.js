import React from "react"

export default class TotalExercise extends React.Component {
    constructor(props) {
        super(props)
        this.state = { minutes: '' }
    }

    addMinutes() {
        this.setState((oldTime) => {
            let newTime = oldTime.value
            this.props.updateTime
            return {
                value: newTime,
            }
        }

        )
    }

    render() {
        return (
            <>
            <form>
                <input
                    style={{ "margin": "5px", "font-family": "courier"}}
                    type="number" 
                    
                ></input>
                <button onClick={() => this.addMinutes()}>Submit</button>
            </form>
                <p style={{ "margin": "10px 5px 5px 5px", "font-family": "courier" }}>total time: {this.state.minutes}</p>   
            </>
        )
    }
    
}