import {combineReducers, createStore} from 'redux'
import {reducer as form} from 'redux-form'
import widget from './widget'

export const reducer = combineReducers({
  form,
  widget,
})

export const store = createStore(reducer)
