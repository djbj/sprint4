import React from "react"
import moment from "moment"
import dateArray from "moment-array-dates"

import Form from "./Form"
// import Goal from "Goal"
import Header from "./Header"
// import Todo-list from "./Todo-list"

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Form />
        {/* <Todo-list /> */}
      </div>
    )
  }

}

export default App
