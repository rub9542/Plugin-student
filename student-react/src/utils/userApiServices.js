import axios from 'axios'

// const { API_URL } = process.env

const API_URL = `https://api-std.staging.pluginlive.com/user`


const userApi = axios.create({
  baseURL: API_URL || 'https://example.com/', // API server url
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
})

export default userApi
