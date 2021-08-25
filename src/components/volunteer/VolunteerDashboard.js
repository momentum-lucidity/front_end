import React, { useState, useEffect, useRef } from 'react'
import { VolunteerHeader } from './VolunteerHeader.js'
import { VolunteerEvents } from './VolunteerEvents.js'
import { VolunteerAnnouncements } from './VolunteerAnnouncements.js'
import { VolunteerDashIntake } from './VolunteerDashIntake.js'
import { YourVolunteerSlots } from './YourVolunteerSlots.js'
import { getAllSlots } from '../../api.js'
import DCLogo from '../images/dclogo.png'

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
  return (
    <>
      <VolunteerHeader authUser={authUser} token={token} />
      <main className='py-10 bg-indigo-600 bg-opacity-5'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8'>
          <div className='flex items-center space-x-5'>
            <div className='flex-shrink-0'>
              <div className='relative'>
                <img
                  className='block h-28 w-auto'
                  src={DCLogo}
                  alt='Dream Big'
                />
              </div>
            </div>
            <div>
              <h1 className='text-3xl font-bold text-gray-900 mr-8'>
                Welcome, {authUser.display_name}
              </h1>
            </div>
            <VolunteerDashIntake token={token} authUser={authUser} />
          </div>
        </div>

        <div className='mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-2 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 sm:grid-cols-2'>

          <div className='space-y-6 lg:col-start-1 lg:col-span-1 row-span-5'>

            <div className='bg-white shadow sm:rounded-lg'>
              <div className='border-t border-gray-200 px-4 py-5 sm:px-6'>
                <VolunteerAnnouncements authUser={authUser} token={token} />
              </div>
            </div>

          </div>

          <section className=' grid row-span-1 lg:grid-flow-row-dense lg:col-start-5 lg:col-span-3'>
            <div className='bg-white space-y-3 px-4 py-5 shadow sm:rounded-lg sm:px-6'>
              <h2 className='text-2xl font-semibold text-gray-900'>
                Your Next Volunteer Position
              </h2>
              <div className='bg-white shadow rounded-md px-6 py-2'>

                <div className='mt-3 col-span-2 grid grid-cols-2'>
                  <YourVolunteerSlots token={token} authUser={authUser} yourSlots={yourSlots} />
                </div>

              </div>
            </div>

          </section>

          <section className='lg:col-start-5 lg:col-span-3'>
            <div className='bg-white px-4 py-5 shadow sm:rounded-lg flex-initial sm:px-6'>
              <h1 className='text-2xl pb-1 font-semibold text-gray-900'>
                All Upcoming Events
              </h1>
              <VolunteerEvents authUser={authUser} token={token} allSlots={allSlots} yourSlots={yourSlots} setAllSlots={setAllSlots} />
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
