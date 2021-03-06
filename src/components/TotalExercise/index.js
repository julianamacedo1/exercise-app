import React from "react"

export default class TotalExercise extends React.Component {
    constructor(props) {
        super(props)
        this.state = { minutes: 0 }
    }

    totalMin = add => {
        this.setState({ minutes: add.target.value })
    }

    render() {
        return (
            <>
            <p style={{ "margin": "10px 5px 5px 5px", "font-family": "courier" }}>Total minutes spent exercising today:</p>
            <input
                style={{ "margin": "5px", "font-family": "courier", "width": "80px", "height": "20px"}}
                type="number" 
                value={this.state.minutes}
                onChange={this.totalMin}
            ></input>
            <p style={{ "margin": "10px 5px 5px 5px", "font-family": "courier" }}>total time: {this.state.minutes} minutes</p>   
            </>
        )
    }
    
}