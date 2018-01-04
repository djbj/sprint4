import React from "react"
import uuid from "uuid/v4"
import Day from "../Day"
import "./style.css"

class Goal extends React.Component {

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
            onButtonPress={() => (this.props.onButtonPress2(item, this.props.id, index))}
          />
        </div>
      ))}
    </div>
  )
}
}

export default Goal
