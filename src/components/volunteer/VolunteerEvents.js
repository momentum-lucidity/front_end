import { useState, useEffect } from "react";

import { getEventsList } from "../../api.js";

export const VolunteerEvents = () => {
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    getEventsList().then((data) => setAllEvents(data));
  }, []);

  return (
    <>
      <main className="flex-1 relative overflow-y-auto focus:outline-none">
        <div className="py-6">
          <div className="px-4 sm:px-6 md:px-0">
            <h1 className="text-2xl font-semibold text-gray-900">
              Upcoming Events
            </h1>
          </div>
          <div className="px-4 sm:px-6 md:px-0">
            <ul className="divide-y divide-gray-200">
              {allEvents.map((event, idx) => (
                <li
                  key={event.eventpk}
                  className="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
                >
                  <div className="flex justify-between space-x-3">
                    <div className="min-w-0 flex-1">
                      <a
                        href={`/events/${event.eventpk}`}
                        className="block focus:outline-none"
                      >
                        eventpk {event.eventpk}
                        <span className="absolute inset-0" aria-hidden="true" />
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {event.event_header}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {event.date}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {event.time}
                        </p>
                        <p className="line-clamp-2 text-sm text-gray-600">
                          {event.location}
                        </p>
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800">
                          Volunteers Needed
                        </span>
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
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
            {/* /End replace */}
          </div>
        </div>
      </main>
    </>
  );
};
