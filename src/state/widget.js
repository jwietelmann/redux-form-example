const UPDATE = 'widget:update'

const INITIAL_STATE = {name: 'Default Name'}

export default function reducer(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
  case UPDATE:
    return {...payload}
  default:
    return state
  }
}

export function update(payload) {
  return {type: UPDATE, payload}
}

export function reset() {
  return update(INITIAL_STATE)
}
