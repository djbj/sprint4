import React from "react"
import "./style.css"

class Day extends React.Component {
  render() {
    // console.log(this.props.dayStatus)
    return (
      // console.log(this.props.dayStatus)
      // console.log("hello")
      <button
        className="dayButton"
        onClick={this.props.onClick}
      />
    )
  }
}

export default Day
