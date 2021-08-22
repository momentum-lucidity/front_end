import { Fragment, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { editUser } from '../../api'
import { Dialog, Menu, Transition } from '@headlessui/react'
import Avatar from 'react-avatar'
import Logo from '../images/1x/logo.png'

import {
  ChevronRightIcon,
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
  XCircleIcon
} from '@heroicons/react/outline'
import { StatusDropdown } from './StatusDropdown'

export const EditVolunteer = (props) => {
  const { token, authUser, setErrors, errors } = props
  const location = useLocation()
  const { userDetails } = location.state
  const id = userDetails.id
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [email, setEmail] = useState(`${userDetails.email}`)
  const [username, setUsername] = useState(`${userDetails.username}`)
  const [password, setPassword] = useState(`${userDetails.password}`)
  const [displayName, setDisplayName] = useState(`${userDetails.display_name}`)
  const [legalName, setLegalName] = useState(`${userDetails.legal_name}`)
  const [pronouns, setPronouns] = useState(`${userDetails.pronouns}`)
  const [availability, setAvailability] = useState(
    `${userDetails.availability}`
  )
  const [telephone, setTelephone] = useState(`${userDetails.telephone}`)
  const [address2, setAddress2] = useState(`${userDetails.address2}`)
  const [city, setCity] = useState(`${userDetails.city}`)
  const [state, setStateName] = useState(`${userDetails.state}`)
  const [zip, setZip] = useState(`${userDetails.zipcode}`)
  const [userStatus, setUserStatus] = useState(`${userDetails.user_status}`)
  const [intakeStatus, setIntakeStatus] = useState(
    `${userDetails.intake_status}`
  )
  const [preferredEvent, setPreferredEvent] = useState(
    `${userDetails.preferred_event}`
  )
  const history = useHistory()

  const option = [
    { status: 'Application Created' },
    { status: 'Approval Pending' },
    { status: 'Approved' }
  ]

  const handleSubmit = async (event) => {
    event.preventDefault()
    const success = await editUser(
      token,
      id,
      username,
      password,
      displayName,
      legalName,
      pronouns,
      availability,
      email,
      telephone,
      address2,
      city,
      state,
      zip,
      userStatus,
      intakeStatus,
      preferredEvent
    )
      .then((res) => res.data)
      .catch((error) => {
        setErrors(error.message)
      })
    if (success) history.push(`/volunteers/${id}`)
  }

  const navigation = [
    { name: 'Dashboard', href: '/admindash', icon: HomeIcon, current: false },
    { name: 'Volunteers', href: '/volunteers', icon: UsersIcon, current: true },
    { name: 'Events', href: '/events', icon: FolderIcon, current: false },
    {
      name: 'Announcements',
      href: '/announcements',
      icon: CalendarIcon,
      current: false
    },
    { name: 'Documents', href: '/documents', icon: InboxIcon, current: false }
  ]

  const userNavigation = [
    { name: 'Your Profile', href: '/adminprofile' },
    { name: 'Sign out', href: '/admin/logout' }
  ]

  const pages = [
    { name: 'Dashboard', href: '/admindash', current: false },
    { name: 'All Volunteers', href: '/volunteers', current: true },
    { name: 'Profile', href: `/volunteers/${userDetails.id}`, current: true }
  ]

  function classNames (...classes) {
    return classes.filter(Boolean).join(' ')
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

        <main className='flex-1 relative overflow-y-auto focus:outline-none'>
          <div className='py-6'>
            <div className='px-4 sm:px-6 md:px-0'>
              <h1 className='text-2xl font-semibold text-gray-900'>
                {userDetails.legal_name}
              </h1>
            </div>
            <div className='px-4 sm:px-6 md:px-0'>
              <>
                <div className='mt-10 sm:mt-0'>
                  <div className='md:grid md:grid-cols-3 md:gap-6'>
                    <div className='md:col-span-1'>
                      <div className='px-4 sm:px-0'>
                        <h3 className='text-xl font-medium leading-6 text-gray-900'>
                          Update Volunteer Information
                        </h3>
                        <p className='mt-1 text-md text-gray-600'>
                          Edit {userDetails.display_name}'s Profile
                        </p>
                      </div>
                    </div>
                    <div className='mt-5 md:mt-0 md:col-span-2'>
                      <form action='#' method='POST' onSubmit={handleSubmit}>
                        <div className='border border-gray-200 rounded-xl'>
                          <div className='px-4 py-5 bg-white sm:p-6 rounded-xl'>
                            <div className='grid grid-cols-6 gap-6'>
                              <div className='col-span-6 sm:col-span-4'>
                                <label
                                  htmlFor='user-status'
                                  className='block text-sm font-medium text-gray-700'
                                >
                                  User Status
                                </label>
                                <input
                                  type='text'
                                  name='user-status'
                                  id='user-status'
                                  value={userStatus}
                                  onChange={(event) =>
                                    setUserStatus(event.target.value)}
                                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                                />
                              </div>

                              <div className='col-span-6 sm:col-span-4'>
                                <label
                                  htmlFor='intake-status'
                                  className='block text-sm font-medium text-gray-700'
                                >
                                  Current Intake Status:{' '}
                                  {userDetails.intake_status}
                                </label>

                                <StatusDropdown
                                  intakeStatus={intakeStatus}
                                  setIntakeStatus={setIntakeStatus}
                                  option={option}
                                />
                              </div>

                              <div className='col-span-6 sm:col-span-4'>
                                <label
                                  htmlFor='legal-name'
                                  className='block text-sm font-medium text-gray-700'
                                >
                                  Email
                                </label>
                                <input
                                  type='email'
                                  name='email'
                                  id='email'
                                  value={email}
                                  onChange={(event) =>
                                    setEmail(event.target.value)}
                                  autoComplete='email'
                                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                                />
                              </div>

                              <div className='col-span-6 sm:col-span-4'>
                                <label
                                  htmlFor='preferred-name'
                                  className='block text-sm font-medium text-gray-700'
                                >
                                  User Name
                                </label>
                                <input
                                  type='username'
                                  name='username'
                                  id='username'
                                  value={username}
                                  onChange={(event) =>
                                    setUsername(event.target.value)}
                                  autoComplete='username'
                                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                                />
                              </div>

                              <div className='col-span-6 sm:col-span-4'>
                                <label
                                  htmlFor='email-address'
                                  className='block text-sm font-medium text-gray-700'
                                >
                                  Password
                                </label>
                                <input
                                  type='password'
                                  name='password'
                                  id='password'
                                  value={password}
                                  onChange={(event) =>
                                    setPassword(event.target.value)}
                                  autoComplete='password'
                                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                                />
                              </div>
                              <div className='col-span-6 sm:col-span-4'>
                                <label
                                  htmlFor='legal-name'
                                  className='block text-sm font-medium text-gray-700'
                                >
                                  Legal name
                                </label>
                                <input
                                  type='text'
                                  name='legal-name'
                                  id='legal-name'
                                  value={legalName}
                                  onChange={(event) =>
                                    setLegalName(event.target.value)}
                                  autoComplete='given-name'
                                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                                />
                              </div>

                              <div className='col-span-6 sm:col-span-4'>
                                <label
                                  htmlFor='preferred-name'
                                  className='block text-sm font-medium text-gray-700'
                                >
                                  Preferred name
                                </label>
                                <input
                                  type='text'
                                  name='preferred-name'
                                  id='preferred-name'
                                  value={displayName}
                                  onChange={(event) =>
                                    setDisplayName(event.target.value)}
                                  autoComplete='family-name'
                                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                                />
                              </div>

                              <div className='col-span-6 sm:col-span-4'>
                                <label
                                  htmlFor='pronouns'
                                  className='block text-sm font-medium text-gray-700'
                                >
                                  Pronouns
                                </label>
                                <input
                                  type='text'
                                  name='pronouns'
                                  id='pronouns'
                                  value={pronouns}
                                  onChange={(event) =>
                                    setPronouns(event.target.value)}
                                  autoComplete='pronouns'
                                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                                />
                              </div>

                              <div className='col-span-6 sm:col-span-4'>
                                <label
                                  htmlFor='street-address'
                                  className='block text-sm font-medium text-gray-700'
                                >
                                  Street address
                                </label>
                                <input
                                  type='text'
                                  name='street-address'
                                  id='street-address'
                                  value={address2}
                                  onChange={(event) =>
                                    setAddress2(event.target.value)}
                                  autoComplete='street-address'
                                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                                />
                              </div>

                              <div className='col-span-6 sm:col-span-4'>
                                <label
                                  htmlFor='city'
                                  className='block text-sm font-medium text-gray-700'
                                >
                                  City
                                </label>
                                <input
                                  type='text'
                                  name='city'
                                  id='city'
                                  value={city}
                                  onChange={(event) =>
                                    setCity(event.target.value)}
                                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                                />
                              </div>

                              <div className='col-span-6 sm:col-span-4'>
                                <label
                                  htmlFor='state'
                                  className='block text-sm font-medium text-gray-700'
                                >
                                  State / Province
                                </label>
                                <input
                                  type='text'
                                  name='state'
                                  id='state'
                                  value={state}
                                  onChange={(event) =>
                                    setStateName(event.target.value)}
                                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                                />
                              </div>

                              <div className='col-span-6 sm:col-span-4'>
                                <label
                                  htmlFor='postal-code'
                                  className='block text-sm font-medium text-gray-700'
                                >
                                  ZIP / Postal
                                </label>
                                <input
                                  type='text'
                                  name='postal-code'
                                  id='postal-code'
                                  value={zip}
                                  onChange={(event) =>
                                    setZip(event.target.value)}
                                  autoComplete='postal-code'
                                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                                />
                              </div>

                              <div className='col-span-6 sm:col-span-4'>
                                <label
                                  htmlFor='phone-number'
                                  className='block text-sm font-medium text-gray-700'
                                >
                                  Phone Number
                                </label>
                                <div className='mt-1 relative rounded-md shadow-sm'>
                                  <input
                                    type='text'
                                    name='phone-number'
                                    id='phone-number'
                                    value={telephone}
                                    onChange={(event) =>
                                      setTelephone(event.target.value)}
                                    className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md'
                                    placeholder='+1 (555) 987-6543'
                                  />
                                </div>
                              </div>

                              <div className='col-span-6 sm:col-span-4'>
                                <label
                                  htmlFor='preferred-events'
                                  className='block text-sm font-medium text-gray-700'
                                >
                                  Preferred Events
                                </label>
                                <div className='mt-1 relative rounded-md shadow-sm'>
                                  <textarea
                                    type='textarea'
                                    name='preferred-events'
                                    id='preferred-events'
                                    value={preferredEvent}
                                    onChange={(event) =>
                                      setPreferredEvent(event.target.value)}
                                    className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md'
                                    placeholder='I prefer to work at these types of events...'
                                  />
                                </div>
                              </div>

                              <div className='col-span-6 sm:col-span-4'>
                                <label
                                  htmlFor='availibility'
                                  className='block text-sm font-medium text-gray-700'
                                >
                                  Availibility
                                </label>
                                <div className='mt-1 relative rounded-md shadow-sm'>
                                  <textarea
                                    type='textarea'
                                    name='availibility'
                                    id='availibility'
                                    value={availability}
                                    onChange={(event) =>
                                      setAvailability(event.target.value)}
                                    className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md'
                                    aria-describedby='availibilty-description'
                                    placeholder='List your preferred times for volunteer opportunites.'
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          {errors && (
                            <div className='rounded-md bg-red-50 p-4 mb-5'>
                              <div className='flex'>
                                <div className='flex-shrink-0'>
                                  <XCircleIcon
                                    className='h-5 w-5 text-red-400'
                                    aria-hidden='true'
                                  />
                                </div>
                                <div className='ml-3'>
                                  <h3 className='text-sm font-medium text-red-800'>
                                    Submit Failed: All fields must be filled
                                    out.
                                  </h3>
                                </div>
                              </div>
                            </div>
                          )}
                          <div className='px-4 py-3 bg-white text-right sm:px-6 rounded-xl'>
                            <button
                              type='submit'
                              className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
