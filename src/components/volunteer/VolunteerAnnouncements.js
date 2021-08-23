import React, { Fragment, useEffect, useState } from 'react'
import moment from 'moment'
import { orderBy } from 'lodash'
import { getAnnouncements } from '../../api'

export const VolunteerAnnouncements = (props) => {
  const [announcements, setAnnouncements] = useState([])

  useEffect(() => {
    getAnnouncements().then((data) => setAnnouncements(data))
  }, [])

  const sortedAnnouncements = orderBy(
    announcements.results,
    [(object) => new moment(object.date)],
    ['desc']
  )

  function classNames (...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className='flex flex-col h-screen overflow-y-auto bg-white overflow-hidden flex'>
      <div>
        <h1 className='flex flex-col items-left text-lg font-medium'>
          Current Announcements
        </h1>
        <ul className='flex flex-col justify-start divide-y divide-gray-500'>
          {sortedAnnouncements.map((announcement, idx) => (
            <li
              key={announcement.alertpk}
              className='flex flex-col py-4 sm:border-t sm:border-gray-200'
            >
              <ul>
                <div className='flex flex-col justify-start space-x-3'>
                  <div className='flex flex-col flex-1 justify-start space-y-1'>
                    <div className='flex flex-col flex justify-start justify-between'>
                      <div className='divide-y divide-gray-200'>
                        <li className='text-sm text-gray-700'>
                          Posted on: {moment(announcement.date).format('LL')}
                        </li>
                      </div>
                      <div className='divide-y divide-gray-200'>
                        <li className='text-sm font-medium'>
                          {announcement.alert_header}
                        </li>
                      </div>
                      <div className='divide-y divide-gray-200'>
                        <li className='items-center text-sm text-gray-700'>
                          {announcement.text}
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
