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
                    type="number" 
                    value={this.state.minutes}
                    onChange={this.handleChange}
                >
                </input>
                <label style={{ "margin": "10px 5px 5px 5px", "font-family": "courier" }}>minutes</label>
            </form>
                <p>total time: {this.state.minutes}</p>   
            </>
        )
    }
    
}