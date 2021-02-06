import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { testAction } from 'redux/store/actions'
import { useTranslation } from 'react-i18next'
// ii18n
function Test(props) {
  useEffect(() => {
    props.testAction()
  }, [])
  const { t } = useTranslation() // ti18n

  return (
    <div className="Test">
      {t('data')}

      {/* t ('') ctrl +  alt + i */}
      {props.test?.map(x => {
        return (
          <div key={`s${x}`} className="fs-1 text-warning" data-test="sc">
            {x}
          </div>
        )
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
