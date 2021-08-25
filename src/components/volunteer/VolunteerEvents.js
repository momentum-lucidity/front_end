import { useEffect, useState, useRef } from 'react'
import { getEventsList } from '../../api'
import { Link } from 'react-router-dom'
import { orderBy } from 'lodash'
import moment from 'moment'

export const VolunteerEvents = (props) => {
  const hasFetchedEvents = useRef(false)
  const { token, authUser, allSlots, setAllSlots, yourSlots } = props
  const [allEvents, setAllEvents] = useState([])

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

  function classNames (...classes) {
    return classes.filter(Boolean).join(' ')
  }
  console.log({ allSlots })
  console.log({ yourSlots })
  return (
    <div className='h-screen bg-white overflow-hidden overflow-y-auto flex flex-initial'>
      <div className='flex-1 max-w-4xl mx-auto w-0 flex flex-col md:px-8 xl:px-0'>
        <main className='flex-1 relative focus:outline-none'>
          <div className='py-6'>
            <div className='px-4 sm:px-6 md:px-0 overflow-y-auto '>
              <ul className='divide-y divide-gray-500'>
                {sortedEvents &&
                  sortedEvents.map((event, idx) => (
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
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
