import React from "react"

export default class TotalExercise extends React.Component {
    constructor(props) {
        super(props)
        this.state = { minutes: '' }
    }

    handleChange = event => {
        this.setState({ username: event.target.value })
    }

    render
}