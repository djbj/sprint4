import React from "react"
import uuid from "uuid/v4"
import Day from "../Day"
import "./style.css"

class Goal extends React.Component {

  render() {
    if (!this.props.isVisible) {
      return <div />
    }
    return (
      <div className="goals">

        <div className="goal-text">{this.props.text}</div>

        <div className="container-days-mobile">
          <div className="day"><p>M</p></div>
          <div className="day"><p>T</p></div>
          <div className="day"><p>W</p></div>
          <div className="day"><p>T</p></div>
          <div className="day"><p>F</p></div>
          <div className="day"><p>S</p></div>
          <div className="day"><p>S</p></div>
        </div>

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

        <button
          className="delete-btn"
          onClick={() => (this.props.delete(this.props.id))}>
        </button>
      </div>
    )
  }
}

export default Goal
