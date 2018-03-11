import React,{Component} from 'react'
import { Route } from "react-router-dom"
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

class LoadPages extends Component {
  componentWillMount () {
    nprogress.start()
  }

  componentDidMount () {
   nprogress.done()
  }

  render () {
    return (
      <Route {...this.props} />
    )
  }
}

export default LoadPages