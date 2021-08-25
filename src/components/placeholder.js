/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')

  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          sky: colors.sky,
          teal: colors.teal,
          cyan: colors.cyan,
          rose: colors.rose,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/line-clamp'),
    ],
  }
  ```
*/
import { useEffect, useState, useRef } from 'react'
import { getEventsList } from '../../api'
import { Link } from 'react-router-dom'
import { orderBy } from 'lodash'
import moment from 'moment'
import { VolunteerEventsPagination } from './VolunteerEventsPagination'

export const VolunteerEvents = (props) => {
  const hasFetchedEvents = useRef(false)
  const { token, authUser, allSlots, setAllSlots, yourSlots } = props
  const [allEvents, setAllEvents] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [volEventsPerPage] = useState(4)

  useEffect(() => {
    if (!hasFetchedEvents.current) {
      getEventsList(token).then((data) => setAllEvents(data.results))
      console.log(`volunteer Events ${allEvents}`)
      hasFetchedEvents.current = true
    }
  })

  const sortedEvents = orderBy(
    allEvents,
    [(object) => new moment(object.date)],
    ['asc']
  )

  const indexOfLastVolEvent = currentPage * volEventsPerPage
  const indexOfFirstVolEvent = indexOfLastVolEvent - volEventsPerPage
  const currentVolEvents = sortedEvents.slice(
    indexOfFirstVolEvent,
    indexOfLastVolEvent
  )

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  function classNames (...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <div className='h-screen bg-white overflow-hidden overflow-y-auto flex flex-initial'>
      <div className='flex-1 max-w-4xl mx-auto w-0 flex flex-col md:px-8 xl:px-0'>
        <main className='flex-1 relative focus:outline-none'>
          <div className='py-6'>
            <div className='px-4 sm:px-6 md:px-0 overflow-y-auto '>
              <ul className='divide-y divide-gray-500'>
                {currentVolEvents &&
                  currentVolEvents.map((event, idx) => (
                    <li
                      key={event.eventpk}
                      className='relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600'
                    >
                      <div className='flex justify-between space-x-3'>
                        <div className='min-w-0 flex-1'>
                          <Link
                            to={{

                              pathname: `volunteer/events/${event.eventpk}/`,
                              state: {
                                yourSlots: yourSlots
                              }
                            }}
                          >
                            <span
                              className='absolute inset-0'
                              aria-hidden='true'
                            />
                            <p className='text-sm font-mono font-medium font-semibold text-gray-900 truncate'>
                              {event.event_header}
                            </p>
                            <p className='text-sm pb-2 font-mono text-gray-500 truncate'>
                              {moment(event.date).format('LL')}
                            </p>
                            <p className='text-sm pb-2 font-mono text-black-500 truncate'>
                              {event.description}
                            </p>
                            <span className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800'>
                              Volunteers Needed
                            </span>
                            <p className='line-clamp-2 pt-2 text-sm font-mono text-gray-600'>
                              Sign up to volunteer here!
                            </p>

                          </Link>
                        </div>
                      </div>
                    </li>
                  ))}
                <div className='flex items-center justify-center'>
                  <VolunteerEventsPagination
                    volEventsPerPage={volEventsPerPage}
                    totalEvents={allEvents.length}
                    paginate={paginate}
                  />
                </div>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

  <main className='flex-1 mt-8 relative overflow-y-auto focus:outline-none'>
    <div className='py-8'>
      <div className='px-4 mt-8 sm:px-6 pb-2 md:px-0'>
      <h1 className='text-3xl font-semibold pb-1 text-gray-900'>
                {userDetails.legal_name}'s
              </h1>
    </div>
      <div className='px-4 sm:px-6 md:px-0'>
      <div>
                <h3 className='text-lg pb-3 leading-6 font-medium text-gray-900'>
                  Profile
                </h3>
              </div>
      <div className='mb-8'>
                <VolunteerIntakeStatus
                  token={token}
                  userDetails={userDetails}
                />
              </div>
      <div className='bg-white shadow overflow-hidden border border-gray-200 sm:rounded-xl'>
                <div className='px-4 py-5 sm:px-6'>
                  <h3 className='text-lg leading-6 font-medium text-gray-900'>
                    Volunteer Information
                  </h3>
                  <p className='mt-1 max-w-2xl text-sm text-gray-500'>
                    Personal details and application.
                  </p>
                </div>
                <div className='border-t border-gray-200 px-4 py-5 sm:p-0'>
                  <dl className='sm:divide-y sm:divide-gray-200'>
                    <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='text-sm font-medium text-gray-500'>
                        Preferred Name
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        {userDetails.display_name}
                      </dd>
                    </div>
                    <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='text-sm font-medium text-gray-500'>
                        Pronouns
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        {userDetails.pronouns}
                      </dd>
                    </div>
                    <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='text-sm font-medium text-gray-500'>
                        Full name
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        {userDetails.legal_name}
                      </dd>
                    </div>
                    <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='text-sm font-medium text-gray-500'>
                        Telephone
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        {userDetails.telephone}
                      </dd>
                    </div>
                    <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='text-sm font-medium text-gray-500'>
                        Email address
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        {userDetails.email}
                      </dd>
                    </div>
                    <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='text-sm font-medium text-gray-500'>
                        Street Address
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        {userDetails.address2}
                      </dd>
                    </div>
                    <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='text-sm font-medium text-gray-500'>
                        City, State, Zip
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>{`${userDetails.city}, ${userDetails.state} ${userDetails.zipcode}`}</dd>
                    </div>
                    <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='text-sm font-medium text-gray-500'>
                        Availability
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        {userDetails.availability}
                      </dd>
                    </div>
                    <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='text-sm font-medium text-gray-500'>
                        Update
                      </dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <ul className='border border-white rounded-md divide-y divide-white inline-flex'>
                          <li className='pl-3 pr-4 py-3 flex text-sm'>
                            <div className='ml-4 flex-shrink-0'>
                              <Link
                                to={{
                                  pathname: `/volunteers/edit/${id}/`,
                                  state: { userDetails: userDetails }
                                }}
                                className='font-medium text-indigo-600 hover:text-indigo-500'
                              >
                                <button
                                  type='button'
                                  className='inline-flex items-center px-2 py-1.5 border border-indigo-100 rounded-md shadow-sm text-sm font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                                >
                                  <PencilIcon
                                    className='-ml-1 mr-2 h-5 w-5 text-indigo-700'
                                    aria-hidden='true'
                                  />
                                  Edit User
                                </button>
                              </Link>
                            </div>
                          </li>
                          <li className='pl-3 pr-4 py-3 flex items-center justify-between text-sm'>
                            <div className='ml-4 flex-shrink-0'>
                              <button
                                type='button'
                                className='inline-flex items-center px-2 py-1.5 border border-indigo-100 rounded-md shadow-sm text-sm font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                                onClick={handleDelete}
                              >
                                <TrashIcon
                                  className='-ml-1 mr-2 h-5 w-5 text-indigo-700'
                                  aria-hidden='true'
                                />
                                Delete User
                              </button>
                            </div>
                          </li>
                        </ul>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
    </div>
    </div>
  </main>
