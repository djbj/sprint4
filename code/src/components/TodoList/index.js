import React from "react"
import uuid from "uuid/v4"
import Form from "../Form"
import Goal from "../Goal"

class TodoList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      goals: [
        { id: uuid(), text: "Yoga", status: [0 ,0,0,0,0,0,0] },
        { id: uuid(), text: "Jogging", status: [1,2,0,0,1,2,0] },
        { id: uuid(), text: "Feeding the cat", status: [0,0,0,0,0,0,0] }
      ]
    }
  }

  handleNewGoal = newGoalText => {
    if (newGoalText === "") { return }
    const goal = { id: uuid(), text: newGoalText, status: [0, 0, 0, 0, 0, 0, 0] }
    this.setState({
      goals: [goal, ...this.state.goals]
    })
  }

  render() {
    return (
      <div>
        <Form onNewGoal={this.handleNewGoal} />
        {this.state.goals.map(item => (
          <Goal
            key={item.id}
            id={item.id}
            text={item.text}
            status={item.status} />
        ))}
      </div>
    )
  }

}

export default TodoList
