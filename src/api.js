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

export const getVolunteerList = () => {
  return (
    axios
      .get('https://momentum-lucidity.herokuapp.com/volunteers/')
      .then((res) => res.data)
  )
}

export const getEventsList = () => {
  return (
    axios
      .get('https://momentum-lucidity.herokuapp.com/events/')
      .then((res) => res.data)
  )
}
