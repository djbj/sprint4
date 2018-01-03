import React from "react"
import "./style.css"

class Day extends React.Component {
  render() {
    return (
      <button
        className="dayButton"
        // onChange={this.handleCheckboxChange}
        // checked={this.props.done}
        onClick={this.props.handleDayClick
          console.log("click")}/>

        // onClick={() => this.handleClick(i)}
    )
  }
}

export default Day
