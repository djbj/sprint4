import React from "react"
import moment from "moment"
// import dateArray from "moment-array-dates"

import "./style.css"

const day = moment().format("MMM Do YY")

class Header extends React.Component {

  render() {
    return (
      <div className="header-container">
        <div><p>Goals – {day}</p></div>
      </div>
    )
  }

}

export default Header
