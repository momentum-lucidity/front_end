import React, { useEffect, useState, useRef } from 'react'
import { getAllSlots } from '../../api'
import Avatar from 'react-avatar'
import { VolunteerSlotDelete } from './VolunteerSlotDelete'
import { Switch } from '@headlessui/react'

export const VolunteerSlotRoster = (props) => {
  const { token, eventDetails } = props
  const [allVSlots, setAllVSlots] = useState([])
  const [selectedSlotPK, setSelectedSlotPK] = useState('')
  const [enabled, setEnabled] = useState(false)
  const fetchedAllSlots = useRef(false)
  const eventID = eventDetails.eventpk
  console.log(`eventID - ${eventID}`)

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

  console.log(`this is the selectedSlotPK ${selectedSlotPK}`)
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
                {allVSlots.map((slot) => (
                  <tr
                    key={slot.slotpk}

                  >
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='flex items-center'>
                        <div className='flex-shrink-0 h-10 w-10'>
                          <Avatar name={slot.user} size='40' round />

                        </div>
                        <div className='ml-4'>
                          <div className='text-sm font-medium text-gray-900'>{eventDetails.event_header}</div>
                          <div className='text-sm text-gray-500'>this is the slotpk{slot.slotpk}</div>
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm text-gray-900'>{slot.user}</div>
                      <div className='text-sm text-gray-500'>{slot.time}</div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                        Open/filled
                      </span>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{eventDetails.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}