import { Fragment, useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { getUserDetails, deleteUser, getAllSlots } from '../../api'
import { ProfileHeader } from './ProfileHeader.js'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { VolunteerIntakeStatus } from './VolunteerIntakeStatus'
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
  DotsVerticalIcon,
  PaperClipIcon,
  TrashIcon,
  PencilIcon
} from '@heroicons/react/outline'

export const VolunteerDetails = (props) => {
  const { token, authUser } = props
  const { id } = useParams()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userDetails, setUserDetails] = useState([])
  const history = useHistory()

  useEffect(() => {
    getUserDetails(token, id).then((data) => setUserDetails(data))
  }, [id, token])

  const handleDelete = async () => {
    const success = await deleteUser(token, id)
    if (success) history.push('/volunteers')
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
    {
      name: 'Admin Resources',
      href: '/documents',
      icon: InboxIcon,
      current: false
    }
  ]

  const userNavigation = [
    { name: 'Your Profile', href: '/adminprofile' },
    { name: 'Sign out', href: '/admin/logout' }
  ]

  const pages = [
    { name: 'Dashboard', href: '/admindash', current: false },
    { name: 'All Volunteers', href: '/volunteers', current: true },
    { name: 'Profile', href: `/volunteers/${id}`, current: true }
  ]

  function classNames (...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className='h-screen bg-gray-100 overflow-hidden flex'>
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
                <img src={Logo} alt='lucidity' />
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
        <div className='w-54 bg-white flex flex-col'>
          <div className='border-r border-gray-200 pt-2 pb-4 flex flex-col flex-grow overflow-y-auto'>
            <div className='flex-shrink-1 px-4 flex items-center'>
              <img
                className='w-44 bg-white'
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
        <main className='flex-1 mt-8 relative overflow-y-auto focus:outline-none'>
          <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
            <div className='px-4 py-6 sm:px-12'>
              <ProfileHeader userDetails={userDetails} setUserDetails={setUserDetails} id={id} token={token} />
            </div>
            <div className='border-t border-gray-200 px-4 py-5 sm:px-12'>
              <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
                <div className='sm:col-span-1'>
                  <dt className='text-md font-medium text-gray-500'>Full name</dt>
                  <dd className='mt-1 text-sm text-gray-900'>Legal Name: {userDetails.legal_name}</dd>
                  <dd className='mt-1 text-sm text-gray-900'>Username: {userDetails.username}</dd>
                </div>
                <div className='sm:col-span-1'>
                  <dt className='text-md font-medium text-gray-500'>Personal Identifiers</dt>
                  <dd className='mt-1 text-sm text-gray-900'>Preferred Name: {userDetails.display_name}</dd>
                  <dd className='mt-1 text-sm text-gray-900'>Pronouns: {userDetails.pronouns}</dd>
                </div>
                <div className='sm:col-span-1'>
                  <dt className='text-md font-medium text-gray-500'>Contact Information</dt>
                  <dd className='mt-1 text-sm text-gray-900'>{userDetails.telephone}</dd>
                  <dd className='mt-1 text-sm text-gray-900'>{userDetails.email}</dd>
                </div>
                <div className='sm:col-span-1'>
                  <dt className='text-md font-medium text-gray-500'>Address</dt>
                  <dd className='mt-1 text-sm text-gray-900'>{userDetails.address2}</dd>
                  <dd className='mt-1 text-sm text-gray-900'>{userDetails.city}, {userDetails.state}  {userDetails.zipcode}</dd>
                </div>
                <div className='sm:col-span-2'>
                  <dt className='text-md font-medium text-gray-500'>Notes</dt>
                  <dd className='mt-1 text-sm text-gray-900'>Availability: {userDetails.availability}</dd>
                  <dd className='mt-1 text-sm text-gray-900'>Preferred Event Types: {userDetails.preferred_event}</dd>
                </div>
                <div className='sm:col-span-2'>
                  <dt className='text-md mb-2 font-medium text-gray-500'>Volunteer Intake Status</dt>
                  <VolunteerIntakeStatus token={token} userDetails={userDetails} />

                </div>
              </dl>
            </div>
          </div>
        </main>

      </div>
    </div>
  )
}

{
  /* <button
type='button'
className='inline-flex items-center px-2 py-1.5 border border-indigo-100 rounded-md shadow-sm text-sm font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
onClick={handleDelete}
>
<TrashIcon
  className='-ml-1 mr-2 h-5 w-5 text-indigo-700'
  aria-hidden='true'
/>
Delete
</button> */
}
