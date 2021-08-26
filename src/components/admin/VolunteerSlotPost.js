import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { newVSlot, getAllSlots } from '../../api'

export const VolunteerSlotPost = (props) => {
  const {
    token,
    eventID,
    setExpandNew,
    setAllVSlots,
    errors,
    setErrors,
    slotText,
    setSlotText,
    volStart,
    setVolStart,
    volEnd,
    setVolEnd,
    date,
    setDate
  } = props
  const history = useHistory()

  const handleSubmit = async () => {
    const success = await newVSlot(
      eventID,
      token,
      slotText,
      volStart,
      volEnd,
      date
    ).catch((error) => {
      setErrors(error.message)
    })
    if (success) {
      getAllSlots(token).then((data) => setAllVSlots(data))
      setExpandNew(false)
      history.push(`/events/${eventID}/`)
    }
  }

  const handleCancel = () => {
    setExpandNew(false)
  }

  return (
    <div className='space-y-6'>
      <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6'>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>
              Create A New Volunteer Slot
            </h3>
            <p className='mt-1 text-sm text-gray-500' />
          </div>
          <div className='mt-5 md:mt-0 md:col-span-2'>
            <form action='#' method='POST'>
              <div className='grid grid-cols-6 gap-6'>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='first-name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Description of Volunteer's Role
                  </label>
                  <input
                    type='text'
                    id='description'
                    className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    value={slotText}
                    onChange={(event) => setSlotText(event.target.value)}
                  />
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='date'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Date
                  </label>
                  <input
                    type='date'
                    name='date'
                    value={date}
                    id='date'
                    autoComplete='family-name'
                    className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    onChange={(event) => setDate(event.target.value)}
                  />
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='country'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Start Time
                  </label>
                  <select
                    id='country'
                    name='country'
                    autoComplete='country'
                    className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    value={volStart}
                    onChange={(event) => setVolStart(event.target.value)}
                  >
                    <option>-</option>
                    <option>12:00 AM</option>
                    <option>1:00 AM</option>
                    <option>2:00 AM</option>
                    <option>3:00 AM</option>
                    <option>4:00 AM</option>
                    <option>5:00 AM</option>
                    <option>6:00 AM</option>
                    <option>7:00 AM</option>
                    <option>8:00 AM</option>
                    <option>9:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>1:00 PM</option>
                    <option>2:00 PM</option>
                    <option>3:00 PM</option>
                    <option>4:00 PM</option>
                    <option>5:00 PM</option>
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                    <option>9:00 PM</option>
                    <option>10:00 PM</option>
                    <option>11:00 PM</option>
                    <option>12:00 PM</option>
                  </select>
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='country'
                    className='block text-sm font-medium text-gray-700'
                  >
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
                    <option>-</option>
                    <option>12:00 AM</option>
                    <option>1:00 AM</option>
                    <option>2:00 AM</option>
                    <option>3:00 AM</option>
                    <option>4:00 AM</option>
                    <option>5:00 AM</option>
                    <option>6:00 AM</option>
                    <option>7:00 AM</option>
                    <option>8:00 AM</option>
                    <option>9:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>1:00 PM</option>
                    <option>2:00 PM</option>
                    <option>3:00 PM</option>
                    <option>4:00 PM</option>
                    <option>5:00 PM</option>
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                    <option>9:00 PM</option>
                    <option>10:00 PM</option>
                    <option>11:00 PM</option>
                    <option>12:00 PM</option>
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
