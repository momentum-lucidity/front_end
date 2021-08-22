import { Fragment, useState, useEffect, useRef } from 'react'
import { deleteEvent, getEventDetails, getEventsList } from '../../api'
import { Dialog, Menu, Transition } from '@headlessui/react'
import Avatar from 'react-avatar'
import { ChevronRightIcon, CalendarIcon, FolderIcon, HomeIcon, InboxIcon, MenuAlt2Icon, UsersIcon, XIcon, TrashIcon } from '@heroicons/react/outline'
import { useParams, Link, useHistory } from 'react-router-dom'
import { VolunteerSlotRoster } from './VolunteerSlotRoster'
import { VolunteerSlotPost } from './VolunteerSlotPost'

export const EventDetail = (props) => {
  const { token, authUser, setAllEvents, errors, setErrors } = props
  const { id } = useParams()
  const fetchedEventDetails = useRef(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [eventDetails, setEventDetails] = useState('')
  const [allVSlots, setAllVSlots] = useState([])
  const [expandNew, setExpandNew] = useState(false)
  const history = useHistory()

  useEffect(() => {
    if (!fetchedEventDetails.current) {
      getEventDetails(token, id).then((data) => {
        setEventDetails(data)
        fetchedEventDetails.current = true
      })
    }
  }, [eventDetails, token, id])

  const handleClick = () => {
    setExpandNew(!expandNew)
  }

  const handleDelete = async () => {
    const success = await deleteEvent(token, id)
    if (success) {
      getEventsList()
        .then((data) => setAllEvents(data))
      history.push('/events/')
    }
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
    { name: 'Sign out', href: '/admin/logout' }
  ]

  const pages = [
    { name: 'Dashboard', href: '/admindash', current: false },
    { name: 'All Events', href: '/events', current: false },
    { name: 'Event Details', href: `/events/${id}`, current: true }
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

      <div className='hidden md:flex md:flex-shrink-0'>
        <div className='w-64 flex flex-col'>
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
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>{/* Content goes here */}</div>
        <main className='flex-1 relative overflow-y-auto focus:outline-none'>
          <div className='py-6'>
          {errors && (
                <div className="text-red-600">
                  Submit Failed: All fields must be filled out. <br /> Please
                  try again.
                </div>
              )}
            <div className='pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between'>
              <h3 className='text-lg leading-6 font-medium text-gray-900'>{eventDetails.event_header}</h3>
              <div className='mt-3 flex sm:mt-0 sm:ml-4'>
                <Link
                  to={{
                    pathname: `/events/edit/${eventDetails.eventpk}/`,
                    state: { eventDetails: eventDetails }
                  }}
                >
                  <button
                    type='button'
                    className='ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  >
                    Edit
                  </button>
                </Link>
                <button
                  type='button'
                  className='ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </div>
            <div className='px-4 sm:px-6 md:px-0'>
              <div key={eventDetails.id} className='bg-white shadow overflow-hidden sm:rounded-lg'>

                <div className='border-t border-gray-200 px-4 py-5 sm:px-6'>
                  <div className='px-4 py-4'>
                    <dt className='text-sm font-medium text-gray-500'>
                      Event Details
                    </dt>
                    <dd className='text-sm font-medium text-gray-900'>
                      {eventDetails.description}
                    </dd>
                  </div>
                  <div className='px-4 py-4'>
                    <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
                      <div className='sm:col-span-1'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Date
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900'>
                          {eventDetails.date}
                        </dd>
                      </div>
                      <div className='sm:col-span-1'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Time
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900'>
                          Start {eventDetails.start_time}
                        </dd>
                        <dd className='mt-1 text-sm text-gray-900'>
                          End {eventDetails.end_time}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div className='pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between'>
                    <h3 className='text-lg leading-6 font-medium text-gray-900'>Volunteer Roster</h3>
                    <div className='mt-3 sm:mt-0 sm:ml-4'>
                      <button
                        type='button'
                        className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        onClick={handleClick}
                      >
                        New Slot
                      </button>
                    </div>
                  </div>
                  <div className='px-4 py-4'>
                    {expandNew &&
                      <VolunteerSlotPost token={token} eventID={id} setExpandNew={setExpandNew} allVSlots={allVSlots} setAllVSlots={setAllVSlots} errors={errors} setErrors={setErrors} />}
                  </div>

                  <VolunteerSlotRoster token={token} eventDetails={eventDetails} allVSlots={allVSlots} setAllVSlots={setAllVSlots} errors={errors} setErrors={setErrors} />

                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
