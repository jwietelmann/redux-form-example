import React from 'react'
import {connect} from 'react-redux'

export function StateSpy(props) {
  return (
    <pre style={{textAlign: 'left'}}>
      {JSON.stringify(props, null, '  ')}
    </pre>
  )
}

export default connect((state) => state)(StateSpy)
