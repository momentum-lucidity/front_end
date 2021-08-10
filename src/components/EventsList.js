<<<<<<< HEAD
import { AdminHeader } from "./admin/AdminHeader.js";
import { MockEvent } from "../MockEvent.js";
import { Link } from "react-router-dom";
=======
import { AdminHeader } from './admin/AdminHeader.js'
import { MockEvent } from '../MockEvent.js'
>>>>>>> main

export const EventsList = () => {
  return (
    <>
      <AdminHeader />
<<<<<<< HEAD
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div className="ml-4 mt-2">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Events
            </h3>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
            <Link to="/events/eventform">
              <button
                type="button"
                className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create new event
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ul className="divide-y divide-gray-200">
        {MockEvent.map((event, idx) => (
          <li
            key={event.id}
            className='relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600'
          >
            <div className="flex justify-between space-x-3">
              <div className="min-w-0 flex-1">
                <a
                  href={"/events/${event.id}"}
                  className="block focus:outline-none"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {event.title}
                  </p>
                  <p className='text-sm text-gray-500 truncate'>{event.date}</p>
                  <p className='text-sm text-gray-500 truncate'>{event.time}</p>
                  <p className='line-clamp-2 text-sm text-gray-600'>
                    {event.location}
                  </p>
                  <span className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800'>
                    Volunteers Needed
                  </span>
                  <span className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800'>
                    Volunteers Signed Up
                  </span>
                </a>
              </div>
              {/* <time
                dateTime={event.datetime}
                className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
              >
                {event.time}
              </time> */}
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
