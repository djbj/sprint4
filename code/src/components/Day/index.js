import React from "react"
import "./style.css"

class Day extends React.Component {
  render() {
    return (
      <button
        className="dayButton"
        onClick={this.props.onClick} />
    )
  }
}

export default Day
