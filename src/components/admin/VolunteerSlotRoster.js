import React, { useEffect, useState, useRef } from 'react'
import { deleteVolunteerSlot, getAllSlots } from '../../api'
import Avatar from 'react-avatar'
import { VolunteerSlotEdit } from './VolunteerSlotEdit'
import { useHistory } from 'react-router-dom'

export const VolunteerSlotRoster = (props) => {
  const { token, eventDetails, allVSlots, setAllVSlots, setErrors, errors } = props
  const [selectedSlotID, setSelectedSlotID] = useState('')
  const [expand, setExpand] = useState(false)
  const fetchedAllSlots = useRef(false)
  const history = useHistory()
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
      history.push(`/events/${eventID}`)
    }
  }
  const handleClick = (event) => {
    console.log(selectedSlotID)
        setExpand(!expand)
        setErrors()
  }

  return (

    <div className='grid grid-cols-1 gap-4 sm:grid-cols-1'>
      
      {filteredSlots.map((slot) => (
        <div
          key={slot.slotpk}
          onClickCapture={() => setSelectedSlotID(slot.slotpk)}
          className='relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'
        >
          <div className='flex-shrink-0'>
            <Avatar name={slot.user} size='40' round />
          </div>
          <div className='flex-1 min-w-0'>
            <div>
              <p className='text-sm font-medium text-gray-900'>Scheduled Volunteer:{slot.user}</p>
              <p className='text-sm text-gray-500 truncate'>Date: {slot.date}</p>
              <p className='text-sm text-gray-500 truncate'>Start Time: {slot.starttime}</p>
              <p className='text-sm text-gray-500 truncate'>End Time: {slot.endtime}</p>
              <p className='text-sm text-gray-500 truncate'>Role/Duties: {slot.vslot_text}</p>
              <div className='px-6 py-2 whitespace-nowrap text-right text-sm font-medium'>
                <button
                  type='button'
                  id={slot.slotpk}
                  className='text-indigo-600 hover:text-indigo-900'
                  aria-label='more options'
                  onClick={handleClick}
                >
                  Edit
                </button>
              </div>
              <div className='px-6 py-2 whitespace-nowrap text-right text-sm font-medium'>
                <button
                  type='button'
                  className='text-indigo-600 hover:text-indigo-900'
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
              <div>
            {expand && 
                  <VolunteerSlotEdit token={token} selectedSlotID={selectedSlotID} setExpand={setExpand} errors={errors} setErrors={setErrors} />}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
