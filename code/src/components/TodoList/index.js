import React from "react"
import uuid from "uuid/v4"
import Form from "../Form"
import Goal from "../Goal"

class TodoList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      goals: []
    }

    // getting data from the local storage
    const alldata = JSON.parse(localStorage.getItem("dataItem"))
    if (alldata) { this.state = { goals: alldata } }
  }

  handleNewGoal = newGoalText => {
    if (newGoalText === "") { return }
    const goal = { id: uuid(), text: newGoalText, status: [0, 0, 0, 0, 0, 0, 0], visible: true }

    // saving data in a local storage
    const data = [goal, ...this.state.goals]
    localStorage.setItem("dataItem", JSON.stringify(data))

    const GoalClick = new Audio("/sound/GoalClick7.mp3")
    GoalClick.play()

    this.setState({
      goals: data
    })
  }

  handleDayClick = (dayState, goalId, index) => {
    const newItems = this.state.goals.map(item => {
      if (item.id === goalId) {
        item.status[index] += 1
        if (item.status[index] === 1) {
          const GoalClick2 = new Audio("/sound/GoalClick2.mp3")
          GoalClick2.play()
        } else if (item.status[index] === 2) {
          const GoalClick = new Audio("/sound/GoalClick.mp3")
          GoalClick.play()
        } else if (item.status[index] === 3) {
          const GoalDelete = new Audio("/sound/GoalDelete.mp3")
          GoalDelete.play()
          item.status[index] = 0
        }
        console.log("New status: ", item.status[index])
      }
      return item
    })

    const data = [newItems, ...this.state.goals]
    localStorage.setItem("dataItem", JSON.stringify(data))

    console.log(newItems)
    this.setState({
      goals: newItems
    })
  }

  handleDeleteClick = (goalId, goalText) => {
    const newItems = this.state.goals.map(item => {
      if (item.id === goalId) {
        if (item.visible === true) {
          item.visible = false
          console.log("Visibility of " + goalText + " changed to false")
        }
      }
      console.log("im returning")
      return item
    })

    const GoalDelete = new Audio("/sound/GoalDelete.mp3")
    GoalDelete.play()

    const data = [newItems, ...this.state.goals]
    localStorage.setItem("dataItem", JSON.stringify(data))

    console.log(newItems)
    this.setState({
      goals: newItems
    })
  }

  render() {
    return (
      <div>
        <audio autoplay source="/sound/GoalClick.mp3"></audio>

        <Form onNewGoal={this.handleNewGoal} />
        {this.state.goals.map(item => (
          <Goal
            key={item.id}
            id={item.id}
            text={item.text}
            status={item.status}
            onButtonPress2={this.handleDayClick}
            isVisible={item.visible}
            delete={this.handleDeleteClick}
          />
        ))}
      </div>
    )
  }
}

export default TodoList

// creating a function delete a goal getItem
// handleRemove = id => {
//   const removeGoal =  this.state.goals.filter(remove => {
//     if (remove.id === id) {
//       remove.id = !remove.id
//     }
//      return remove.id
//    })
//
//    this.setState({
//      goals: removeGoal
//    })
//
// }

// Old status beginning
// { id: uuid(), text: "Yoga", status: [1 ,0,2,0,0,2,1] },
// { id: uuid(), text: "Jogging", status: [1,2,0,0,1,2,0] },
// { id: uuid(), text: "Feeding the cat", status: [0,0,0,0,0,0,0] }
