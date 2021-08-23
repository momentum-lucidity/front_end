import { VolunteerHeader } from './VolunteerHeader.js'
import { VolunteerEvents } from './VolunteerEvents.js'
import { VolunteerAnnouncements } from './VolunteerAnnouncements.js'
import { VolunteerDashIntake } from './VolunteerDashIntake.js'
// import { YourVolunteerSlots } from './YourVolunteerSlots.js'
import { CheckIcon } from '@heroicons/react/solid'
import DCLogo from '../images/dclogo.png'


export const VolunteerDashboard = (props) => {
  const { token, authUser } = props
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

        <div className='mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-3 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3'>
          <div className='space-y-6 lg:col-start-1 lg:col-span-4 row-span-5'>
            <section aria-labelledby='applicant-information-title'>
              <div className='bg-white shadow sm:rounded-lg'>
                <div className='border-t border-gray-200 px-4 py-5 sm:px-6'>
                  <VolunteerAnnouncements authUser={authUser} token={token} />
                </div>
              </div>
            </section>
          </div>

          <section
            aria-labelledby='timeline-title'
            className='lg:col-start-5 lg:col-span-1'
          >
            <div className='bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6'>
              <h2
                id='timeline-title'
                className='text-lg font-medium text-gray-900'
              >
                Your Next Volunteer Position
              </h2>
              <div>
                {/* <YourVolunteerSlots token={token} authUser={authUser} /> */}
              </div>
            </div>
            <ul className='space-y-3'>
              <li className='bg-white shadow overflow-hidden rounded-md px-6 py-4'>
                <div>
                  <ul className='mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                    <li className='col-span-1 flex shadow-sm rounded-md'>
                      <div className='bg-green-500 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'>
                        DC
                      </div>
                      <div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate'>
                        <div className='flex-1 px-4 py-2 text-sm truncate'>
                          <h3>Event Title</h3>
                          <p className='text-gray-500'>Time</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>

          <section
            aria-labelledby='timeline-title'
            className='lg:col-start-5 lg:col-span-1'
          >
            <div className='bg-white px-4 py-5 shadow sm:rounded-lg flex-initial sm:px-6'>
              <h1 className='text-2xl pb-1 font-semibold text-gray-900'>
                All Upcoming Events
              </h1>
              <VolunteerEvents authUser={authUser} token={token} />
            </div>
          </section>
        </div>
      </main>
    </>
  )
};
