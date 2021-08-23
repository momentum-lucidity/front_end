import React, { useEffect, useState, useRef } from 'react'
import { deleteVolunteerSlot, getAllSlots } from '../../api'
import Avatar from 'react-avatar'
import { ScheduledVolunteer } from './ScheduledVolunteer'
import { useHistory } from 'react-router-dom'
import { VolunteerSlotEdit } from './VolunteerSlotEdit'

export const VolunteerSlotRoster = (props) => {
  const { token, eventDetails, allVSlots, setAllVSlots, setErrors, errors } =
    props
  const [selectedSlotID, setSelectedSlotID] = useState('')
  const [slotText, setSlotText] = useState('')
  const [volStart, setVolStart] = useState('')
  const [volEnd, setVolEnd] = useState('')
  const [date, setDate] = useState('')
  const [expand, setExpand] = useState(false)
  const fetchedAllSlots = useRef(false)
  const history = useHistory()
  const eventID = eventDetails.eventpk

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  useEffect(() => {
    if (!fetchedAllSlots.current) {
      getAllSlots(token).then((data) => setAllVSlots(data))
      fetchedAllSlots.current = true
    }
  }, [allVSlots, token])

  const filteredSlots = allVSlots.filter((slot) => {
    return slot.event === eventID
  })

  const deleteSlot = async () => {
    const success = await deleteVolunteerSlot(token, selectedSlotID)
    if (success) {
      getAllSlots().then((data) => setAllVSlots(data))
      history.push(`/events/${eventID}`)
    }
  }
  const selectSlot = (event) => {
    console.log(`slot pk ${event.target.value}`)
    setSelectedSlotID(event.target.value)
    setExpand(!expand)
    console.log(`selectedslotID ${selectedSlotID}`)
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
      {filteredSlots.map((slot) => (
        <ScheduledVolunteer
          selectSlot={(event) => selectSlot}
          deleteSlot={(event) => deleteSlot}
          slotId={slot.slotpk}
          user={slot.user}
          date={slot.date}
          startTime={slot.starttime}
          endTime={slot.endtime}
          text={slot.vslot_text}
        >
          <VolunteerSlotEdit
            token={token}
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
          />
        </ScheduledVolunteer>
      ))}
    </div>
  )
}
