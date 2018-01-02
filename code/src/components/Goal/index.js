import React from "react"

import "./style.css"

class Goal extends React.Component {

  handleCheckboxChange = () => {
    this.props.onChange(this.props.id)
    console.log("HandleClick")
  }

  render() {
    return (
      <div className="goals">
          <div
            onChange={this.handleCheckboxChange}
            checked={this.props.done}
            onClick={this.handleCheckboxChange}>
              Click
            </div>
          {this.props.text}

      </div>
    )
  }

}

export default Goal
