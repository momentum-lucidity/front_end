import { useEffect, useState, useRef } from "react";
import { getEventsList } from "../../api";
import moment from "moment";
import { orderBy } from "lodash";

export const VolunteerEvents = (props) => {
  const hasFetchedEvents = useRef(false);
  const { token, authUser } = props;
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    if (!hasFetchedEvents.current) {
      getEventsList().then((data) => setAllEvents(data.results));
      console.log(allEvents);
      hasFetchedEvents.current = true;
    }
  }, [allEvents]);

  const sortedEvents = orderBy(
    allEvents,
    [(object) => new moment(object.date)],
    ["desc"]
  );

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="h-screen bg-white overflow-hidden flex">
      <div className="flex-1 max-w-4xl mx-auto w-0 flex flex-col md:px-8 xl:px-0">
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="px-4 sm:px-6 md:px-0">
              <h1 className="text-2xl font-semibold text-gray-900">
                All Upcoming Events
              </h1>
            </div>
            <div className="px-4 sm:px-6 md:px-0 shadow-lg">
              <ul className="divide-y divide-gray-500">
                {sortedEvents &&
                  sortedEvents.map((event, idx) => (
                    <li
                      key={event.eventpk}
                      className="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
                    >
                      <div className="flex justify-between space-x-3">
                        <div className="min-w-0 flex-1">
                          <a
                            href={`volunteer/events/${event.eventpk}`}
                            className="block focus:outline-none"
                          >
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            />
                            <p className="text-sm font-mono font-medium font-semibold text-gray-900 truncate">
                              {event.event_header}
                            </p>
                            <p className="text-sm pb-2 font-mono text-gray-500 truncate">
                              {moment(event.date).format("LL")}
                            </p>
                            <p className="text-sm pb-2 font-mono text-black-500 truncate">
                              {event.description}
                            </p>
                            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800">
                              Volunteers Needed
                            </span>
                            <p className="line-clamp-2 pt-2 text-sm font-mono text-gray-600">
                              Sign up to volunteer here!
                            </p>
                          </a>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
