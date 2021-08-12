import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { registration, requestLogin } from '../../api'

export const Registration = (props) => {
  const { setToken } = props
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()
    registration(email, username, password)
    requestLogin(username, password)
      .then((data) => {
        if (data && data.data.auth_token) {
          setToken(data.data.auth_token)
          history.push('/admindash')
        }
      })
  }
  return (
    <>
      <div className='mt-10 sm:mt-0'>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <div className='px-4 sm:px-0'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>Registration Information</h3>
              <p className='mt-1 text-sm text-gray-600'>Use a permanent address where you can receive mail.</p>
            </div>
          </div>
          <div className='mt-5 md:mt-0 md:col-span-2'>
            <form action='#' method='POST' onSubmit={handleSubmit}>
              <div className='shadow overflow-hidden sm:rounded-md'>
                <div className='px-4 py-5 bg-white sm:p-6'>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-6 sm:col-span-4'>
                      <label htmlFor='legal-name' className='block text-sm font-medium text-gray-700'>
                        Email
                      </label>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        autoComplete='email'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-4'>
                      <label htmlFor='preferred-name' className='block text-sm font-medium text-gray-700'>
                        User Name
                      </label>
                      <input
                        type='username'
                        name='username'
                        id='username'
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        autoComplete='username'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-4'>
                      <label htmlFor='email-address' className='block text-sm font-medium text-gray-700'>
                        Password
                      </label>
                      <input
                        type='password'
                        name='password'
                        id='password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        autoComplete='password'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-4' />

                  </div>
                </div>
                <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                  <button
                    type='submit'
                    className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}
