const getToken = state => state?.auth?.token
const getData = state => state?.studentData
const selectors = {
  getToken,
  getData
}

export default selectors
