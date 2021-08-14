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
      .get('https://momentum-lucidity.herokuapp.com/users/')
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

export const getUserDetails = (token, id) => {
  return (
    axios
      .get(`https://momentum-lucidity.herokuapp.com/users/${id}/`,
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json'
          }
        }
      )
      .then((res) => res.data)
  )
}

export const deleteUser = (token, id) => {
  return (
    axios
      .delete(`https://momentum-lucidity.herokuapp.com/users/${id}/`,
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json'
          }
        }
      )
  )
}
