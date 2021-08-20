import React, { useEffect, useState, useRef } from 'react'
import { deleteVolunteerSlot, getAllSlots } from '../../api'
import Avatar from 'react-avatar'
import { VolunteerSlotEdit } from './VolunteerSlotEdit'

export const VolunteerSlotRoster = (props) => {
  const { token, eventDetails } = props
  const [allVSlots, setAllVSlots] = useState([])
  const [selectedSlotID, setSelectedSlotID] = useState('')
  const [expand, setExpand] = useState(false)
  const fetchedAllSlots = useRef(false)
  const eventID = eventDetails.eventpk

  function classNames (...classes) {
    return classes.filter(Boolean).join(' ')
  }

  useEffect(() => {
    if (!fetchedAllSlots.current) {
      getAllSlots(token)
        .then((data) => setAllVSlots(data))
      fetchedAllSlots.current = true
    }
  }, [allVSlots, token])

  const filteredSlots = allVSlots.filter(slot => {
    return (slot.event === eventID)
  })

  const handleDelete = async () => {
    const success = await deleteVolunteerSlot(token, selectedSlotID)
    if (success) {
      getAllSlots()
        .then((data) => setAllVSlots(data))
    }
  }
  const handleClick = () => {
    setExpand(!expand)
    console.log(`expand ${expand}`)
  }

  console.log(`this is what you are looking for ${selectedSlotID}`)
  return (
    <div className='flex flex-col'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    Name
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    Title
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    Status
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    Role
                  </th>
                  <th scope='col' className='relative px-6 py-3'>
                    <span className='sr-only'>Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {filteredSlots.map((slot) => (
                  <div key={slot.slotpk} onClickCapture={() => setSelectedSlotID(slot.slotpk)}>
                    <tr key={slot.slotpk}>

                      <td className='px-6 py-4 whitespace-nowrap'>

                        <div className='flex items-center'>

                          <div className='flex-shrink-0 h-10 w-10'>
                            <Avatar name={slot.user} size='40' round />
                          </div>

                          <div className='ml-4'>
                            <div className='text-sm font-medium text-gray-900'>event_header:{eventDetails.event_header}</div>
                            <div className='text-sm text-gray-500'>this is the slotpk:{slot.slotpk}</div>
                          </div>

                        </div>

                      </td>

                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-900'>user id:{slot.user}</div>
                        <div className='text-sm text-gray-500'>vlot_text:{slot.vslot_text}</div>
                      </td>

                      <td className='px-6 py-4 whitespace-nowrap'>

                        <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                          slot.event id: {slot.event}
                          event ID : {eventID}
                        </span>

                      </td>

                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>event type:{eventDetails.type}</td>

                      <span className='hidden sm:block'>

                        <button
                          type='button'
                          className='inline-flex items-center px-4 py-2 border border-green-200 rounded-md shadow-sm text-sm font-medium text-black bg-transparent hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-200'
                          onClick={handleClick}
                        >
                          Edit
                        </button>

                      </span>

                      <span className='hidden sm:block'>

                        <button
                          type='button'
                          className='inline-flex items-center px-4 py-2 border border-red-300 rounded-md shadow-sm text-sm font-medium text-black bg-transparent hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                          onClick={handleDelete}
                        >
                          Delete
                        </button>

                      </span>

                    </tr>
                    <div>
                      {expand &&
                        <VolunteerSlotEdit token={token} setExpand={setExpand} />}
                    </div>
                  </div>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
