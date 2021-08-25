import React, { useEffect, useState, useRef } from "react";
import { deleteVolunteerSlot, getAllSlots, getEventDetails } from "../../api";
import { VolunteerRoster } from "./VolunteerRoster";
import { useHistory, useParams } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/outline";

export const VolunteerSlotRoster = (props) => {
  const { token, eventDetails, allVSlots, setAllVSlots, setErrors, errors, slotText, setSlotText, setLoading, setEventDetails} =
    props;
  const [selectedSlotID, setSelectedSlotID] = useState("");
  const [volStart, setVolStart] = useState("");
  const [volEnd, setVolEnd] = useState("");
  const [date, setDate] = useState("");
  const [expand, setExpand] = useState(false);
  const fetchedAllSlots = useRef(false);
  const history = useHistory();
  const eventID = eventDetails.eventpk;

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  useEffect(() => {
    if (!fetchedAllSlots.current) {
      getAllSlots(token).then((data) => setAllVSlots(data));
      fetchedAllSlots.current = true;
    }
  }, [allVSlots, token]);

  const filteredSlots = allVSlots.filter((slot) => {
    return slot.event === eventID;
  });

  const handleDelete = async () => {
  const success = await  deleteVolunteerSlot(token, selectedSlotID);
  window.location.reload()
  if (success) {
      getEventDetails(token, eventID).then((data) => {
        setEventDetails(data)
        setLoading(false)});
    }
  };
  const handleClick = (event) => {
    console.log(`slot pk ${event.target.value}`);
    setSelectedSlotID(event.target.value);

    console.log(`selectedslotID ${selectedSlotID}`);
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
      {filteredSlots.map((slot) => (
        <div>
          <VolunteerRoster
            selectedSlotID={selectedSlotID}
            setSelectedSlotID={setSelectedSlotID}
            handleClick={handleClick}
            handleDelete={handleDelete}
            expand={expand}
            token={token}
            slotText={slotText}
            setSlotText={setSlotText}
            volStart={volStart}
            setVolEnd={setVolEnd}
            setVolStart={setVolStart}
            date={date}
            volEnd={volEnd}
            setDate={setDate}
            eventID={eventID}
            setExpand={setExpand}
            errors={errors}
            setErrors={setErrors}
            fetchedAllSlots={fetchedAllSlots}
            slot={slot}
            eventDetails={eventDetails}
            setAllVSlots={setAllVSlots}
          />
        </div>
      ))}
    </div>
  );
};
