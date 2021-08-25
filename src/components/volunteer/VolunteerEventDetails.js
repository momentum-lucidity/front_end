import { Fragment, useState, useEffect, useRef } from 'react'
import { VolunteerHeader } from './VolunteerHeader.js'
import { getEventDetails, getAllSlots } from '../../api'
import { useParams, useHistory, useLocation } from 'react-router-dom'
import { VSlotList } from './VSlotList'
import moment from 'moment'

export const VolunteerEventDetails = (props) => {
  const { token, authUser } = props
  const { id } = useParams()
  const fetchedEventDetails = useRef(false)
  const hasFetchedSlots = useRef(false)
  const [event, setEvent] = useState('')
  const [allSlots, setAllSlots] = useState([])

  useEffect(() => {
    if (!fetchedEventDetails.current) {
      getEventDetails(token, id).then((data) => {
        setEvent(data)
        fetchedEventDetails.current = true
      })
    }
  }, [token, id])

  useEffect(() => {
    if (!hasFetchedSlots.current) {
      getAllSlots(token)
        .then((data) => setAllSlots(data))
      hasFetchedSlots.current = true
    }
  }, [token])

  return (
    <>
      <VolunteerHeader authUser={authUser} />
      <div className='h-screen bg-white overflow-hidden flex bg-indigo-600 bg-opacity-5'>
        <div className='flex-1 max-w-4xl mx-auto w-0 flex flex-col md:px-8 xl:px-0'>
          <main className='flex-1 relative overflow-y-auto focus:outline-none'>
            <div className='py-6'>
              <div className='px-4 sm:px-6 md:px-0'>
                <h1 className='text-2xl pt-2 pb-4 font-semibold text-gray-900'>
                  Full Event Details
                </h1>
              </div>
              <div className='px-4 sm:px-6 md:px-0'>
                <div
                  key={event.id}
                  className='bg-white shadow overflow-hidden sm:rounded-lg'
                >
                  <div className='px-4 py-5 sm:px-6'>
                    <h3 className='text-lg pb-3 leading-6 font-medium text-gray-900'>
                      {event.event_header}{event.eventpk}
                    </h3>
                    <p className='text-sm pb-2 font-semibold text-black-500'>
                      Description:
                    </p>
                    <p className='text-sm text-black-500'>
                      {event.description}
                    </p>
                    <p className='text-sm font-semibold pt-2 pb-2 text-black-500'>
                      Event Type:
                      <br />
                    </p>
                    <p className='text-sm text-black-500'>{event.type}</p>
                  </div>
                  <div className='border-t border-gray-200 px-4 py-5 sm:px-6'>
                    <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
                      <div className='sm:col-span-1'>
                        <dt className='text-sm font-semibold pt-2 pb-2 text-black-500'>
                          Date
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900'>
                          {moment(event.date).format('LL')}
                        </dd>
                      </div>
                      <div className='sm:col-span-1'>
                        <dt className='text-sm font-semibold pt-2 pb-2 text-black-500'>
                          Time
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900'>
                          {event.start_time} to {event.end_time}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <VSlotList token={token} authUser={authUser} allSlots={allSlots} eventID={event.eventpk} setAllSlots={setAllSlots} />
          </main>
        </div>
      </div>

    </>
  )
}
