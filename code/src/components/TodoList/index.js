import React from "react"
import Form from "../Form"
import Goal from "../Goal"

class TodoList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      goals: [
        { id: 1, text: "Yoga", status: [0,0,0,0,0,0,0] },
        { id: 2, text: "Jogging", status: [1,2,0,0,1,2,0] },
        { id: 3, text: "Feeding the cat", status: [0,0,0,0,0,0,0] }
      ]
    }
  }

  handleNewGoal = newGoalText => {
    if(newGoalText === "") {return}
    const goal = { id: 9, text: newGoalText, status: [0, 0, 0, 0, 0, 0, 0] }
    this.setState({
      goals: [goal, ...this.state.goals]
    })
  }

  handleTodoDoneChange = id => {
    const newGoals = this.state.goals.map(item => {
      if (item.id === id) {
        item.done = !item.done
      }
      return item
    })

    this.setState({
      goals: newGoals
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
            onChange={this.handleTodoDoneChange}
            text={item.text}
            status={item.status} />
        ))}
      </div>
    )
  }

}

export default TodoList
