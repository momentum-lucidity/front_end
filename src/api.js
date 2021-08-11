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

export const registration = (email, username, password) => {
  return (
    axios
      .post(
        'https://momentum-lucidity.herokuapp.com/auth/users/',
        {
          email: email,
          username: username,
          password: password
        }
      )
  )
}
