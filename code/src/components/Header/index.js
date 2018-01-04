import React from "react"
import moment from "moment"
// import dateArray from "moment-array-dates"

import "./style.css"

const day = moment().format("MMM Do YY")
const week = moment().format("W")

class Header extends React.Component {

  render() {
    return (
      <div className="header-container">
        <p className="header-week">Goals – Week {week}</p><p className="header-day">{day}</p>
      </div>
    )
  }

}

export default Header
