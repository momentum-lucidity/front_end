import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { Link, useHistory } from 'react-router-dom'
import { ChevronRightIcon, CalendarIcon, FolderIcon, HomeIcon, InboxIcon, MenuAlt2Icon, UsersIcon, XIcon, XCircleIcon } from '@heroicons/react/outline'
import axios from 'axios'
import Avatar from 'react-avatar'
import Logo from '../images/1x/logo.png'

export const EventForm = (props) => {
  const { token, authUser, setErrors, errors } = props
  const [eventHeader, setEventHeader] = useState('')
  const [date, setDate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [type, setType] = useState('')
  const [description, setDescription] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const history = useHistory()

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
    { name: 'Admin Resources', href: '/documents', icon: InboxIcon, current: false }
  ]

  const userNavigation = [
    { name: 'Your Profile', href: '/adminprofile' },
    { name: 'Sign out', href: '/admin/logout' }
  ]

  const pages = [
    { name: 'Dashboard', href: '/admindash', current: false },
    { name: 'All Events', href: '/events', current: false },
    { name: 'Event Form', href: '/events/eventform', current: true }
  ]

  function classNames (...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const user = authUser.id
    alert('Your event has been submitted!')
    const success = await axios
      .post(
        'https://momentum-lucidity.herokuapp.com/events/',
        {
          user: [user],
          event_header: eventHeader,
          date: date,
          start_time: startTime,
          end_time: endTime,
          type: type,
          description: description
        },
        {
          headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json'
          }
        }
      )
      .then((response) => response.data)
      .catch((error) => {
        setErrors(error.message)
      })
    if (success) {
      setEventHeader('')
      setDate('')
      setStartTime('')
      setEndTime('')
      setType('')
      setDescription('')
      history.push('/events')
    }
  }

  return (
    <div className='h-screen bg-gray-50 overflow-hidden flex'>
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
            <Dialog.Overlay className='fixed inset-0 bg-gray-700 bg-opacity-75' />
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
              <div className='sm:mx-auto sm:w-9/12 sm:max-h-4'>
                <img
                  src={Logo}
                  alt='lucidity'
                />
              </div>
              <div className='mt-5 flex-1 h-0 bg-white overflow-y-auto'>
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
          <div className=' bg-white flex-shrink-0 w-14'>
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      <div className='hidden md:flex md:flex-shrink-0'>
        <div className='w-64 bg-white flex flex-col'>
          <div className='border-r border-gray-200 pt-5 pb-4 flex flex-col flex-grow overflow-y-auto'>
            <div className='flex-shrink-1 px-4 flex items-center'>
              <img
                className='w-full, bg-white'
                src={Logo}
                alt='Lucidity Logo'
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
        <div className='relative z-10 flex-shrink-0 h-24 bg-gray-50 border-b border-gray-200 flex'>
          <button
            className='border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden'
            onClick={() => setSidebarOpen(true)}
          >
            <span className='sr-only'>Open sidebar</span>
            <MenuAlt2Icon className='h-6 w-6' aria-hidden='true' />
          </button>
          <div className='flex-1 flex bg-gray-50'>
            <nav className='flex' aria-label='Breadcrumb'>
              <ol className='flex items-center space-x-4'>
                <li>
                  <div>
                    <a href='/' className='text-gray-700 hover:text-indigo-500'>
                      <HomeIcon
                        className='flex-shrink-0 h-7 w-7'
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
                        className='flex-shrink-0 h-8 w-8 text-gray-700'
                        aria-hidden='true'
                      />
                      <a
                        href={page.href}
                        className='ml-4 text-md font-medium text-gray-700 hover:text-indigo-500'
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
          <div className='ml-4 flex items-center bg-gray-50 md:ml-6'>
            <Menu as='div' className='ml-3 relative'>
              {({ open }) => (
                <>
                  <div>
                    <Menu.Button className='max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                      <span className='sr-only'>Open user menu</span>
                      <Avatar name={authUser.legal_name} size='60' round />
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
        <>
          <main className='flex-1 relative overflow-y-auto focus:outline-none'>
            <form className='flex-1 relative overflow-y-auto focus:outline-none'>
              {errors && (
                <div className='rounded-md bg-red-50 p-4 mt-5'>
                  <div className='flex'>
                    <div className='flex-shrink-0'>
                      <XCircleIcon
                        className='h-5 w-5 text-red-400'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='ml-3'>
                      <h3 className='text-sm font-medium text-red-800'>
                        Submit Failed: All fields must be filled out.
                      </h3>
                    </div>
                  </div>
                </div>
              )}
              <div className='px-0 py-6 sm:px-6 md:px-0'>
                <div>
                  <h3 className='text-3xl leading-6 font-semibold text-gray-900'>
                    Create An Upcoming Event
                  </h3>
                </div>
                <div className='space-y-6 sm:space-y-5'>
                  <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5'>
                    <label
                      htmlFor='event-name'
                      className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
                    >
                      Event Name
                    </label>
                    <div className='mt-1 sm:mt-0 sm:col-span-2'>
                      <input
                        type='text'
                        name='event-name'
                        id='event-name'
                        autoComplete='given-name'
                        value={eventHeader}
                        onChange={(event) => setEventHeader(event.target.value)}
                        className='max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                  </div>

                  <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
                    <label
                      htmlFor='event-date'
                      className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
                    >
                      Event Date
                    </label>
                    <div className='mt-1 sm:mt-0 sm:col-span-2'>
                      <input
                        type='date'
                        name='event-date'
                        id='event-date'
                        autoComplete='given-name'
                        value={date}
                        onChange={(event) => setDate(event.target.value)}
                        className='max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                  </div>

                  <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
                    <label
                      htmlFor='event-start-time'
                      className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
                    >
                      Event Start Time
                    </label>
                    <div className='mt-1 sm:mt-0 sm:col-span-2'>
                      <select
                        id='event-start-time'
                        name='event-start-time'
                        autoComplete='event-start-time'
                        value={startTime}
                        onChange={(event) => setStartTime(event.target.value)}
                        className='max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md'
                      >
                        <option>-</option>
                        <option>12:00 AM</option>
                        <option>1:00 AM</option>
                        <option>2:00 AM</option>
                        <option>3:00 AM</option>
                        <option>4:00 AM</option>
                        <option>5:00 AM</option>
                        <option>6:00 AM</option>
                        <option>7:00 AM</option>
                        <option>8:00 AM</option>
                        <option>9:00 AM</option>
                        <option>10:00 AM</option>
                        <option>11:00 AM</option>
                        <option>12:00 PM</option>
                        <option>1:00 PM</option>
                        <option>2:00 PM</option>
                        <option>3:00 PM</option>
                        <option>4:00 PM</option>
                        <option>5:00 PM</option>
                        <option>6:00 PM</option>
                        <option>7:00 PM</option>
                        <option>8:00 PM</option>
                        <option>9:00 PM</option>
                        <option>10:00 PM</option>
                        <option>11:00 PM</option>
                        <option>12:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
                    <label
                      htmlFor='event-end-time'
                      className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
                    >
                      Event End Time
                    </label>
                    <div className='mt-1 sm:mt-0 sm:col-span-2'>
                      <select
                        id='event-end-time'
                        name='event-end-time'
                        autoComplete='event-end-time'
                        value={endTime}
                        onChange={(event) => setEndTime(event.target.value)}
                        className='max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md'
                      >
                        <option>-</option>
                        <option>12:00 AM</option>
                        <option>1:00 AM</option>
                        <option>2:00 AM</option>
                        <option>3:00 AM</option>
                        <option>4:00 AM</option>
                        <option>5:00 AM</option>
                        <option>6:00 AM</option>
                        <option>7:00 AM</option>
                        <option>8:00 AM</option>
                        <option>9:00 AM</option>
                        <option>10:00 AM</option>
                        <option>11:00 AM</option>
                        <option>12:00 PM</option>
                        <option>1:00 PM</option>
                        <option>2:00 PM</option>
                        <option>3:00 PM</option>
                        <option>4:00 PM</option>
                        <option>5:00 PM</option>
                        <option>6:00 PM</option>
                        <option>7:00 PM</option>
                        <option>8:00 PM</option>
                        <option>9:00 PM</option>
                        <option>10:00 PM</option>
                        <option>11:00 PM</option>
                        <option>12:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
                    <label
                      htmlFor='event-type'
                      className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
                    >
                      Event Type
                    </label>
                    <div className='mt-1 sm:mt-0 sm:col-span-2'>
                      <input
                        type='text'
                        name='event-type'
                        id='event-type'
                        autoComplete='given-name'
                        value={type}
                        onChange={(event) => setType(event.target.value)}
                        className='max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                  </div>

                  <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
                    <label
                      htmlFor='event-details'
                      className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
                    >
                      Event Details
                    </label>
                    <div className='mt-1 sm:mt-0 sm:col-span-2'>
                      <textarea
                        type='text'
                        name='event-details'
                        id='event-details'
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        className='max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                  </div>
                  <div className='pt-5'>
                    <div className='flex justify-end'>
                      <Link to='/events'>
                        <button
                          type='button'
                          className='bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                          onClick={() => setErrors()}
                        >
                          Cancel
                        </button>
                      </Link>
                      <button
                        onClick={handleSubmit}
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
          </main>
        </>
      </div>
    </div>
  )
}
