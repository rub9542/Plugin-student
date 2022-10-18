/** @format */

const register = (initialState = {}, action) => {
  switch (action.type) {
    case 'REGISTER_DATA':
      return { ...initialState, ...action.payload }
    default:
      return initialState
  }
}

export default register
