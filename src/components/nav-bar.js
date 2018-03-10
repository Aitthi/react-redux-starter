import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <ul>
          <li>
            <Link to="/" >Home</Link> 
          </li>
          <li>
            <Link to="/content" >Content</Link> 
          </li>
      </ul>
    )
  }
}