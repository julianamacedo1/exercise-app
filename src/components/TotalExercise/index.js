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
            <form>
                <input
                    style={{ "margin": "5px", "font-family": "courier", "width": "60px", "height": "20px"}}
                    type="number" 
                    value={this.state.minutes}
                    onChange={this.totalMin}
                ></input>
                
            </form>
                <p style={{ "margin": "10px 5px 5px 5px", "font-family": "courier" }}>total time: {this.state.minutes} minutes</p>   
            </>
        )
    }
    
}