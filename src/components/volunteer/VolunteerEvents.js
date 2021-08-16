import { useState, useEffect } from 'react'

import { getEventsList } from '../../api.js'

export const VolunteerEvents = (props) => {
  const { token, authUser } = props
  const [allEvents, setAllEvents] = useState([])

  useEffect(() => {
    getEventsList().then((data) => setAllEvents(data.results))
  }, [])
  return (
    <>
      <ul className='divide-y divide-gray-200'>
        {allEvents.map((event) => (
          <li
            key={event.id}
            className='relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600'
          >
            <div className='flex justify-between space-x-3'>
              <div className='min-w-0 flex-1'>
                <a href='#' className='block focus:outline-none'>
                  <span className='absolute inset-0' aria-hidden='true' />
                  <p className='text-sm font-medium text-gray-900 truncate'>
                    {event.title}
                  </p>
                  <p className='text-sm text-gray-500 truncate'>{event.date}</p>
                  <p className='text-sm text-gray-500 truncate'>{event.start_time}</p>
                  <p className='line-clamp-2 text-sm text-gray-600'>
                    {event.location}
                  </p>
                  <span className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800'>
                    2 Volunteers Needed
                  </span>
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
