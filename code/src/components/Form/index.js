import React from "react"

import "./style.css"

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
  }

handleNewGoal = (event) => {
  this.state({
    text: event.target.value
  })
}

handleSubmit = (event) => {
  event.preventDefault()
  this.setState({ text: "" })
}

render() {
  return (
    <div className="container-form">
      <form onSubmit={this.handleSubmit}>
        <button>+</button>
        <input
          type="text"
          placeholder="Add goal..."
          // value={this.state.text}
          // onChange={this.handleNewGoal}
          />
      </form>
    </div>
  )
}

}

export default Form
