import { AdminHeader } from "./AdminHeader.js";
import { Link } from "react-router-dom";

export const EventForm = () => {
  return (
    <>
      <AdminHeader />
      <form className="space-y-8 divide-y divide-gray-200">
        <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Create an Event
            </h3>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="event-name"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Event Name
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="event-name"
                  id="event-name"
                  autoComplete="given-name"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="event-location"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Location
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="event-location"
                  id="event-location"
                  autoComplete="family-name"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="event-start-time"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Start Time
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <select
                  id="event-start-time"
                  name="event-start-time"
                  autoComplete="event-start-time"
                  className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                >
                  <option>12:00</option>
                  <option>1:00</option>
                  <option>2:00</option>
                </select>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="event-end-time"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                End Time
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <select
                  id="event-end-time"
                  name="event-end-time"
                  autoComplete="event-end-time"
                  className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                >
                  <option>12:00</option>
                  <option>1:00</option>
                  <option>2:00</option>
                </select>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="event-details"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Details
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <textarea
                  type="text"
                  name="event-details"
                  id="event-details"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="add-volunteers"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Add Volunteers
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="add-volunteers"
                  id="add-volunteers"
                  autoComplete="postal-code"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="pt-5">
              <div className="flex justify-end">
                <Link to="/events">
                  <button
                    type="button"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Cancel
                  </button>
                </Link>
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
