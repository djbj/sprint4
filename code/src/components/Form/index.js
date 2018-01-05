import React from "react"

import "./style.css"

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
  }

handleChange = event => {
  this.setState({
    text: event.target.value
  })
}

handleSubmit = event => {
  event.preventDefault()
  this.props.onNewGoal(this.state.text)
  this.setState({
    text: ""
  })
}

render() {
  return (
    // <div className="container-form">
    //   <form onSubmit={this.handleSubmit}>
    //     <button>+</button>
    //     <input
    //       type="text"
    //       name="text"
    //       placeholder="Add goal..."
    //       value={this.state.text}
    //       onChange={this.handleChange} />
    //   </form>
    // </div>
    <div className="container-form-days">
      <div className="container-form">
        <form onSubmit={this.handleSubmit}>
          <button className="add-goal">+</button>
          <input
            type="text"
            name="text"
            placeholder="Add goal..."
            value={this.state.text}
            onChange={this.handleChange} />
        </form>
      </div>

      <div className="container-days">
        <div className="day"><p>M</p></div>
        <div className="day"><p>T</p></div>
        <div className="day"><p>W</p></div>
        <div className="day"><p>T</p></div>
        <div className="day"><p>F</p></div>
        <div className="day"><p>S</p></div>
        <div className="day"><p>S</p></div>
      </div>
    </div>
  )
}

}

export default Form
