import React from 'react'
import {
  CashIcon,
  HomeIcon,
  CalendarIcon,
  UsersIcon
} from '@heroicons/react/solid'
import classNames from 'classnames'

const actions = [
  {
    title: 'Volunteers',
    href: '/volunteers',
    icon: UsersIcon,
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50'
  },
  {
    title: 'Events',
    href: '/events',
    icon: CalendarIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50'
  },
  {
    title: 'Documents',
    href: '/documents',
    icon: UsersIcon,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50'
  },
  {
    title: 'Announcements',
    href: '/announcements',
    icon: CashIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50'
  }
]

const pages = [
  { name: 'Dashboard', href: '/admindash', current: true }
]

export const AdminDashboard = () => {
  return (
    <>
      <nav className='bg-white border-b border-gray-200 flex' aria-label='Breadcrumb'>
        <ol className='max-w-screen-xl w-full mx-auto px-4 flex space-x-4 sm:px-6 lg:px-8'>
          <li className='flex'>
            <div className='flex items-center'>
              <a href='/' className='text-gray-400 hover:text-gray-500'>
                <HomeIcon className='flex-shrink-0 h-5 w-5' aria-hidden='true' />
                <span className='sr-only'>Home</span>
              </a>
            </div>
          </li>
          {pages.map((page) => (
            <li key={page.name} className='flex'>
              <div className='flex items-center'>
                <svg
                  className='flex-shrink-0 w-6 h-full text-gray-200'
                  viewBox='0 0 24 44'
                  preserveAspectRatio='none'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                >
                  <path d='M.293 0l22 22-22 22h1.414l22-22-22-22H.293z' />
                </svg>
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
      <div className='rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px'>
        {actions.map((action, actionIdx) => (
          <div
            key={action.title}
            className={classNames(
              actionIdx === 0
                ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
                : '',
              actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
              actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
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
                <action.icon className='h-6 w-6' aria-hidden='true' />
              </span>
            </div>
            <div className='mt-8'>
              <h3 className='text-lg font-medium'>
                <a href={action.href} className='focus:outline-none'>
                  {/* Extend touch target to entire panel */}
                  <span className='absolute inset-0' aria-hidden='true' />
                  {action.title}
                </a>
              </h3>
              <p className='mt-2 text-sm text-gray-500'>
                Doloribus dolores nostrum quia qui natus officia quod et
                dolorem. Sit repellendus qui ut at blanditiis et quo et
                molestiae.
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
    </>
  )
}
