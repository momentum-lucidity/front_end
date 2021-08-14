import { Fragment, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { getUserDetails, deleteUser } from '../../api'
import { Dialog, Menu, Transition } from '@headlessui/react'

import {
  ChevronRightIcon,
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
  CheckIcon,
  TrashIcon,
  PencilIcon
} from '@heroicons/react/outline'

export const VolunteerDetails = (props) => {
  const { token } = props
  const { id } = useParams()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userDetails, setUserDetails] = useState('')
  const history = useHistory()

  useEffect(() => {
    getUserDetails(token, id).then((data) => {
      setUserDetails(data)
    })
  }, [])

  const handleDelete = () => {
    deleteUser(token, id)
    history.push('/volunteers')
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
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' }
  ]

  const pages = [
    { name: 'Dashboard', href: '/admindash', current: false },
    { name: 'All Volunteers', href: '/volunteers', current: true },
    { name: 'Margot Foster Profile', href: `/volunteers/${id}`, current: true }
  ]

  const steps = [
    { id: '01', name: 'Registration', status: `${userDetails.intake_status}` },
    { id: '02', name: 'Pending Approval', status: `${userDetails.intake_status}` },
    { id: '03', name: 'Approved!', status: `${userDetails.intake_status}` }
  ]

  function classNames (...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className='bg-white overflow-hidden flex'>
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
                      <img
                        className='h-8 w-8 rounded-full'
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''
                      />
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
              {/* Replace with your content */}
              <div>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Profile
                </h3>
              </div>
              <nav aria-label='Progress'>
                <ol className='border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0'>
                  {steps.map((step, stepIdx) => (
                    <li key={step.name} className='relative md:flex-1 md:flex'>
                      {step.status === 'approved'
                        ? (
                          <a
                            href={step.href}
                            className='group flex items-center w-full'
                          >
                            <span className='px-6 py-4 flex items-center text-sm font-medium'>
                              <span className='flex-shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800'>
                                <CheckIcon
                                  className='w-6 h-6 text-white'
                                  aria-hidden='true'
                                />
                              </span>
                              <span className='ml-4 text-sm font-medium text-gray-900'>
                                {step.name}
                              </span>
                            </span>
                          </a>
                          )
                        : step.status === 'pending'
                          ? (
                            <a
                              href={step.href}
                              className='px-6 py-4 flex items-center text-sm font-medium'
                              aria-current='step'
                            >
                              <span className='flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full'>
                                <span className='text-indigo-600'>{step.id}</span>
                              </span>
                              <span className='ml-4 text-sm font-medium text-indigo-600'>
                                {step.name}
                              </span>
                            </a>
                            )
                          : (
                            <a href={step.href} className='group flex items-center'>
                              <span className='px-6 py-4 flex items-center text-sm font-medium'>
                                <span className='flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400'>
                                  <span className='text-gray-500 group-hover:text-gray-900'>
                                    {step.id}
                                  </span>
                                </span>
                                <span className='ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900'>
                                  {step.name}
                                </span>
                              </span>
                            </a>
                            )}

                      {stepIdx !== steps.length - 1
                        ? (
                          <>
                            {/* Arrow separator for lg screens and up */}
                            <div
                              className='hidden md:block absolute top-0 right-0 h-full w-5'
                              aria-hidden='true'
                            >
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
              <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
                <div className='px-4 py-5 sm:px-6'>
                  <h3 className='text-lg leading-6 font-medium text-gray-900'>Volunteer Information</h3>
                  <p className='mt-1 max-w-2xl text-sm text-gray-500'>Personal details and application.</p>
                </div>
                <div className='border-t border-gray-200 px-4 py-5 sm:p-0'>
                  <dl className='sm:divide-y sm:divide-gray-200'>
                    <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='text-sm font-medium text-gray-500'>Preferred Name</dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>{userDetails.display_name}</dd>
                    </div>
                    <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='text-sm font-medium text-gray-500'>Pronouns</dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>{userDetails.pronouns}</dd>
                    </div>
                    <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='text-sm font-medium text-gray-500'>Full name</dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>{userDetails.legal_name}</dd>
                    </div>
                    <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='text-sm font-medium text-gray-500'>Telephone</dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>{userDetails.telephone}</dd>
                    </div>
                    <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='text-sm font-medium text-gray-500'>Email address</dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>{userDetails.email}</dd>
                    </div>
                    <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='text-sm font-medium text-gray-500'>Street Address</dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>{userDetails.address2}</dd>
                    </div>
                    <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='text-sm font-medium text-gray-500'>City, State, Zip</dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>{`${userDetails.city}, ${userDetails.state} ${userDetails.zipcode}`}</dd>
                    </div>
                    <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='text-sm font-medium text-gray-500'>Availability</dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        {userDetails.availability}
                      </dd>
                    </div>
                    <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                      <dt className='text-sm font-medium text-gray-500'>Update</dt>
                      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                        <ul className='border border-gray-200 rounded-md divide-y divide-gray-200'>
                          <li className='pl-3 pr-4 py-3 flex items-center justify-between text-sm'>
                            <div className='w-0 flex-1 flex items-center'>
                              <PencilIcon className='flex-shrink-0 h-5 w-5 text-gray-400' aria-hidden='true' />
                              <span className='ml-2 flex-1 w-0 truncate'>Edit Profile</span>
                            </div>
                            <div className='ml-4 flex-shrink-0'>
                              <a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
                                Edit
                              </a>
                            </div>
                          </li>
                          <li className='pl-3 pr-4 py-3 flex items-center justify-between text-sm'>
                            <div className='w-0 flex-1 flex items-center'>
                              <TrashIcon className='flex-shrink-0 h-5 w-5 text-gray-400' aria-hidden='true' />
                              <span className='ml-2 flex-1 w-0 truncate'>Delete Profile</span>
                            </div>
                            <div className='ml-4 flex-shrink-0'>
                              <a
                                href='#'
                                className='font-medium text-indigo-600 hover:text-indigo-500'
                                onClick={handleDelete}
                              >
                                Delete
                              </a>
                            </div>
                          </li>
                        </ul>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
