import { Fragment, useState, useEffect, useRef } from "react";
import { VolunteerHeader } from "./VolunteerHeader.js";
import { getEventDetails, getAllSlots } from "../../api";
import { useParams, useHistory } from "react-router-dom";

export const VolunteerEventDetails = (props) => {
  const { token, authUser } = props;
  const { id } = useParams();
  const fetchedEventDetails = useRef(false);
  const fetchedAllSlots = useRef(false);
  const [event, setEvent] = useState("");
  const [allVSlots, setAllVSlots] = useState([]);
  const [slotText, setSlotText] = useState("");
  const [amPm, setAmPm] = useState(false);
  const [volStart, setVolStart] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (!fetchedEventDetails.current) {
      getEventDetails(token, id).then((data) => {
        console.log(data);
        setEvent(data);
        fetchedEventDetails.current = true;
      });
    }
  }, [event, token, id]);

  useEffect(() => {
    if (!fetchedAllSlots.current) {
      getAllSlots(token).then((data) => setAllVSlots(data));
      fetchedAllSlots.current = true;
    }
  }, [allVSlots, token]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <VolunteerHeader />
      <div className="h-screen bg-white overflow-hidden flex bg-indigo-600 bg-opacity-5">
        <div className="flex-1 max-w-4xl mx-auto w-0 flex flex-col md:px-8 xl:px-0">
          <main className="flex-1 relative overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="px-4 sm:px-6 md:px-0">
                <h1 className="text-2xl pt-2 pb-4 font-semibold text-gray-900">
                  Full Event Details
                </h1>
              </div>
              <div className="px-4 sm:px-6 md:px-0">
                <div
                  key={event.id}
                  className="bg-white shadow overflow-hidden sm:rounded-lg"
                >
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {event.event_header}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {event.description} {event.type}
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          When
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {event.date} {event.start_time}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Where
                        </dt>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
