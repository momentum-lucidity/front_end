import axios from 'axios'
import { Link } from 'react-router-dom'

export const AdminLogout = ({ token, setToken, setAuthUser }) => {
  axios
    .post(
      'https://momentum-lucidity.herokuapp.com/auth/token/logout/',
      {},
      {
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'application/json'
        }
      }
    )
    .then(() => {
      setToken(null)
      setAuthUser(null)
    })

  return (
    <>
      <p>You are now logged out</p>
      <Link to='/'>Login</Link>
    </>
  )
}
