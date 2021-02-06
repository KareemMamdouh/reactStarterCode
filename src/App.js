import React from 'react'
import Test from 'pages/Test/Test'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import './i18n'
import { Router, Switch, Route } from 'react-router-dom'
import history from 'redux/_helpers/history'

require('dotenv').config()

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Route exact path="/" component={Test} />
      </Router>
    </div>
  )
}

export default App
