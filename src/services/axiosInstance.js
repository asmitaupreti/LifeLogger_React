import axios from 'axios'

const BASE_URL = 'http://192.168.67.217:5101/api/'

const publicAxios = axios.create({
  baseURL: BASE_URL,
})

const authAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
})

export { publicAxios, authAxios }
