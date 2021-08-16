import { Fragment, useState, useEffect } from 'react'
import { getEventDetails, deleteEvent } from '../../api'
import { Dialog, Menu, Transition } from '@headlessui/react'
import Avatar from 'react-avatar'
import {
  ChevronRightIcon,
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
  TrashIcon
} from '@heroicons/react/outline'
import { useParams, useHistory } from 'react-router-dom'

export const EventDetail = (props) => {
  const { token, authUser } = props
  const { id } = useParams()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [event, setEvent] = useState('')
  const history = useHistory()

  console.log(id)
  useEffect(() => {
    getEventDetails(token, id).then((data) => {
      console.log(data)
      setEvent(data)
    })
  }, [])

  const handleDelete = () => {
    deleteEvent(token, id)
    history.push('/events')
  }

  const navigation = [
    { name: 'Dashboard', href: '/admindash', icon: HomeIcon, current: false },
    {
      name: 'Volunteers',
      href: '/volunteers',
      icon: UsersIcon,
      current: false
    },
    { name: 'Events', href: '/events', icon: FolderIcon, current: true },
    {
      name: 'Announcements',
      href: '/announcements',
      icon: CalendarIcon,
      current: false
    },
    { name: 'Documents', href: '/documents', icon: InboxIcon, current: false }
  ]

  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' }
  ]

  const pages = [
    { name: 'Dashboard', href: '/admindash', current: false },
    { name: 'All Events', href: '/events', current: false },
    { name: 'Event Details', href: '/events/:id', current: true }
  ]

  function classNames (...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className='h-screen bg-white overflow-hidden flex'>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as='div'
          static
          className='fixed inset-0 z-40 flex md:hidden'
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
            <div className='relative max-w-xs w-full bg-white pt-5 pb-4 flex-1 flex flex-col'>
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
              <div className='flex-shrink-0 px-4 flex items-center'>
                <img
                  className='h-8 w-auto'
                  src='https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
                  alt='Workflow'
                />
              </div>
              <div className='mt-5 flex-1 h-0 overflow-y-auto'>
                <nav className='px-2 space-y-1'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group rounded-md py-2 px-2 flex items-center text-base font-medium'
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? 'text-gray-500'
                            : 'text-gray-400 group-hover:text-gray-500',
                          'mr-4 flex-shrink-0 h-6 w-6'
                        )}
                        aria-hidden='true'
                      />
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className='flex-shrink-0 w-14'>
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className='hidden md:flex md:flex-shrink-0'>
        <div className='w-64 flex flex-col'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='border-r border-gray-200 pt-5 pb-4 flex flex-col flex-grow overflow-y-auto'>
            <div className='flex-shrink-0 px-4 flex items-center'>
              <img
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
                alt='Workflow'
              />
            </div>
            <div className='flex-grow mt-5 flex flex-col'>
              <nav className='flex-1 bg-white px-2 space-y-1'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group rounded-md py-2 px-2 flex items-center text-sm font-medium'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? 'text-gray-500'
                          : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden='true'
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className='flex-1 max-w-4xl mx-auto w-0 flex flex-col md:px-8 xl:px-0'>
        <div className='relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 flex'>
          <button
            className='border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden'
            onClick={() => setSidebarOpen(true)}
          >
            <span className='sr-only'>Open sidebar</span>
            <MenuAlt2Icon className='h-6 w-6' aria-hidden='true' />
          </button>
          <div className='flex-1 flex'>
            <nav className='flex' aria-label='Breadcrumb'>
              <ol className='flex items-center space-x-4'>
                <li>
                  <div>
                    <a href='/' className='text-gray-400 hover:text-gray-500'>
                      <HomeIcon
                        className='flex-shrink-0 h-5 w-5'
                        aria-hidden='true'
                      />
                      <span className='sr-only'>Home</span>
                    </a>
                  </div>
                </li>
                {pages.map((page) => (
                  <li key={page.name}>
                    <div className='flex items-center'>
                      <ChevronRightIcon
                        className='flex-shrink-0 h-5 w-5 text-gray-400'
                        aria-hidden='true'
                      />
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
          </div>
          <div className='ml-4 flex items-center md:ml-6'>
            {/* Profile dropdown */}
            <Menu as='div' className='ml-3 relative'>
              {({ open }) => (
                <>
                  <div>
                    <Menu.Button className='max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                      <span className='sr-only'>Open user menu</span>
                      <Avatar name={authUser.legal_name} size='40' round />
                    </Menu.Button>
                  </div>
                  <Transition
                    show={open}
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items
                      static
                      className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none'
                    >
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block py-2 px-4 text-sm text-gray-700'
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </div>
        </div>

        <main className='flex-1 relative overflow-y-auto focus:outline-none'>
          <div className='py-6'>
            <div className='px-4 sm:px-6 md:px-0'>
              <h1 className='text-2xl font-semibold text-gray-900'>
                Upcoming Events
              </h1>
            </div>
            <div className='px-4 sm:px-6 md:px-0'>
              {/* Replace with your content */}
                <div
                  key={event.id}
                  className='bg-white shadow overflow-hidden sm:rounded-lg'
                >
                  <div className='px-4 py-5 sm:px-6'>
                    <h3 className='text-lg leading-6 font-medium text-gray-900'>
                      {event.event_header}
                    </h3>
                    <p className='text-sm text-gray-500'>
                      {event.description} {event.type}
                    </p>
                  </div>
                  <div className='border-t border-gray-200 px-4 py-5 sm:px-6'>
                    <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
                      <div className='sm:col-span-1'>
                        <dt className='text-sm font-medium text-gray-500'>
                          When
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900'>
                          {event.date} {event.start_time}
                        </dd>
                      </div>
                      <div className='sm:col-span-1'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Where
                        </dt>
                      </div>
                      <div className='sm:col-span-2'>
                        <div>
                          <h3 className='text-lg leading-6 sm:border-t sm:border-gray-200 sm:pt-5 font-medium text-gray-900'>
                            Volunteers Needed
                          </h3>
                        </div>
                        <div className='sm:col-span-6'>
                          <label
                            htmlFor='vol-duties'
                            className='block text-sm font-medium text-gray-700'
                          >
                            Volunteer Duties
                          </label>
                          <div className='mt-1'>
                            <textarea
                              id='vol-duties'
                              name='vol-duties'
                              className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md'
                              defaultValue=''
                            />
                          </div>
                        </div>
                        <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
                          <div className='sm:col-span-3'>
                            <label
                              htmlFor='volunteer-start-time'
                              className='block text-sm font-medium text-gray-700'
                            >
                              Volunteer Start Time
                            </label>
                            <div className='mt-1 sm:mt-0 sm:col-span-2'>
                              <select
                                id='volunteer-start-time'
                                name='volunteer-start-time'
                                autoComplete='volunteer-start-time'
                                className='max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md'
                              >
                                <option>12:00</option>
                                <option>1:00</option>
                                <option>2:00</option>
                              </select>
                            </div>
                          </div>

                          <div className='sm:col-span-3'>
                            <label
                              htmlFor='volunteer-end-time'
                              className='block text-sm font-medium text-gray-700'
                            >
                              Volunteer End time
                            </label>
                            <div className='mt-1 sm:mt-0 sm:col-span-2'>
                              <select
                                id='volunteer-end-time'
                                name='volunteer-end-time'
                                autoComplete='volunteer-end-time'
                                className='max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md'
                              >
                                <option>12:00</option>
                                <option>1:00</option>
                                <option>2:00</option>
                              </select>
                            </div>
                          </div>
                          <button
                            type='button'
                            className='relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                          >
                            Add Volunteer
                          </button>
                        </div>
                      </div>
                      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                        <div className='relative rounded-lg border border-green-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'>
                          <div className='flex-1 min-w-0'>
                            <span
                              className='absolute inset-0'
                              aria-hidden='true'
                            />
                            <p className='text-sm font-medium text-gray-900'>
                              Volunteer Slot
                            </p>
                            <p className='text-sm font-medium text-gray-500'>
                              
                            </p>
                            <p className='text-sm text-gray-500 truncate'>
                              
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                        <div className='relative rounded-lg border border-red-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'>
                          <div className='flex-1 min-w-0'>
                            <span
                              className='absolute inset-0'
                              aria-hidden='true'
                            />
                            <p className='text-sm font-medium text-gray-900'>
                              Volunteer Slot
                            </p>
                            <p className='text-sm font-medium text-gray-500'>
                              
                            </p>
                            <p className='text-sm text-gray-500 truncate'>
                              
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className='w-0 flex-1 flex items-center'>
                          <TrashIcon
                            className='flex-shrink-0 h-5 w-5 text-gray-400'
                            aria-hidden='false'
                          />
                          <span className='ml-2 flex-1 w-0 truncate'>
                            Delete Event
                          </span>
                        </div>
                        <div className='ml-4 flex-shrink-0'>
                          <a
                            href='#'
                            className='font-medium text-indigo-600 hover:text-indigo-500'
                            onClick={handleDelete}
                          >
                            Delete Event
                          </a>
                        </div>
                      </div>
                    </dl>
                  </div>
                </div>
              ))}
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
