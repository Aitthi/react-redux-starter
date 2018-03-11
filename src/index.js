import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from "redux-promise"
import { BrowserRouter, Route, Switch } from "react-router-dom"

/// Components
import NavBar from './components/nav-bar'
import LoadPages from './components/load-page'

import routes from './routes'
import reducers from './reducers'

import './style.css'
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <main>
        <NavBar />
        <Switch>          
          {routes.map((route, i) =>
            <LoadPages key={i} {...route} />                      
          )}
        </Switch>
      </main>
    </BrowserRouter>
  </Provider>
  , document.getElementById('rootApp'))