import React from "react"
import Day from "../Day"
import "./style.css"

class Goal extends React.Component {

  handleCheckboxChange = () => {
    this.props.onChange(this.props.id)
    console.log("HandleClick")
  }

handleDayClick = () => {
  console.log("DayClick")
}
  render() {
    return (
      <div className="goals">
          {/* onChange={this.handleCheckboxChange} */}
          {/* checked={this.props.done} */}
          {/* onClick={this.handleCheckboxChange}> */}
          {this.props.text}

          {this.props.status.map(item => (

            <Day
              key={item.id}
              onClick={() => this.handleDayClick()}/>
          ))}
      </div>
    )
  }

}

export default Goal
