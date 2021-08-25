import { useEffect, useState, useRef } from 'react'
import { getEventsList } from '../../api'
import { Link } from 'react-router-dom'
import { orderBy } from 'lodash'
import moment from 'moment'
import { VolunteerEventsPagination } from './VolunteerEventsPagination'
import { CheckCircleIcon, ChevronRightIcon, BookmarkIcon } from '@heroicons/react/solid'

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

    <div className='bg-white shadow overflow-hidden sm:rounded-md'>
      <h2 className='px-8 pb-2 pt-4 text-md font-medium font-semibold text-gray-900' id='announcements-title'>
        Upcoming Volunteer Opportunites
      </h2>
      <ul className='divide-y divide-gray-200'>
        {currentVolEvents &&
                  currentVolEvents.map((event, idx) => (
                    <Link
                      key={event.eventpk}
                      to={{
                        pathname: `volunteer/events/${event.eventpk}/`,
                        state: {
                          yourSlots: yourSlots
                        }
                      }}
                    >
                      <li key={event.eventpk} className='block hover:bg-purple-50'>

                        <div className='flex items-center px-2 py-4 sm:px-4'>
                          <div className='min-w-0 flex-1 flex items-center'>
                            <div className='min-w-0 flex-1 px-4 items-center md:grid md:grid-cols-4 md:gap-4'>
                              <div className='col-span-3'>
                                <p className='text-med font-semibold text-indigo-700 truncate'>{event.event_header}
                                </p>
                                <p className='flex items-center overflow-ellipsis text-med text-gray-600'>
                                  {event.description}
                                </p>
                              </div>
                              <div className='justify-end'>
                                <div className='justify-end'>
                                  <p className=' ml-1 text-sm font-semibold text-gray-900'>{moment(event.date).format('LL')}</p>
                                  <p className='ml-1 text-sm text-gray-900'>{event.start_time}</p>
                                  <p className='inline-block text-sm text-gray-700'><BookmarkIcon className='mr-1 inline-block h-4 w-5 text-green-400' aria-hidden='true' />{event.type}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <ChevronRightIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
                          </div>
                        </div>

                      </li>
                    </Link>
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

  )
}
