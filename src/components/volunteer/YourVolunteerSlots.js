import React from 'react'

export const YourVolunteerSlots = (props) => {
  const { token, authUser, yourSlots } = props

  function classNames (...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <div className=''>
      {yourSlots.map((ySlot) => (

        <a key={ySlot.slotpk} href={`/dreamcenter/volunteer/events/${ySlot.event}`} className='text-gray-900 flex mb-2 font-medium hover:bg-indigo-100'>
          <div className='flex'>
            <div
              className='flex items-center justify-center w-8 bg-indigo-700 text-gray-50 text-sm font-medium rounded-l-md'
            >
              {ySlot.event}
            </div>
            <div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray 900 bg-white rounded-r-md truncate'>
              <div className='flex-1 px-4 py-2 text-sm truncate'>
                <p className='text-gray-900'>{ySlot.starttime}</p>
              </div>
            </div>
          </div>
        </a>

      ))}
    </div>

  )
}
