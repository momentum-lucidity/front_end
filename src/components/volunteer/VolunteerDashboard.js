import React, { useState, useEffect, useRef, Fragment } from 'react'
import Avatar from 'react-avatar'
import { VolunteerHeader } from './VolunteerHeader.js'
import { VolunteerEvents } from './VolunteerEvents.js'
import { VolunteerAnnouncements } from './VolunteerAnnouncements.js'
import { VolunteerDashIntake } from './VolunteerDashIntake.js'
import { YourVolunteerSlots } from './YourVolunteerSlots.js'
import { getAllSlots } from '../../api.js'
import DCLogo from '../images/dclogo.png'

import { Menu, Popover, Transition } from '@headlessui/react'
import {
  AcademicCapIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  MailIcon,
  BadgeCheckIcon,
  BellIcon,
  CashIcon,
  ClockIcon,
  MenuIcon,
  ReceiptRefundIcon,
  UsersIcon,
  XIcon
} from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'

export const VolunteerDashboard = (props) => {
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
  }, [token, allSlots])

  const yourSlots = allSlots.filter(item => {
    return (item.user[0] === userID)
  })
  console.log({ yourSlots })

  function classNames (...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <>
      <VolunteerHeader authUser={authUser} token={token} />

      <div className='relative min-h-screen bg-indigo-400 bg-opacity-5'>
        <main className='mt-0 pb-8'>
          <div className='pt-6 max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
            <h1 className='sr-only'>Profile</h1>
            {/* Main 3 column grid */}
            <div className='grid grid-cols-3 gap-4 items-start lg:grid-cols-3 lg:gap-8 sm:grid-cols-1'>
              {/* Right column */}
              <div className='grid grid-cols-1 gap-4'>
                {/* Announcements */}
                <VolunteerAnnouncements authUser={authUser} token={token} />
              </div>

              {/* Left column */}
              <div className='grid grid-cols-1 gap-4 lg:col-span-2'>
                {/* Welcome panel */}
                <section aria-labelledby='profile-overview-title'>
                  <div className='rounded-lg bg-white overflow-hidden shadow'>
                    <h2 className='sr-only' id='profile-overview-title'>
                      Profile Overview
                    </h2>
                    <div className='bg-white p-6'>
                      <div className='sm:flex sm:items-center sm:justify-between'>
                        <div className='sm:flex sm:space-x-5'>
                          <div className='flex-shrink-0'>
                            <Avatar name={authUser.legal_name} size='80' round />
                          </div>
                          <div className='mt-6 text-center sm:mt-2 sm:pt-1 sm:text-left'>
                            <p className='text-xl font-medium text-gray-600'>Welcome back,</p>
                            <p className='text-3xl font-bold text-gray-900 sm:text-2xl'>{authUser.display_name}!</p>
                          </div>
                        </div>
                        <div className='mt-5 justify-center sm:mt-0'>
                          <a
                            href='/dreamcenter/profile'
                            className='flex justify-center items-center mb-1 px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
                          >
                            My profile
                          </a>
                          <a
                            href='https://docs.google.com/document/d/11V1bi6IcLS8H2TBtBzN9H_sc2mc76YBJ/edit'
                            className='flex justify-center items-center mt-1 px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
                          >
                            Handbook
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='border-t border-gray-200 bg-gray-50 grid grid-cols-1'>
                      <VolunteerDashIntake token={token} authUser={authUser} />
                    </div>
                  </div>
                </section>

                <section aria-labelledby='upcoming volunteer slots'>
                  <div className='rounded-lg bg-white overflow-hidden shadow pt-3 pb-5'>

                    <YourVolunteerSlots token={token} authUser={authUser} yourSlots={yourSlots} />

                  </div>
                </section>

                {/* Actions panel */}
                <VolunteerEvents authUser={authUser} token={token} allSlots={allSlots} yourSlots={yourSlots} setAllSlots={setAllSlots} />

              </div>
            </div>
          </div>
        </main>
        <footer>
          <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl'>
            <div className='border-t border-gray-200 py-8 text-sm text-gray-500 text-center sm:text-left'>
              <span className='block sm:inline'>&copy; Lucidity Software  </span>{' '}
              <span className='block sm:inline'>All rights reserved.</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
