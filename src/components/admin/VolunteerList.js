import React, { useState, useEffect } from 'react'
import { AdminHeader } from './AdminHeader.js'
import { MockVolunteers } from '../../MockVolunteers.js'

export const VolunteerList = () => {
  return (
    <>
      <AdminHeader />
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        {MockVolunteers.map((person, id) => (
          <div
            key={person.id}
            className='relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'
          >
            <div className='flex-1 min-w-0'>
              <a href={`/volunteers/${person.id}`} className='focus:outline-none'>
                <span className='absolute inset-0' aria-hidden='true' />
                <p className='text-sm font-medium text-gray-900'>
                  {person.preferred_name}
                </p>
                <p className='text-sm text-gray-500 truncate'>{person.intake_status}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
