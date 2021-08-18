import { VolunteerHeader } from './VolunteerHeader.js'
import { VolunteerEvents } from './VolunteerEvents.js'
import { VolunteerAnnouncements } from './VolunteerAnnouncements.js'
import { CheckIcon } from '@heroicons/react/solid'

const steps = [
  { id: '01', name: 'Registration', status: 'complete' },
  { id: '02', name: 'Pending Approval', status: 'current' },
  { id: '03', name: 'Approved!', status: 'upcoming' }
]

export const VolunteerDashboard = (props) => {
  const { token, authUser } = props
  return (
    <>
      <VolunteerHeader />
      <main className='py-10'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8'>
          <div className='flex items-center space-x-5'>
            <div className='flex-shrink-0'>
              <div className='relative'>
                <span className='inline-flex items-center justify-center h-14 w-14 rounded-full bg-gray-500'>
                  <span className='text-xl font-medium leading-none text-white'>V</span>
                </span>
                <span
                  className='absolute inset-0 shadow-inner rounded-full'
                  aria-hidden='true'
                />
              </div>
            </div>
            <div>
              <h1 className='text-2xl font-bold text-gray-900'>
                Welcome, {authUser.display_name}
              </h1>
              <p className='text-sm font-medium text-gray-500'>
                joined{' '}
                on <time dateTime='2020-08-25'>August 25, 2020</time>
              </p>
            </div>
            <nav aria-label='Progress'>
              <ol className='border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0'>
                {steps.map((step, stepIdx) => (
                  <li key={step.name} className='relative md:flex-1 md:flex'>
                    {step.status === 'complete'
                      ? (
                        <span className='px-6 py-4 flex items-center text-sm font-medium'>
                          <span className='flex-shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800'>
                            <CheckIcon className='w-6 h-6 text-white' aria-hidden='true' />
                          </span>
                          <span className='ml-4 text-sm font-medium text-gray-900'>{step.name}</span>
                        </span>
                        )
                      : step.status === 'current'
                        ? (
                          <a href={step.href} className='px-6 py-4 flex items-center text-sm font-medium' aria-current='step'>
                            <span className='flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full'>
                              <span className='text-indigo-600'>{step.id}</span>
                            </span>
                            <span className='ml-4 text-sm font-medium text-indigo-600'>{step.name}</span>
                          </a>
                          )
                        : (
                          <a href={step.href} className='group flex items-center'>
                            <span className='px-6 py-4 flex items-center text-sm font-medium'>
                              <span className='flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400'>
                                <span className='text-gray-500 group-hover:text-gray-900'>{step.id}</span>
                              </span>
                              <span className='ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900'>{step.name}</span>
                            </span>
                          </a>
                          )}

                    {stepIdx !== steps.length - 1
                      ? (
                        <>
                          {/* Arrow separator for lg screens and up */}
                          <div className='hidden md:block absolute top-0 right-0 h-full w-5' aria-hidden='true'>
                            <svg
                              className='h-full w-full text-gray-300'
                              viewBox='0 0 22 80'
                              fill='none'
                              preserveAspectRatio='none'
                            >
                              <path
                                d='M0 -2L20 40L0 82'
                                vectorEffect='non-scaling-stroke'
                                stroke='currentcolor'
                                strokeLinejoin='round'
                              />
                            </svg>
                          </div>
                        </>
                        )
                      : null}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>

        <div className='mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-3 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3'>
          <div className='space-y-6 lg:col-start-1 lg:col-span-4 row-span-5'>
            <section aria-labelledby='applicant-information-title'>
              <div className='bg-white shadow sm:rounded-lg'>
                <div className='border-t border-gray-200 px-4 py-5 sm:px-6'>
                  <VolunteerAnnouncements />
                </div>
              </div>
            </section>
          </div>

          <section
            aria-labelledby='timeline-title'
            className='lg:col-start-5 lg:col-span-1'
          >
            <div className='bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6'>
              <VolunteerEvents />
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
            </div>
            <ul className='space-y-3'>
              <li
                className='bg-white shadow overflow-hidden rounded-md px-6 py-4'
              >
                <div>
                  <ul className='mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                    <li
                      className='col-span-1 flex shadow-sm rounded-md'
                    >
                      <div
                        className='bg-green-500 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
                      >
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
        </div>
      </main>
    </>
  )
}
