import { Fragment, useEffect, useState, useRef } from 'react'
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
  XIcon
} from '@heroicons/react/outline'
import { getVolunteerList } from '../../api'

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
  { name: 'All Volunteers', href: '/volunteers', current: true }
]

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

export const VolunteerList = (props) => {
  const hasFetchedVolunteers = useRef(false)
  const { token, authUser } = props
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [allVolunteers, setAllVolunteers] = useState([])

  useEffect(() => {
    if (!hasFetchedVolunteers.current) {
      getVolunteerList(token).then((data) => setAllVolunteers(data))
      hasFetchedVolunteers.current = true
    }
  }, [allVolunteers])

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
              <div className='sm:mx-auto sm:w-9/12 sm:max-h-4'>
                <img src={Logo} alt='lucidity' />
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

        <main className='flex-1 relative overflow-y-auto overflow-x-hidden focus:outline-none'>
          <div className='py-8'>
            <div className='pb-8 md:px-0'>
              <h1 className='text-3xl font-semibold text-gray-900'>
                Volunteer Roster
              </h1>
            </div>
            <div className='px-4 sm:px-6 md:px-0'>
              <div className='flex flex-col'>
                <div className='-my-2 sm:-mx-6 lg:-mx-8'>
                  <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
                    <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                      <table className='min-w-full divide-y divide-gray-700 rounded-xl'>
                        <thead className='bg-purple-200'>
                          <tr>
                            <th
                              scope='col'
                              className='px-6 py-3 text-left text-xs font-medium text-indigo-900 uppercase tracking-wider'
                            >
                              Legal Name/Preferred Name
                            </th>
                            <th
                              scope='col'
                              className='px-6 py-3 text-left text-xs font-medium text-indigo-900 uppercase tracking-wider'
                            >
                              Pronouns
                            </th>
                            <th
                              scope='col'
                              className='px-6 py-3 text-left text-xs font-medium text-indigo-900 uppercase tracking-wider'
                            >
                              Intake Status
                            </th>
                            <th
                              scope='col'
                              className='px-6 py-3 text-left text-xs font-medium text-indigo-900 uppercase tracking-wider'
                            >
                              Telephone
                            </th>
                            <th scope='col' className='relative px-6 py-3'>
                              <span className='sr-only'>Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className='bg-white divide-y divide-gray-300'>
                          {allVolunteers.map((person) => (
                            <tr key={person.id}>
                              <td className='px-6 py-4 whitespace-nowrap'>
                                <div className='flex items-center'>
                                  <div className='flex-shrink-0 h-10 w-10'>
                                    <Avatar
                                      name={person.legal_name}
                                      size='40'
                                      round
                                    />
                                  </div>
                                  <div className='ml-4'>
                                    <p className='text-sm inline font-medium text-gray-900 whitespace-nowrap'>
                                      {person.legal_name}{' '}
                                    </p>
                                    <p className='text-xs inline italic text-gray-600'>
                                      &#40;{person.display_name}&#41;
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className='px-6 py-4 whitespace-nowrap'>
                                <div className='text-sm text-gray-900'>
                                  {person.pronouns}
                                </div>
                              </td>
                              <td className='px-6 py-4 whitespace-nowrap'>
                                {person.intake_status === 'Approved' ? (
                                  <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-gray-700'>
                                    {person.intake_status}
                                  </span>
                                ) : (
                                  <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-gray-700'>
                                    {person.intake_status}
                                  </span>
                                )}
                              </td>
                              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-600'>
                                {person.telephone}
                              </td>
                              <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                                <a
                                  href={`/volunteers/${person.id}`}
                                  className='text-indigo-600 hover:text-indigo-900'
                                >
                                  Details
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
