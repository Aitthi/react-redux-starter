import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from "redux-promise"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import NavBar from './components/nav-bar'
import HomePage from './pages/home-page'
import ContentPage from './pages/content-page'
import reducers from './reducers'

import './style.css'
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>          
          <Route path="/content" component={ContentPage} />
          
          {/* Home Page */}
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('rootApp'))