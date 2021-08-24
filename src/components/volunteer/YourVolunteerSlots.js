import React, { useState, useEffect, useRef } from 'react'
import { getAllSlots } from '../../api'
import { DotsVerticalIcon } from '@heroicons/react/solid'

export const YourVolunteerSlots = (props) => {
  const { token, authUser } = props
  const [allSlots, setAllSlots] = useState([])
  const hasFetchedSlots = useRef(false)
  const userID = authUser.id
  useEffect(() => {
    if (!hasFetchedSlots.current) {
      getAllSlots(token)
        .then((data) => setAllSlots(data))
      hasFetchedSlots.current = true
    }
  }, [allSlots, token])

  const yourSlots = allSlots.filter(item => {
    return (item.user[0] === userID)
  })
  console.log(yourSlots)
  function classNames (...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <div>
      <h2 className='text-gray-500 text-xs font-medium uppercase tracking-wide'>Pinned Projects</h2>
      <ul role='list' className=''>
        {yourSlots.map((ySlot) => (
          <li key={ySlot.slotpk} className='col-span-1 flex shadow-sm rounded-md'>
            <a href={`/dreamcenter/volunteer/events/${ySlot.event}`} className='text-gray-900 font-medium hover:text-gray-600'>
              <div
                className='flex-shrink-0 flex items-center justify-center w-16 bg-indigo-700 text-gray-50 text-sm font-medium rounded-l-md'
              >
                {ySlot.event}
              </div>
              <div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate'>
                <div className='flex-1 px-4 py-2 text-sm truncate'>
                  <p className='text-gray-900'>{ySlot.starttime}</p>
                </div>
                <div className='flex-shrink-0 pr-2'>
                  <button
                    type='button'
                    className='w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  >
                    <span className='sr-only'>Open options</span>
                    <DotsVerticalIcon className='w-5 h-5' aria-hidden='true' />
                  </button>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>

  )
}
