import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { DotsVerticalIcon } from '@heroicons/react/solid'
import { deleteUser } from '../../api'
import { Link, useHistory } from 'react-router-dom'

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

export const ProfileHeader = (props) => {
  const { userDetails, setUserDetails, token, id } = props
  const history = useHistory()

  const handleDelete = async () => {
    const success = await deleteUser(token, id)
    if (success) history.push('/volunteers')
  }

  return (
    <div className='mt-2 items-center'>
      <div className='sm:flex sm:justify-between sm:items-baseline'>
        <div className='sm:w-0 sm:flex-1'>
          <h1 id='message-heading' className='text-2xl font-semibold text-gray-900'>
            {userDetails.legal_name}
          </h1>
          <p className='mt-1 text-med text-gray-700 overflow-hidden overflow-ellipsis'>Volunteer Profile</p>
        </div>

        <div className='mt-4 flex items-center justify-between sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start'>
          <span className='inline-flex items-center px-4 rounded-full text-sm font-medium text-gray-600'>
            Options
          </span>
          <Menu as='div' className='ml-3 relative inline-block text-left'>
            <div>
              <Menu.Button className='-my-2 p-2 rounded-full bg-white flex items-center text-indigo-700 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500'>
                <span className='sr-only'>Open options</span>
                <DotsVerticalIcon className='h-12 w-5' aria-hidden='true' />

              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={{
                          pathname: `/volunteers/edit/${id}/`,
                          state: { userDetails: userDetails }
                        }}
                      >
                        <div className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'flex justify-between px-4 py-2 text-sm'
                        )}
                        >
                          <span>Edit</span>
                        </div>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type='button'
                        onClick={handleDelete}
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'flex justify-between px-4 py-2 text-sm'
                        )}
                      >
                        <span>Delete</span>
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={{
                          pathname: '/volunteers'
                        }}
                      >
                        <div className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'flex justify-between px-4 py-2 text-sm'
                        )}
                        >
                          <span>All Volunteers</span>
                        </div>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  )
}
