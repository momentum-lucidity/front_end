import React, { Fragment, useState } from 'react';
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
} from '@heroicons/react/outline';
import { Dialog, Menu, Transition } from '@headlessui/react';
import Avatar from 'react-avatar';
import { useLocation, useHistory, Link, useParams } from 'react-router-dom';
import { editAnnouncement } from '../../api';

export const EditAnnouncement = (props) => {
  const { token, authUser, setErrors, errors } = props
  const location = useLocation()
  const { announcement } = location.state
  const [alertHeader, setAlertHeader] = useState(
    `${announcement.alert_header}`
  )
  const [text, setText] = useState(`${announcement.text}`)
  const user = authUser.id
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const history = useHistory()
  const { id } = useParams()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const editWorked = await editAnnouncement(
      token,
      id,
      user,
      alertHeader,
      text
    )
      .then((res) => res.data)
      .catch((error) => {
        setErrors(error.message)
      })
    if (editWorked) {
      history.push('/announcements')
      setErrors()
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
    { name: 'Events', href: '/events', icon: FolderIcon, current: false },
    {
      name: 'Announcements',
      href: '/announcements',
      icon: CalendarIcon,
      current: true
    },
    { name: 'Admin Resources', href: '/documents', icon: InboxIcon, current: false }
  ]

  const userNavigation = [
    { name: 'Your Profile', href: '/adminprofile' },
    { name: 'Sign out', href: '/admin/logout' }
  ]
  const pages = [
    { name: 'Dashboard', href: '/admindash', current: false },
    { name: 'All Announcements', href: '/announcements', current: false },
    {
      name: 'Edit Announcement',
      href: `/announcements/${announcement.alertpk}`,
      current: true
    }
  ]

  function classNames (...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className='h-screen bg-gray-50 overflow-y-auto bg-white overflow-hidden flex'>
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
        <main className='flex-1 relative focus:outline-none'>
          <div className='py-3'>
            <form className='space-y-1' onSubmit={handleSubmit}>
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
              <div className='space-y-8 divide-y divide-gray-200'>
                <div className='space-y-8'>
                  <div>
                    <h3 className='text-3xl py-8 leading-6 font-semibold text-gray-900 sm:border-b sm:border-gray-200 sm:pb-8'>
                      Edit Announcement
                    </h3>
                  </div>

                  <div className='sm:col-span-6'>
                    <label
                      htmlFor='announcement-heading'
                      className='block text-md font-semibold text-gray-700'
                    >
                      Announcement Heading
                    </label>
                    <div className='mt-1'>
                      <input
                        id='announcement-heading'
                        name='announcement-heading'
                        value={alertHeader}
                        onChange={(event) => setAlertHeader(event.target.value)}
                        className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md'
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-6'>
                    <label
                      htmlFor='about'
                      className='block text-md font-semibold text-gray-700'
                    >
                      Announcement Body
                    </label>
                    <div className='mt-1'>
                      <textarea
                        id='about'
                        name='about'
                        rows={3}
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                        className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md'
                      />
                    </div>
                    <p className='mt-2 text-sm text-gray-500'>
                      Write your the body of your announcement here.
                    </p>
                  </div>
                </div>
              </div>

              <div className='pt-5'>
                <div className='flex justify-end'>
                  <Link to='/announcements'>
                    <button
                      type='button'
                      className='bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      onClick={() => setErrors()}
                    >
                      Cancel
                    </button>
                  </Link>
                  <button
                    type='submit'
                    className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
};
