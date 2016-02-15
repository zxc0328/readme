const readme = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 100
    case 'DECREMENT':
      return state - 100
    default:
      return state
  }
}

export default readme
