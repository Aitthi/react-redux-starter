import React, { Component } from 'react'
import { connect } from 'react-redux'

class HomePage extends Component {
  rederList(example){
    return(
      example.map((item, i)=>{
        return <li key={i} style={{float:'unset',fontSize: '22px'}}>{item.title}</li>
      })
    )
  }
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <ul style={{backgroundColor:'#fff'}}>
          {this.rederList(this.props.example)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    example: state.example
  }
}

export default connect(mapStateToProps)(HomePage)