import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Avatar from 'react-avatar'
import DCLogo from '../images/dclogo.svg'
import DCBanner from '../images/dreambanner.png'

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

export const VolunteerHeader = (props) => {
  const { authUser } = props
  return (
    <Disclosure as='nav' className='bg-white shadow'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex flex items-center'>
                  <img
                    className='block lg:hidden h-8 w-auto'
                    src={DCBanner}
                    alt='Dream Big'
                  />
                  <img
                    className='hidden lg:block h-full w-full'
                    src={DCBanner}
                    alt='Workflow'
                  />
                </div>
                <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                  <a
                    href='/dreamcenter/profile'
                    className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-indigo-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                  >
                    Profile
                  </a>
                  <a
                    href='https://docs.google.com/document/d/11V1bi6IcLS8H2TBtBzN9H_sc2mc76YBJ/edit'
                    target='_blank'
                    rel='noreferrer noopener'
                    className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-indigo-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                  >
                    Handbook
                  </a>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <Menu as='div' className='ml-3 relative'>
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className='bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                          <span className='sr-only'>Open user menu</span>
                          <span className='inline-flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500'>
                            <span className='font-medium leading-none text-white' />
                            {/* <Avatar name={authUser.legal_name} size='40' round /> */}
                          </span>
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                      >
                        <Menu.Items
                          static
                          className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                        >
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href='/dreamcenter/profile'
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href='/dreamcenter/logout'
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='pt-2 pb-4 space-y-1'>
              <a
                href='#'
                className='bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
              >
                Dashboard
              </a>
              <a
                href='/dreamcenter/volunteerdash'
                className='border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
              >
                Team
              </a>
              <a
                href='#'
                className='border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
              >
                Projects
              </a>
              <a
                href='#'
                className='border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
              >
                Calendar
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
