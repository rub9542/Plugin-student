export const actionInfo = args => dispatch => {
  var res = args.reduce((acc, cur) => ({ ...acc, [cur.name]: cur.value }), {})

  dispatch({
    type: 'REGISTER_DATA',
    payload: res,
  })
}
