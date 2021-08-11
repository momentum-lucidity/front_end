import axios from 'axios'
import { Link } from 'react-router-dom'

export const VolunteerLogout = ({ token, setToken }) => {
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
    })

  return (
    <>
      <p>You are now logged out</p>
      <Link to='/dreamcenter/login'>Login</Link>
    </>
  )
}
