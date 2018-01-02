import React from "react"

import "./style.css"

class Goal extends React.Component {

  handleCheckboxChange = () => {
    this.props.onChange(this.props.id)
  }

  render() {
    return (
      <div className="goals">
        <label>
          <input
            type="checkbox"
            onChange={this.handleCheckboxChange}
            checked={this.props.done} />
          {this.props.text}
        </label>
      </div>
    )
  }

}

export default Goal
