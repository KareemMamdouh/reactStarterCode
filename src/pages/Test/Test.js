import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { testAction } from 'redux/store/actions'

function Test(props) {
  useEffect(() => {
  
			
props.testAction()
  }, [])
  return (
    <div className="Test">
      data
      {props.test?.map(x => {
        return <div key={`s${x}`}>{x}</div>
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    test: state.Test.data,
  }
}
const mapDispatchToProps = {
  testAction,
}
export default connect(mapStateToProps, mapDispatchToProps)(Test)
