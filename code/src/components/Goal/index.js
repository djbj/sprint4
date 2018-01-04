import React from "react"
import uuid from "uuid/v4"
import Day from "../Day"
import "./style.css"

class Goal extends React.Component {

handleDayClick = (dayIndex, dayStatus) => {
  // console.log("dayClick", this.props.text, this.props.status, dayIndex, dayStatus)
  console.log("I need to update state")
}

render() {
  return (
    <div className="goals">
      <div className="goal-text">{this.props.text}</div>

      {this.props.status.map((item, index) => (
        <div className="day-buttons">
          <Day
            key={uuid()}
            dayIndex={item.index}
            dayStatus={item}
            onClick={() => this.handleDayClick(index, item)} />
        </div>
      ))}
    </div>
  )
}
}

export default Goal
