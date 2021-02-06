import React from 'react'
import Test from 'pages/Test/Test'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import './i18n'

require('dotenv').config()

function App() {
  return (
    <div className="App">
      <Test />
    </div>
  )
}

export default App
