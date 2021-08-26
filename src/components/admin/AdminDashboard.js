import { Fragment, useState, Menu } from 'react'
import Avatar from 'react-avatar'
import Logo from '../images/1x/logo.png'
import { ChevronRightIcon, CalendarIcon, SpeakerphoneIcon, FolderIcon, HomeIcon, InboxIcon, MenuAlt2Icon, UsersIcon, XIcon, DocumentDuplicateIcon } from '@heroicons/react/outline'
import { Dialog, Transition } from '@headlessui/react'
import { Redirect } from 'react-router'
import { AdminSideBar } from './AdminSideBar'
import { AdminBreadcrumbs } from './AdminBreadcrumbs'

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
  { name: 'Admin Resources', href: '/documents', icon: InboxIcon, current: false }
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
    iconForeground: 'text-pink-700',
    iconBackground: 'bg-pink-50'
  },
  {
    title: 'Events',
    href: '/events',
    description: 'Create, edit, delete events here. Volunteers will then be able to view posted events on their dashboard',
    icon: CalendarIcon,
    iconForeground: 'text-blue-700',
    iconBackground: 'bg-blue-50'
  },
  {
    title: 'Admin Resources',
    href: '/documents',
    description: 'Add and view any additional external links admin may use as resources',
    icon: DocumentDuplicateIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50'
  },
  {
    title: 'Announcements',
    href: '/announcements',
    description: 'Post announcements for volunteers to view',
    icon: SpeakerphoneIcon,
    iconForeground: 'text-green-700',
    iconBackground: 'bg-green-50'
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

  if (authUser.user_status === 'volunteer') {
    return <Redirect to='/dreamcenter/volunteerdash' />
  }

  return (
    <>
      <div className='h-screen bg-gray-50 overflow-hidden flex'>
        <AdminSideBar navigation={navigation} userNavigation={userNavigation} />

        <main className='flex-1 relative overflow-y-auto focus:outline-none'>

          <div className=' px-8 py-8'>
            <div className='pb-8 mt-8 md:px-0'>
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

    </>
  )
}
