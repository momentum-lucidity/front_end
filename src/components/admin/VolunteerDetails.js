import React, { useState, useEffect } from 'react'
import { HomeIcon } from '@heroicons/react/solid'
import { AdminHeader } from './AdminHeader'
import { MockVolunteerDetail } from '../../MockVolunteerDetail'
import { useParams } from 'react-router'

export const VolunteerDetails = () => {
  const { id } = useParams()
  console.log(MockVolunteerDetail.id)
  const pages = [
    { name: 'Dashboard', href: '/admindash', current: false },
    { name: 'All Volunteers', href: '/volunteers', current: false },
    { name: 'Margot Foster Profile', href: `/volunteers/${id}`, current: true }
  ]
  return (
    <>
      <AdminHeader />
      <nav className='bg-white border-b border-gray-200 flex' aria-label='Breadcrumb'>
        <ol className='max-w-screen-xl w-full mx-auto px-4 flex space-x-4 sm:px-6 lg:px-8'>
          <li className='flex'>
            <div className='flex items-center'>
              <a href='#' className='text-gray-400 hover:text-gray-500'>
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
      <div>
        <h3 className='text-lg leading-6 font-medium text-gray-900'>Volunteer Profile</h3>
      </div>
      <div className='mt-5 border-t border-gray-200'>
        <dl className='divide-y divide-gray-200'>
          <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4'>
            <dt className='text-sm font-medium text-gray-500'>Intake Status</dt>
            <dd className='mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              <span className='flex-grow'>Pending</span>
              <span className='ml-4 flex-shrink-0'>
                <button
                  type='button'
                  className='bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4'>
            <dt className='text-sm font-medium text-gray-500'>Preferred Name</dt>
            <dd className='mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              <span className='flex-grow'>Maggie</span>
              <span className='ml-4 flex-shrink-0'>
                <button
                  type='button'
                  className='bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className='py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4'>
            <dt className='text-sm font-medium text-gray-500'>Legal Name</dt>
            <dd className='mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              <span className='flex-grow'>Margot Foster</span>
              <span className='ml-4 flex-shrink-0'>
                <button
                  type='button'
                  className='bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className='py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4'>
            <dt className='text-sm font-medium text-gray-500'>Preferred Pronouns</dt>
            <dd className='mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              <span className='flex-grow'>She/Her</span>
              <span className='ml-4 flex-shrink-0'>
                <button
                  type='button'
                  className='bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className='py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4'>
            <dt className='text-sm font-medium text-gray-500'>Preferred Language</dt>
            <dd className='mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              <span className='flex-grow'>English</span>
              <span className='ml-4 flex-shrink-0'>
                <button
                  type='button'
                  className='bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className='py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4'>
            <dt className='text-sm font-medium text-gray-500'>Email address</dt>
            <dd className='mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              <span className='flex-grow'>margotfoster@example.com</span>
              <span className='ml-4 flex-shrink-0'>
                <button
                  type='button'
                  className='bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className='py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4'>
            <dt className='text-sm font-medium text-gray-500'>Phone</dt>
            <dd className='mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              <span className='flex-grow'>919-555-5555</span>
              <span className='ml-4 flex-shrink-0'>
                <button
                  type='button'
                  className='bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className='py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4'>
            <dt className='text-sm font-medium text-gray-500'>Street Address</dt>
            <dd className='mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              <span className='flex-grow'>123 Main St Apt 402</span>
              <span className='ml-4 flex-shrink-0'>
                <button
                  type='button'
                  className='bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className='py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4'>
            <dt className='text-sm font-medium text-gray-500'>City, State, Zip</dt>
            <dd className='mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              <span className='flex-grow'>Burlington, NC 27377</span>
              <span className='ml-4 flex-shrink-0'>
                <button
                  type='button'
                  className='bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className='py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4'>
            <dt className='text-sm font-medium text-gray-500'>Preferred Event Types</dt>
            <dd className='mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              <span className='flex-grow'>After School Care, Diaper Drives</span>
              <span className='ml-4 flex-shrink-0'>
                <button
                  type='button'
                  className='bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className='py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4'>
            <dt className='text-sm font-medium text-gray-500'>Notes/Availability</dt>
            <dd className='mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              <span className='flex-grow'>
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure
                nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
              </span>
              <span className='ml-4 flex-shrink-0'>
                <button
                  type='button'
                  className='bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </>
  )
}
