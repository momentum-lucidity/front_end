import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { orderBy } from 'lodash'
import { getAnnouncements } from '../../api'
import { VolunteerAnnouncementPagination } from './VolunteerAnnouncementPagination'

export const VolunteerAnnouncements = (props) => {
  const { token } = props
  const [announcements, setAnnouncements] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [volAnnouncementsPerPage] = useState(5)

  useEffect(() => {
    getAnnouncements(token).then((data) => setAnnouncements(data))
  }, [])

  const sortedAnnouncements = orderBy(
    announcements.results,
    [(object) => new moment(object.date)],
    ['desc']
  )

  function classNames (...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const indexOfLastVolAnnouncement = currentPage * volAnnouncementsPerPage
  const indexOfFirstVolAnnouncement =
    indexOfLastVolAnnouncement - volAnnouncementsPerPage
  const currentVolAnnouncements = sortedAnnouncements.slice(
    indexOfFirstVolAnnouncement,
    indexOfLastVolAnnouncement
  )

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (

    <section aria-labelledby='announcements-title'>
      <div className='rounded-lg bg-white overflow-hidden shadow'>
        <div className='p-6'>
          <h2 className='text-md font-medium font-semibold text-gray-900' id='announcements-title'>
            Announcements
          </h2>
          <div className='flow-root mt-6'>
            <ul role='list' className='-my-5 divide-y divide-gray-200'>
              {currentVolAnnouncements && currentVolAnnouncements.map((announcement, idx) => (
                <li
                  key={announcement.alertpk}
                  className='flex flex-col py-4 sm:border-t sm:border-gray-200'
                >
                  <div className='relative focus-within:ring-2 focus-within:ring-cyan-500'>
                    <h3 className='text-base font-semibold text-gray-800'>
                      <a href={announcement.href} className='hover:underline focus:outline-none'>
                        {/* Extend touch target to entire panel */}
                        <span className='absolute inset-0' aria-hidden='true' />
                        {announcement.alert_header}
                      </a>
                    </h3>
                    <p className='mt-1 text-sm text-gray-500 line-clamp-2'>Posted on: {moment(announcement.date).format('LL')}</p>
                    <p className='mt-1 text-md text-gray-600 line-clamp-2'>{announcement.text}</p>
                  </div>
                </li>
              ))}
              <div className='flex items-center justify-center'>
                <VolunteerAnnouncementPagination
                  volAnnouncementsPerPage={volAnnouncementsPerPage}
                  totalAnnouncements={sortedAnnouncements.length}
                  paginate={paginate}
                />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>

  )
}
