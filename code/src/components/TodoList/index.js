import React from "react"
import uuid from "uuid/v4"
import Form from "../Form"
import Goal from "../Goal"

class TodoList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      goals: [
        { id: uuid(), text: "Yoga", status: [1 ,0,2,0,0,2,1] },
        { id: uuid(), text: "Jogging", status: [1,2,0,0,1,2,0] },
        { id: uuid(), text: "Feeding the cat", status: [0,0,0,0,0,0,0] }
      ]
    }

    // getting data from the local storage
    const alldata = JSON.parse(localStorage.getItem("dataItem"))
    if (alldata) { this.state = { goals: alldata } }
  }

  handleNewGoal = newGoalText => {
    if (newGoalText === "") { return }
    const goal = { id: uuid(), text: newGoalText, status: [0, 0, 0, 0, 0, 0, 0] }

    // saving data in a local storage
    const data = [goal, ...this.state.goals]
    localStorage.setItem("dataItem", JSON.stringify(data))
    this.setState({
      goals: data
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
