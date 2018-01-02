import React from "react"
// import moment from "moment"
// import dateArray from "moment-array-dates"

import Form from "./Form"
// import Goal from "Goal"
import Header from "./Header"
// import Page from "Page"
import TodoList from "./TodoList"

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />

        <TodoList />
      </div>
    )
  }

}

export default App
