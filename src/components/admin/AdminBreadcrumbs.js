import React, { Fragment } from 'react'
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { Dialog, Menu, Transition } from '@headlessui/react'
import Avatar from 'react-avatar'
export const AdminBreadcrumbs = (props) => {
  const { pages, userNavigation, authUser } = props

  function classNames (...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className='grid-cols-1'>
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
      <div>
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
    </div>
  )
}
