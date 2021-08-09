import { AdminHeader } from "./AdminHeader.js";
import { MockEventDetail } from "../../MockEventDetail";

export const EventDetail = () => {
  return (
    <>
      <AdminHeader />
      {MockEventDetail.map((item, idx) => (
        <div
          key={item.id}
          className="bg-white shadow overflow-hidden sm:rounded-lg"
        >
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500">
              {item.description} {item.type}
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">When</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {item.date} {item.time}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Where</dt>
                <dd className="mt-1 text-sm text-gray-900">{item.location}</dd>
              </div>
              {/* <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  margotfoster@example.com
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Salary expectation
                </dt>
                <dd className="mt-1 text-sm text-gray-900">$120,000</dd>
              </div> */}
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">
                  Volunteer Duties
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                  incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                  consequat sint. Sit id mollit nulla mollit nostrud in ea
                  officia proident. Irure nostrud pariatur mollit ad adipisicing
                  reprehenderit deserunt qui eu.
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div
                  className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <div className="flex-shrink-0">
                    {/* <img
                      className="h-10 w-10 rounded-full"
                      src={item.imageUrl}
                      alt=""
                    /> */}
                  </div>
                  <div className="flex-1 min-w-0">
                      <span className="absolute inset-0" aria-hidden="true" />
                      <p className="text-sm font-medium text-gray-900">
                        Volunteer Slot
                      </p>
                      <p className="text-sm font-medium text-gray-500">
                        {item.volunteer_slots[0].volunteer_name}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {item.volunteer_slots[0].start_time}-{item.volunteer_slots[0].end_time}
                      </p>
                  </div>
                </div>
              </div>
            </dl>
          </div>
        </div>
      ))}
    </>
  );
};
