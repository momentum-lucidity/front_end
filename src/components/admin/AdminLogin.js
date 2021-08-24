import { XCircleIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { requestLogin } from '../../api'
import Logo from '../images/1x/logo.png'

export const AdminLogin = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { setToken, errors, setErrors, authUser } = props
  const history = useHistory()

  const handleSubmit = (event) => {
    console.log (authUser)
    event.preventDefault()
    requestLogin(username, password)
    .then((data) => {
        setToken(data.data.auth_token)
        history.push('/admindash')
      })
      .catch((error) => {
        setErrors(error.message)
      })
  }

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col justify-center '>
      <div className='sm:mx-auto sm:w-full sm:max-w-lg'>
        <img
          className='w-full'
          src={Logo}
          alt='Lucidity Logo'
        />
        <h2 className='mt-0 text-center text-l font-bold text-gray-900'>Sign in to your account</h2>
        <p className='mt-2 text-center text-xsm text-gray-600'>
          Or{' '}
          <a
            href='/registration'
            className='font-medium text-indigo-600 hover:text-indigo-500'
          >
            Register Here
          </a>
        </p>
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-sm'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-12 mb-10'>
          <form className='space-y-6' action='#' method='POST' onSubmit={handleSubmit}>
            {errors && (
              <div className='rounded-md bg-red-50 p-4 mt-2'>
                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <XCircleIcon
                      className='h-5 w-5 text-red-400'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='ml-3'>
                    <h3 className='text-sm font-medium text-red-800'>
                      Login Failed: Your user ID or password is incorrect.
                    </h3>
                  </div>
                </div>
              </div>
            )}{' '}
            <input type='hidden' name='remember' defaultValue='true' />
            <div>
              <label htmlFor='username' className='block text-sm font-medium text-gray-700'>
                Username
              </label>
              <div className='mt-1'>
                <input
                  id='username'
                  name='username'
                  type='name'
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  autoComplete='username'
                  required
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  placeholder='username'
                />
              </div>
            </div>

            <div>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                Password
              </label>
              <div className='mt-1'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete='current-password'
                  required
                  className='relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  placeholder='Password'
                />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input
                  id='remember-me'
                  name='remember-me'
                  type='checkbox'
                  className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                />
                <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-900'>
                  Remember me
                </label>
              </div>

              <div className='text-sm'>
                <a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}
