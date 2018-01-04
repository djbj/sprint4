import React from "react"
import uuid from "uuid/v4"
import Form from "../Form"
import Goal from "../Goal"

class TodoList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      goals: [
        {
          id: uuid(),
          text: "Yoga",
          status: [1, 0, 2, 0, 0, 2, 1]
        }
      ]
    }

    // getting data from the local storage
    const alldata = JSON.parse(localStorage.getItem("dataItem"))
    if (alldata) { this.state = { goals: alldata } }
  }

  // creating a function delete a goal getItem
  handleRemove = id => {
    const removeGoal =  this.state.goals.filter(remove => {
      if (remove.id === id) {
        remove.id = !remove.id
      }
       return remove.id
     })

     this.setState({
       goals: removeGoal
     })

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

  handleDayClick = (dayState, goalId, index) => {
    const newItems = this.state.goals.map(item => {
      if (item.id === goalId) {
        // item.done = !item.done
        item.status[index] = item.status[index] + 1 // why ????
        if (item.status[index] === 3) {
          item.status[index] = 0
        }
        console.log(item.status[index])
      }
      return item
    })

    this.setState({
      goals: newItems
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
            status={item.status}
            onButtonPress2={this.handleDayClick}
            // delete={this.handleRemove}
          />
        ))}

      </div>
    )
  }
  // Old status beginning
  // { id: uuid(), text: "Yoga", status: [1 ,0,2,0,0,2,1] },
  // { id: uuid(), text: "Jogging", status: [1,2,0,0,1,2,0] },
  // { id: uuid(), text: "Feeding the cat", status: [0,0,0,0,0,0,0] }
}

export default TodoList
