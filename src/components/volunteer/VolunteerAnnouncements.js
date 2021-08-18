import React, { Fragment, useEffect, useState } from "react";
import moment from "moment";
import { orderBy } from "lodash";
import { getAnnouncements } from "../../api";

export const VolunteerAnnouncements = (props) => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    getAnnouncements().then((data) => setAnnouncements(data));
  }, []);

  const sortedAnnouncements = orderBy(
    announcements.results,
    [(object) => new moment(object.date)],
    ["desc"]
  );

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="h-screen overflow-y-auto bg-white overflow-hidden flex">
      <div>
        <h1 className="flex items-left text-med font-medium">
          Current Announcements
        </h1>
        <ul className="divide-y divide-gray-200">
          {sortedAnnouncements.map((announcement, idx) => (
            <li
              key={announcement.alertpk}
              className="py-4 sm:border-t sm:border-gray-200"
            >
              <div className="flex space-x-3">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                      {moment(announcement.date).format("LL")}
                    </p>
                    <h3 className="text-sm font-medium">
                      {announcement.alert_header}
                    </h3>
                    <p className="text-sm text-gray-500">posted by:</p>
                  </div>
                  <p className="items-center text-sm text-gray-500">
                    {announcement.text}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
