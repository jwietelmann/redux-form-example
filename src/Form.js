import React from 'react'
import {connect} from 'react-redux'
import {reduxForm, Field} from 'redux-form'
import {update, reset} from './state/widget'

function Form({handleSubmit, onReset}) {
  return (
    <form onSubmit={handleSubmit}>
      <Field name="name" component="input" type="text" />
      <button>submit</button>
      <button onClick={onReset}>reset</button>
    </form>
  )
}

const ReduxForm = reduxForm({form: 'widget'})(Form)

function FormWithSubmitHandler({
  handleSubmit,
  reset,
  widget,
  ...props,
}) {
  return (
    <ReduxForm
      onSubmit={handleSubmit}
      onReset={(e) => {e.preventDefault(); reset()}}
      initialValues={widget}
      enableReinitialize
      {...props}
    />
  )
}

export default connect(
  ({widget}) => ({widget}),
  {
    handleSubmit: update,
    reset,
  },
)(FormWithSubmitHandler)
