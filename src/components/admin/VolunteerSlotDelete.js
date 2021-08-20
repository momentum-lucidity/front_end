import React, { useState } from 'react'
import { deleteVolunteerSlot } from '../../api'
import { useHistory } from 'react-router'

export const VolunteerSlotDelete = (props) => {
  const { token, eventID, selectedSlotPK } = props
  const history = useHistory()
  console.log(`this is the selectedSlotPK - ${selectedSlotPK}`)

  const handleDelete = async () => {
    const success = await deleteVolunteerSlot(token, selectedSlotPK)
    if (success) history.push(`/events/${eventID}`)
  }

  return (
    <div>
      <a
        href='#'
        className='font-medium text-indigo-600 hover:text-indigo-500'
        onClickCapture={handleDelete}
      >Delete
      </a>
    </div>
  )
}
