import axios from 'axios'

const instant = axios.create({
  baseURL: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
  timeout: 1000
})

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instant.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export const get = (url, params) => {
  return new Promise((resolve, reject) => {
    instant.get(url, { params }).then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err)
    })
  })
}
