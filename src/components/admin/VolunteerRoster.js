import { VolunteerSlotEdit } from "./VolunteerSlotEdit";
import Avatar from "react-avatar";
import { useState } from "react";
import { TrashIcon, PencilIcon } from "@heroicons/react/outline";
import moment from "moment";

export const VolunteerRoster = (props) => {
  const [isActive, setIsActive] = useState(false);
  const {
    selectedSlotID,
    setSelectedSlotID,
    handleDelete,
    expand,
    token,
    slotText,
    setSlotText,
    volStart,
    setVolEnd,
    setVolStart,
    date,
    volEnd,
    setDate,
    eventID,
    setExpand,
    errors,
    setErrors,
    fetchedAllSlots,
    slot,
    setAllVSlots,
    eventDetails
  } = props;

  return (
    <div
      key={slot.slotpk}
      onClickCapture={() => setSelectedSlotID(slot.slotpk)}
      className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
    >
      <div className="flex-shrink-0">
        <Avatar name={slot.user} size="40" round />
      </div>
      <div className="flex-1 min-w-0">
        <div>
          <p className="text-sm font-medium text-gray-900">
            <b>Scheduled Volunteer:</b> {slot.user}
          </p>
          <p className="text-sm text-gray-500 truncate">
            <b> Date:</b> {moment(slot.date).format("LL")}
          </p>
          <p className="text-sm text-gray-500 truncate">
            <b> Start Time: </b> {slot.starttime}
          </p>
          <p className="text-sm text-gray-500 truncate">
            <b>End Time: </b> {slot.endtime}
          </p>
          <p className="text-sm text-gray-500 truncate">
            <b>Role/Duties: </b> {slot.vslot_text}
          </p>
          <div
            className="px-6 py-2 whitespace-nowrap text-right text-sm font-medium"
            onClickCapture={() => setErrors()}
          >
            <button
              type="button"
              value={slot.slotpk}
              className="inline-flex items-center px-2 py-1.5 border border-indigo-100 rounded-md shadow-sm text-sm font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-200"
              aria-label="more options"
              onClick={() => setIsActive(!isActive)}
            >
              <PencilIcon
                className="-ml-1 mr-2 h-5 w-5 text-indigo-700"
                aria-hidden="true"
              />
              Edit
            </button>
          </div>
          <div className="px-6 py-2 whitespace-nowrap text-right text-sm font-medium">
            <button
              type="button"
              className="inline-flex items-center px-2 py-1.5 border border-indigo-100 rounded-md shadow-sm text-sm font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              onClick={handleDelete}
            >
              <TrashIcon
                className="-ml-1 mr-2 h-5 w-5 text-indigo-700"
                aria-hidden="true"
              />
              Delete
            </button>
          </div>
          <div>
            {isActive && (
              <VolunteerSlotEdit
                token={token}
                slot={slot.slotpk}
                selectedSlotID={selectedSlotID}
                slotText={slotText}
                setSlotText={setSlotText}
                volStart={volStart}
                setVolStart={setVolStart}
                volEnd={volEnd}
                setVolEnd={setVolEnd}
                date={date}
                setDate={setDate}
                eventID={eventID}
                expand={expand}
                setExpand={setExpand}
                errors={errors}
                setErrors={setErrors}
                fetchedAllSlots={fetchedAllSlots}
                isActive={isActive}
                setIsActive={setIsActive}
                setAllVSlots={setAllVSlots}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
