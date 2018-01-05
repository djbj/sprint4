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
      <button
        className="delete-btn"
        onClick={() => (this.props.delete(this.props.id))}>
        –
      </button>

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
<<<<<<< HEAD

      <button
        className="delete-btn"
        onClick={() => (this.props.delete(this.props.id, this.props.text))}>
        delete
      </button>
=======
>>>>>>> c76f3b46be751667811035680c7eba462be928ef
    </div>

  )
}
}

export default Goal
