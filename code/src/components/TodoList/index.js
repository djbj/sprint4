import React from "react"
// import Form from "./Form"
// import Goal from "./Goal"

class TodoList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      goals: []
    }
  }

  handleNewGoalItem = newItem => {
    const item = { text: newItem }
    this.setState({
      goals: item
    })
  }

  render() {
    return (
      <div>
        Hello
      </div>
    )
  }

}

export default TodoList
