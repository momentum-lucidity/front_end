/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
  UsersIcon,
  XIcon
} from '@heroicons/react/outline'

const activityItems = [
  {
    announcement_id: 1,
    person: 'Lauren',
    title: 'Coaching sign-ups',
    announcement_text: 'Sign ups for coaching postition will being Monday Sept 9.  We will have 9 available spots.',
    date: 'Sept 1, 2021'
  },
  {
    announcement_id: 2,
    person: 'Lauren',
    title: ' Urgent - After School Volunteer Needed',
    announcement_text: 'We urgently need an open volunteer slot to be filled for Wed and Thurs afternoons with our after school program.  If you are able to help out please sign up under the events section.',
    date: 'Sept 2, 2021'
  },
  {
    announcement_id: 3,
    person: 'Maria',
    title: 'Fall Festival Meeting',
    announcement_text: 'Our final organization meeting for the 2021 fall festival will be held on Sept 28th at 7:30 pm',
    date: 'Sept 2, 2021'
  }
]

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon, current: false },
  { name: 'Volunteers', href: '/volunteers', icon: UsersIcon, current: false },
  { name: 'Events', href: '/events', icon: FolderIcon, current: false },
  { name: 'Announcements', href: '/announcements', icon: CalendarIcon, current: true },
  { name: 'Documents', href: '/documents', icon: InboxIcon, current: false }
]

const pages = [
  { name: 'Dashboard', href: '/admindash', current: false },
  { name: 'All Announcements', href: '/announcements', current: true }
]

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

export const CreateAnnouncements = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <nav className='bg-white border-b border-gray-200 flex' aria-label='Breadcrumb'>
        <ol className='max-w-screen-xl w-full mx-auto px-4 flex space-x-4 sm:px-6 lg:px-8'>
          <li className='flex'>
            <div className='flex items-center'>
              <a href='/' className='text-gray-400 hover:text-gray-500'>
                <HomeIcon className='flex-shrink-0 h-5 w-5' aria-hidden='true' />
                <span className='sr-only'>Home</span>
              </a>
            </div>
          </li>
          {pages.map((page) => (
            <li key={page.name} className='flex'>
              <div className='flex items-center'>
                <svg
                  className='flex-shrink-0 w-6 h-full text-gray-200'
                  viewBox='0 0 24 44'
                  preserveAspectRatio='none'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                >
                  <path d='M.293 0l22 22-22 22h1.414l22-22-22-22H.293z' />
                </svg>
                <a
                  href={page.href}
                  className='ml-4 text-sm font-medium text-gray-500 hover:text-gray-700'
                  aria-current={page.current ? 'page' : undefined}
                >
                  {page.name}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </nav>
      <div className='h-screen flex overflow-hidden bg-gray-100'>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as='div'
            static
            className='fixed inset-0 flex z-40 md:hidden'
            open={sidebarOpen}
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <div className='relative flex-1 flex flex-col max-w-xs w-full bg-white'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-in-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in-out duration-300'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='absolute top-0 right-0 -mr-12 pt-2'>
                    <button
                      className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className='sr-only'>Close sidebar</span>
                      <XIcon className='h-6 w-6 text-white' aria-hidden='true' />
                    </button>
                  </div>
                </Transition.Child>
                <div className='flex-1 h-0 pt-5 pb-4 overflow-y-auto'>
                  <div className='flex-shrink-0 flex items-center px-4'>
                    <img
                      className='h-8 w-auto'
                      src='https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
                      alt='Workflow'
                    />
                  </div>
                  <nav className='mt-5 px-2 space-y-1'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                          'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                            'mr-4 flex-shrink-0 h-6 w-6'
                          )}
                          aria-hidden='true'
                        />
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
                <div className='flex-shrink-0 flex border-t border-gray-200 p-4'>
                  <a href='#' className='flex-shrink-0 group block'>
                    <div className='flex items-center'>
                      <div>
                        <img
                          className='inline-block h-10 w-10 rounded-full'
                          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                          alt=''
                        />
                      </div>
                      <div className='ml-3'>
                        <p className='text-base font-medium text-gray-700 group-hover:text-gray-900'>Tom Cook</p>
                        <p className='text-sm font-medium text-gray-500 group-hover:text-gray-700'>View profile</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Transition.Child>
            <div className='flex-shrink-0 w-14'>{/* Force sidebar to shrink to fit close icon */}</div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className='hidden md:flex md:flex-shrink-0'>
          <div className='flex flex-col w-64'>
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className='flex flex-col h-0 flex-1 border-r border-gray-200 bg-white'>
              <div className='flex-1 flex flex-col pt-5 pb-4 overflow-y-auto'>
                <div className='flex items-center flex-shrink-0 px-4'>
                  <img
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
                    alt='Workflow'
                  />
                </div>
                <nav className='mt-5 flex-1 px-2 bg-white space-y-1'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                          'mr-3 flex-shrink-0 h-6 w-6'
                        )}
                        aria-hidden='true'
                      />
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
              <div className='flex-shrink-0 flex border-t border-gray-200 p-4'>
                <a href='#' className='flex-shrink-0 w-full group block'>
                  <div className='flex items-center'>
                    <div>
                      <img
                        className='inline-block h-9 w-9 rounded-full'
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''
                      />
                    </div>
                    <div className='ml-3'>
                      <p className='text-sm font-medium text-gray-700 group-hover:text-gray-900'>Tom Cook</p>
                      <p className='text-xs font-medium text-gray-500 group-hover:text-gray-700'>View profile</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-0 flex-1 overflow-hidden'>
          <div className='md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3'>
            <button
              className='-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
              onClick={() => setSidebarOpen(true)}
            >
              <span className='sr-only'>Open sidebar</span>
              <MenuIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <main className='flex-1 relative z-0 overflow-y-auto focus:outline-none'>
            <div className='py-6'>
              <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8' />
              <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
                {/* Replace with your content */}
                <>
                  <div>
                    <h2 className='flex items-left text-med font-medium'>Current Announcements</h2>
                    <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5' />
                    <ul className='divide-y divide-gray-200'>
                      {activityItems.map((activityItem) => (
                        <li key={activityItem.id} className='py-4'>
                          <div className='flex space-x-3'>
                            <div className='flex-1 space-y-1'>
                              <div className='flex items-center justify-between'>
                                <p className='text-sm text-gray-500'>{activityItem.date}</p>
                                <h3 className='text-sm font-medium'>{activityItem.title}</h3>
                                <p className='text-sm text-gray-500'>posted by: {activityItem.person}</p>
                              </div>
                              <p className='text-sm text-gray-500'>
                                {activityItem.announcement_text}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <form className='space-y-8 divide-y divide-gray-200'>
                    <div className='space-y-8 divide-y divide-gray-200 sm:space-y-5'>
                      <div className='mt-6 sm:mt-5 space-y-6 sm:space-y-5'><div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5' />

                        <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
                          <label htmlFor='about' className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'>
                            Add A New Event
                          </label>
                          <div className='mt-1 sm:mt-0 sm:col-span-2'>
                            <textarea
                              id='about'
                              name='about'
                              rows={3}
                              className='max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md'
                              defaultValue=''
                            />
                            <p className='mt-2 text-sm text-gray-500'>Write your announcement here.</p>
                          </div>
                        </div>

                        <div className='pt-5'>
                          <div className='flex justify-end'>
                            <button
                              type='button'
                              className='bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                            >
                              Cancel
                            </button>
                            <button
                              type='submit'
                              className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>

                    </div>
                  </form>
                </>
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
