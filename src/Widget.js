import React from 'react'
import {connect} from 'react-redux'

export function Widget({name}) {
  return (
    <h4>{name}</h4>
  )
}

export default connect(({widget}) => widget)(Widget)
