import React from 'react'

export const YourVolunteerSlots = (props) => {
  const { token, authUser, yourSlots } = props

  function classNames (...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <div className='rounded-lg bg-white'>
      <div className='border-b-0 border-gray-300 px-8 pb-2'>
        <h2 className='border-b-0 border-gray-300 text-md font-medium font-semibold text-gray-900' id='announcements-title'>
          Your Next Scheduled Shifts
        </h2>
      </div>
      <div className='flex items-center justify-evenly bg-white rounded-r-md truncate'>
        {yourSlots.map((ySlot) => (
          <div
            key={ySlot.slotpk}
            className='relative rounded-lg border border-gray-300 bg-white px-4 py-1 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'
          >
            <div className='flex-shrink-0' />
            <div className='flex-1 min-w-0'>
              <a href={`/dreamcenter/volunteer/events/${ySlot.event}`} className='focus:outline-none'>
                <span className='absolute inset-0' aria-hidden='true' />
                <p className='text-sm font-medium text-gray-900'>{ySlot.event}</p>
                <p className='text-sm text-gray-500 truncate'>{ySlot.starttime}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}
