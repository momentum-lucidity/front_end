import { Fragment, useState } from 'react'
import Avatar from 'react-avatar'
import Logo from '../images/1x/logo.png'
import { ChevronRightIcon, CalendarIcon, SpeakerphoneIcon, FolderIcon, HomeIcon, InboxIcon, MenuAlt2Icon, UsersIcon, XIcon, DocumentDuplicateIcon } from '@heroicons/react/outline'
import { Dialog, Menu, Transition } from '@headlessui/react'

const navigation = [
  { name: 'Dashboard', href: '/admindash', icon: HomeIcon, current: true },
  { name: 'Volunteers', href: '/volunteers', icon: UsersIcon, current: false },
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
const actions = [
  {
    title: 'Volunteers',
    href: '/volunteers',
    description:
      'View all registered volunteers, manage volunteer information and status',
    icon: UsersIcon,
    iconForeground: 'text-teal-500',
    iconBackground: 'bg-teal-50'
  },
  {
    title: 'Events',
    href: '/events',
    description: 'Create, edit, delete events here. Volunteers will then be able to view posted events on their dashboard',
    icon: CalendarIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50'
  },
  {
    title: 'Admin Resources',
    href: '/documents',
    description: 'Add and view any additional external links admin may use as resources',
    icon: DocumentDuplicateIcon,
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50'
  },
  {
    title: 'Announcements',
    href: '/announcements',
    description: 'Post announcements for volunteers to view',
    icon: SpeakerphoneIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50'
  }
]

const pages = [{ name: 'Dashboard', href: '/admindash', current: true }]

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

export const AdminDashboard = (props) => {
  const { authUser, token } = props
  const [sidebarOpen, setSidebarOpen] = useState(false)
  console.log(authUser)

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
          <div className='py-8'>
            <div className='pb-8 md:px-0'>
              <h1 className='text-3xl font-semibold text-gray-900'>
                Welcome {authUser.display_name}!
              </h1>
            </div>
            <div className='px-4 sm:px-6 md:px-0 shadow-lg border-solid border-2 border-light-blue-500 rounded-lg'>
              <div className='rounded-lg bg-gray-300 overflow-hidden shadow divide-y divide-gray-400 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px'>
                {actions.map((action, actionIdx) => (
                  <div
                    key={action.title}
                    className={classNames(
                      actionIdx === 0
                        ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
                        : '',
                      actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                      actionIdx === actions.length - 2
                        ? 'sm:rounded-bl-lg'
                        : '',
                      actionIdx === actions.length - 1
                        ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
                        : '',
                      'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
                    )}
                  >
                    <div>
                      <span
                        className={classNames(
                          action.iconBackground,
                          action.iconForeground,
                          'rounded-lg inline-flex p-3 ring-4 ring-white'
                        )}
                      >
                        <action.icon className='h-6 w-6' aria-hidden='false' />
                      </span>
                    </div>
                    <div className='mt-8'>
                      <h3 className='text-lg font-medium'>
                        <a href={action.href} className='focus:outline-none'>
                          <span
                            className='absolute inset-0'
                            aria-hidden='true'
                          />
                          {action.title}
                        </a>
                      </h3>
                      <p className='mt-2 text-sm font-semibold text-gray-700'>
                        {action.description}
                      </p>
                    </div>
                    <span
                      className='pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400'
                      aria-hidden='true'
                    >
                      <svg
                        className='h-6 w-6'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z' />
                      </svg>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
