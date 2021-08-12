import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { registration, registrationInfo, requestLogin } from '../../api'

export const VolunteerRegistration = (props) => {
  const { setToken } = props
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [display_name, setDisplayName] = useState('')
  const [legal_name, setLegalName] = useState('')
  const [pronouns, setPronouns] = useState('')
  const [availability, setAvailability] = useState('')
  const [telephone, setTelephone] = useState('')
  const [address2, setAddress2] = useState('')
  const [city, setCity] = useState('')
  const [state, setStateName] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [preferred_event, setPreferredEvent] = useState('')
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()
    registration(email, username, password)
    registrationInfo(
      display_name,
      legal_name,
      pronouns,
      availability,
      telephone,
      address2,
      city,
      state,
      zipcode,
      preferred_event
    )
    requestLogin(username, password)
      .then((data) => {
        if (data && data.data.auth_token) {
          setToken(data.data.auth_token)
          history.push('/dreamcenter/volunteerdash')
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

                    <div className='col-span-6 sm:col-span-4'>
                      <label htmlFor='legal-name' className='block text-sm font-medium text-gray-700'>
                        Legal name
                      </label>
                      <input
                        type='text'
                        name='legal-name'
                        id='legal-name'
                        value={legal_name}
                        onChange={(event) => setLegalName(event.target.value)}
                        autoComplete='given-name'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-4'>
                      <label htmlFor='preferred-name' className='block text-sm font-medium text-gray-700'>
                        Preferred name
                      </label>
                      <input
                        type='text'
                        name='preferred-name'
                        id='preferred-name'
                        value={display_name}
                        onChange={(event) => setDisplayName(event.target.value)}
                        autoComplete='family-name'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-4'>
                      <label htmlFor='pronouns' className='block text-sm font-medium text-gray-700'>
                        Pronouns
                      </label>
                      <input
                        type='text'
                        name='pronouns'
                        id='pronouns'
                        value={pronouns}
                        onChange={(event) => setPronouns(event.target.value)}
                        autoComplete='pronouns'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-4'>
                      <label htmlFor='street-address' className='block text-sm font-medium text-gray-700'>
                        Street address
                      </label>
                      <input
                        type='text'
                        name='street-address'
                        id='street-address'
                        value={address2}
                        onChange={(event) => setAddress2(event.target.value)}
                        autoComplete='street-address'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                    
                    <div className='col-span-6 sm:col-span-4'>
                      <label htmlFor='city' className='block text-sm font-medium text-gray-700'>
                        City
                      </label>
                      <input
                        type='text'
                        name='city'
                        id='city'
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-4'>
                      <label htmlFor='state' className='block text-sm font-medium text-gray-700'>
                        State / Province
                      </label>
                      <input
                        type='text'
                        name='state'
                        id='state'
                        value={state}
                        onChange={(event) => setStateName(event.target.value)}
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-4'>
                      <label htmlFor='postal-code' className='block text-sm font-medium text-gray-700'>
                        ZIP / Postal
                      </label>
                      <input
                        type='text'
                        name='postal-code'
                        id='postal-code'
                        value={zipcode}
                        onChange={(event) => setZipcode(event.target.value)}
                        autoComplete='postal-code'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-4'>
                      <label htmlFor='phone-number' className='block text-sm font-medium text-gray-700'>
                        Phone Number
                      </label>
                      <div className='mt-1 relative rounded-md shadow-sm'>
                        <input
                          type='text'
                          name='phone-number'
                          id='phone-number'
                          value={telephone}
                          onChange={(event) => setTelephone(event.target.value)}
                          className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md'
                          placeholder='+1 (555) 987-6543'
                        />
                      </div>
                    </div>

                    <div className='col-span-6 sm:col-span-4'>
                      <label htmlFor='preferred-events' className='block text-sm font-medium text-gray-700'>
                        Preferred Events
                      </label>
                      <div className='mt-1 relative rounded-md shadow-sm'>
                        <textarea
                          type='textarea'
                          name='preferred-events'
                          id='preferred-events'
                          value={preferred_event}
                          onChange={(event) => setPreferredEvent(event.target.value)}
                          className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md'
                          placeholder='I prefer to work at these types of events...'
                        />
                      </div>
                    </div>

                    <div className='col-span-6 sm:col-span-4'>
                      <label htmlFor='availibility' className='block text-sm font-medium text-gray-700'>
                        Availibility
                      </label>
                      <div className='mt-1 relative rounded-md shadow-sm'>
                        <textarea
                          type='textarea'
                          name='availibility'
                          id='availibility'
                          value={availability}
                          onChange={(event) => setAvailability(event.target.value)}
                          className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md'
                          aria-describedby='availibilty-description'
                          placeholder='List your preferred times for volunteer opportunites.'
                        />
                      </div>
                    </div>

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
