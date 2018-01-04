import React from "react"
import "./style.css"

class Day extends React.Component {
  getClassName = (day) => {
    if(day === 1) {
      return "dayButton"
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
