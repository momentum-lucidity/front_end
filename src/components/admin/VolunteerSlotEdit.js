import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { editVSlot } from '../../api'

export const VolunteerSlotEdit = (props) => {
  const { token, id, setExpand, setErrors, selectedSlotID } = props
  const [slotText, setSlotText] = useState('')
  const [volStart, setVolStart] = useState('')
  const [volEnd, setVolEnd] = useState('')
  const history = useHistory()

  console.log(`slot post id ${selectedSlotID}`)

  const handleSubmit = () => {
    editVSlot(id, token, slotText, volStart)
      .then((res) => history.push(`/events/${id}/`))
      .catch((error) => {
        setErrors(error.message)
      })
  }

  const handleCancel = () => {
    setExpand(false)
  }

  return (
    <div className='space-y-6'>

      <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6'>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>Edit Volunteer Slot</h3>
            <p className='mt-1 text-sm text-gray-500'>Use a permanent address where you can receive mail.</p>
          </div>
          <div className='mt-5 md:mt-0 md:col-span-2'>
            <form action='#' method='POST'>
              <div className='grid grid-cols-6 gap-6'>
                <div className='col-span-6'>
                  <label htmlFor='street-address' className='block text-sm font-medium text-gray-700'>
                    Volunteer Assigned
                  </label>
                  <input
                    type='text'
                    name='street-address'
                    id='street-address'
                    autoComplete='street-address'
                    className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                  />
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label htmlFor='first-name' className='block text-sm font-medium text-gray-700'>
                    Description of Role/Duties
                  </label>
                  <input
                    type='text'
                    id='first-name'
                    className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    value={slotText}
                    onChange={(event) => setSlotText(event.target.value)}
                  />
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label htmlFor='last-name' className='block text-sm font-medium text-gray-700'>
                    Date
                  </label>
                  <input
                    type='text'
                    name='last-name'
                    id='last-name'
                    autoComplete='family-name'
                    className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                  />
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label htmlFor='country' className='block text-sm font-medium text-gray-700'>
                    End Time
                  </label>
                  <select
                    id='country'
                    name='country'
                    autoComplete='country'
                    className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    value={volStart}
                    onChange={(event) => setVolStart(event.target.value)}
                  >
                    <option>12:00</option>
                    <option>01:00</option>
                    <option>02:00</option>
                    <option>03:00</option>
                    <option>04:00</option>
                    <option>05:00</option>
                    <option>06:00</option>
                    <option>07:00</option>
                    <option>08:00</option>
                    <option>09:00</option>
                    <option>10:00</option>
                    <option>11:00</option>
                  </select>
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label htmlFor='country' className='block text-sm font-medium text-gray-700'>
                    End Time
                  </label>
                  <select
                    id='country'
                    name='country'
                    autoComplete='country'
                    className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    value={volEnd}
                    onChange={(event) => setVolEnd(event.target.value)}
                  >
                    <option>12:00</option>
                    <option>01:00</option>
                    <option>02:00</option>
                    <option>03:00</option>
                    <option>04:00</option>
                    <option>05:00</option>
                    <option>06:00</option>
                    <option>07:00</option>
                    <option>08:00</option>
                    <option>09:00</option>
                    <option>10:00</option>
                    <option>11:00</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='flex justify-end'>
        <button
          type='button'
          className='bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          type='submit'
          className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  )
}
