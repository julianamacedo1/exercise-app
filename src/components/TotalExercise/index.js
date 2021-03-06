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
                <label>minutes:</label>
                <input value = {this.state.minutes}>
                    value = {this.state.minutes}
                    onChange 
                </input>
            </form>
            </>
        )
    }
    
}