import React from "react"
import uuid from "uuid/v4"
import Day from "../Day"
import "./style.css"

// function Day(props) {
//   return (
//     <button
//       className="dayButton"
//       onClick={props.onClick}>
//       {props.key}
//     </button>
//   )
// }
class Goal extends React.Component {

handleDayClick = (dayIndex) => {
  console.log("dayClick", this.props.text, this.props.status, dayIndex)
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
            onClick={() => this.handleDayClick(index)} />
        </div>
      ))}
    </div>
  )
}
}

export default Goal
