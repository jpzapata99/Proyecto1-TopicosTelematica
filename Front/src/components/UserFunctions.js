import axios from 'axios'
export const login = user => {
    return axios
      .post('/api/user/login', {
        user: user.user,
        password: user.password
      })
      .then(response => {
        localStorage.setItem('usertoken', response.data)
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  export const getProfile = user => {
    return axios
      .get('/api/user/visualizacion', {
        headers: { Authorization: ` ${this.getToken()}` }
      })
      .then(response => {
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
  }