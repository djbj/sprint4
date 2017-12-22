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
    <div>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleNewGoal} />
        <button>add</button>
      </form>
    </div>
  )
}

}

export default Form
