import React, { useState } from 'react'
import Avatar from 'react-avatar'
import { useHistory } from 'react-router-dom'

export const VSlotList = (props) => {
  const { authUser, token, yourSlots, allEventSlots, eventID } = props
  const [selectedSlotID, setSelectedSlotID] = useState('')
  const history = useHistory()

  function classNames (...classes) {
    return classes.filter(Boolean).join(' ')
  }
  console.log(allEventSlots)

  const filteredSlots = allEventSlots.filter(slot => {
    return (slot.event === eventID)
  })

  console.log(`event id: ${eventID}`)
  console.log(filteredSlots)

  const handleClick = (event) => {
    setSelectedSlotID(event.target.value)
  }

  return (

    <div className='grid grid-cols-1 gap-4 sm:grid-cols-1'>

      {filteredSlots.map((eSlot) => (
        <div
          key={eSlot.slotpk}
          onClickCapture={() => setSelectedSlotID(eSlot.slotpk)}
          className='relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'
        >
          <div className='flex-shrink-0'>
            <Avatar name={eSlot.user} size='40' round />
          </div>
          <div className='flex-1 min-w-0'>
            <div>
              <p className='text-sm font-medium text-gray-900'>Scheduled Volunteer:{eSlot.user}</p>
              <p className='text-sm text-gray-500 truncate'>Date: {eSlot.date}</p>
              <p className='text-sm text-gray-500 truncate'>Start Time: {eSlot.starttime}</p>
              <p className='text-sm text-gray-500 truncate'>End Time: {eSlot.endtime}</p>
              <p className='text-sm text-gray-500 truncate'>Role/Duties: {eSlot.vslot_text}</p>
              <div className='px-6 py-2 whitespace-nowrap text-right text-sm font-medium'>
                <button
                  type='button'
                  value={eSlot.slotpk}
                  className='text-indigo-600 hover:text-indigo-900'
                  onClick={handleClick}
                >
                  Edit
                </button>
              </div>
              <div className='px-6 py-2 whitespace-nowrap text-right text-sm font-medium'>
                <button
                  type='button'
                  className='text-indigo-600 hover:text-indigo-900'
                >
                  Delete
                </button>
              </div>

            </div>
          </div>
        </div>
      ))}

    </div>
  )
}
