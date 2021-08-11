import axios from 'axios'

export const requestLogin = (username, password) => {
  return (
    axios.post('https://momentum-lucidity.herokuapp.com/auth/token/login/',
      {
        username: username,
        password: password
      }
    )
  )
}
