import React from "react"
import "./style.css"

class Day extends React.Component {
  getClassName = (day) => {
    if(day === 0) {
      return "dayButton0"
    } else if (day === 1) {
      return "dayButton1"
    } else if (day === 2) {
      return "dayButton2"
    }
  }

  render() {
    return (
      <button
        className={this.getClassName(this.props.dayStatus)}
        onClick={this.props.onClick}
      />
    )
  }
}

export default Day
