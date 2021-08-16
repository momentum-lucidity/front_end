import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getEventsList } from '../../api'

export const VolunteerEvents = (props) => {
  const { token, authUser } = props
  const [allEvents, setAllEvents] = useState([])

  useEffect(() => {
    getEventsList().then((data) => setAllEvents(data.results))
  }, [])

  function classNames (...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className='h-screen bg-white overflow-hidden flex'>

      <div className='flex-1 max-w-4xl mx-auto w-0 flex flex-col md:px-8 xl:px-0'>

        <main className='flex-1 relative overflow-y-auto focus:outline-none'>
          <div className='py-6'>
            <div className='px-4 sm:px-6 md:px-0'>
              <h1 className='text-2xl font-semibold text-gray-900'>
                Upcoming Events
              </h1>
            </div>
            <div className='px-4 sm:px-6 md:px-0'>
              <ul className='divide-y divide-gray-200'>
                {allEvents.results && allEvents.results.map((event, idx) => (
                  <li
                    key={event.eventpk}
                    className='relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600'
                  >
                    <div className='flex justify-between space-x-3'>
                      <div className='min-w-0 flex-1'>
                        <a
                          href={`/events/${event.eventpk}`}
                          className='block focus:outline-none'
                        >
                          <span
                            className='absolute inset-0'
                            aria-hidden='true'
                          />
                          <p className='text-sm font-medium text-gray-900 truncate'>
                            {event.event_header}
                          </p>
                          <p className='text-sm text-gray-500 truncate'>
                            {event.date}
                          </p>
                          <p className='text-sm text-gray-500 truncate'>
                            {event.time}
                          </p>
                          <p className='line-clamp-2 text-sm text-gray-600'>
                            {event.location}
                          </p>
                          <span className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800'>
                            Volunteers Needed
                          </span>
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
