import { VolunteerHeader } from './VolunteerHeader.js'
import { VolunteerEvents } from './VolunteerEvents.js'
import { VolunteerAnnouncements } from './VolunteerAnnouncements.js'
import { VolunteerDashIntake } from './VolunteerDashIntake.js'
import { YourVolunteerSlots } from './YourVolunteerSlots.js'
import { CheckIcon } from '@heroicons/react/solid'
import DCLogo from '../images/dclogo.png'

const steps = [
  { id: '01', name: 'Registration', status: 'complete' },
  { id: '02', name: 'Pending Approval', status: 'current' },
  { id: '03', name: 'Approved!', status: 'upcoming' }
]

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
              <VolunteerEvents authUser={authUser} token={token} />
            </div>
          </section>
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
                <YourVolunteerSlots token={token} authUser={authUser} />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
