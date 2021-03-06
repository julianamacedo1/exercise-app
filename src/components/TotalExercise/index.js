import React from "react"

export default class TotalExercise extends React.Component {
    constructor(props) {
        super(props)
        this.state = { minutes: '' }
    }

    handleChange = event => {
        this.setState({ minutes: event.target.value })
    }

    render() {
        return (
            <>
            <form>
                <input
                    style={{ "margin": "5px", "font-family": "courier"}}
                    type="number" 
                    value={this.state.minutes}
                    onInput={this.handleChange}
                >
                </input>
                <label style={{ "margin": "10px 5px 5px 5px", "font-family": "courier" }}>minutes</label>
            </form>
                <p style={{ "margin": "10px 5px 5px 5px", "font-family": "courier" }}>total time: {this.state.minutes}</p>   
            </>
        )
    }
    
}