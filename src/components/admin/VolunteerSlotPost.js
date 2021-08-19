import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { newVSlot } from '../../api'

export const VolunteerSlotPost = (props) => {
  const { token, eventDetails, id } = props
  const [slotText, setSlotText] = useState('')
  const [amPm, setAmPm] = useState(false)
  const [volStart, setVolStart] = useState('')
  const history = useHistory()
  const eventID = eventDetails.id
  console.log(`slot post id ${id}`)

  const handleSubmit = () => {
    console.log(id, token, slotText, volStart)
    newVSlot(id, token, slotText, volStart)
      .then((res) => history.push(`/events/${id}/`))
  }

  return (
    <>
      Add a Volunteer Slot
      <div className='sm:col-span-6'>

        <label
          htmlFor='vol-duties'
          className='block text-sm font-medium text-gray-700'
        >
          Volunteer Duties
        </label>

        <div className='mt-1'>
          <textarea
            id='vol-duties'
            name='vol-duties'
            className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md'
            value={slotText}
            onChange={(event) => setSlotText(event.target.value)}
          />
        </div>

      </div>

      <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>

        <div className='mt-1 sm:mt-0 sm:col-span-2'>
          <select
            id='AMPM'
            name='AMPM'
            className='max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md'
            value={amPm}
            onChange={(event) => setAmPm(!amPm)}
          >

            <option>am</option>
            <option>pm</option>
          </select>
        </div>
      </div>

      <div className='sm:col-span-3'>
        <label
          htmlFor='volunteer-start-time' className='block text-sm font-medium text-gray-700'
        >Volunteer Start Time
        </label>
        <div className='mt-1 sm:mt-0 sm:col-span-2'>
          <select
            id='volunteer-start-time'
            name='volunteer-start-time'
            className='max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md'
            value={volStart}
            onChange={(event) => setVolStart(event.target.value)}
          >
            <option>1:00</option>
            <option>2:00</option>
            <option>3:00</option>
            <option>4:00</option>
          </select>
        </div>

        <button
          type='button'
          className='relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          onClick={handleSubmit}
        >
          Add Volunteer
        </button>
      </div>
    </>
  )
}
