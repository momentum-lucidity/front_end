import { VolunteerSlotEdit } from "./VolunteerSlotEdit";
import Avatar from "react-avatar";
import { useState } from "react";

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
    setAllVSlots
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
            Scheduled Volunteer:{slot.user}
          </p>
          <p className="text-sm text-gray-500 truncate">Date: {slot.date}</p>
          <p className="text-sm text-gray-500 truncate">
            Start Time: {slot.starttime}
          </p>
          <p className="text-sm text-gray-500 truncate">
            End Time: {slot.endtime}
          </p>
          <p className="text-sm text-gray-500 truncate">
            Role/Duties: {slot.vslot_text}
          </p>
          <div className="px-6 py-2 whitespace-nowrap text-right text-sm font-medium">
            <button
              type="button"
              value={slot.slotpk}
              className="text-indigo-600 hover:text-indigo-900"
              aria-label="more options"
              onClick={() => setIsActive(!isActive)}
            >
              Edit
            </button>
          </div>
          <div className="px-6 py-2 whitespace-nowrap text-right text-sm font-medium">
            <button
              type="button"
              className="text-indigo-600 hover:text-indigo-900"
              onClick={handleDelete}
            >
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
