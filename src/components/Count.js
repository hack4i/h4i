import React, { Component } from "react"
import Clock from "./Clock"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { deadline: "May,13 , 2022" }
  }
  render() {
    return (
      <>
        <Clock deadline={this.state.deadline} />
      </>
    )
  }
}
export default App
