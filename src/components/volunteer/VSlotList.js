import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { editVSlot, getAllSlots, registerVSlot } from '../../api'

export const VSlotList = (props) => {
  const { authUser, token, allSlots, setAllSlots, eventID } = props
  const [selectedSlot, setSelectedSlot] = useState([])
  const selectedSlotID = selectedSlot.slotpk
  const slotText = selectedSlot.vslot_text
  const volStart = selectedSlot.starttime
  const volEnd = selectedSlot.endtime
  const date = selectedSlot.date
  const user = authUser.id
  const history = useHistory()

  const filteredSlots = allSlots.filter(slot => {
    return (slot.event === eventID)
  })

  const handleWithDraw = async () => {
    const success = await editVSlot(eventID, selectedSlotID, token, slotText, volStart, volEnd, date)
    if (success) {
      getAllSlots(token)
        .then((data) => setAllSlots(data))
      history.push(`/dreamcenter/volunteer/events/${eventID}/`)
    }
  }

  const handleSignUp = async () => {
    const success = await registerVSlot(user, eventID, selectedSlotID, token, slotText, volStart, volEnd, date)
    if (success) {
      getAllSlots(token)
        .then((data) => setAllSlots(data))
      history.push(`/dreamcenter/volunteer/events/${eventID}/`)
    }
  }

  console.log(`selectedSlotID ${selectedSlotID}`)
  console.log(`slotText ${slotText}`)
  console.log(`volStart ${volStart}`)
  console.log(`volEnd ${volEnd}`)
  console.log(`date ${date}`)
  console.log(`user ${user}`)

  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-1'>

      {filteredSlots.map((eSlot) => (
        <div
          key={eSlot.slotpk}
          onClickCapture={() => setSelectedSlot(eSlot)}
          className='max-w-3xl relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3'
        >
          <div className='flex-1 min-w-0'>
            <div>
              <p className='text-sm font-medium text-gray-900'>Scheduled Volunteer:{eSlot.user}</p>
              <p className='text-sm text-gray-500 truncate'>Date: {eSlot.date}</p>
              <p className='text-sm text-gray-500 truncate'>Start Time: {eSlot.starttime}</p>
              <p className='text-sm text-gray-500 truncate'>End Time: {eSlot.endtime}</p>
              <p className='text-sm text-gray-500 truncate'>Role/Duties: {eSlot.vslot_text}</p>

              {eSlot.user[0] && eSlot.user[0]
                ? (eSlot.user[0] === authUser.id
                    ? <button
                        type='button'
                        className='border rounded-md bg-indigo-700 text-s text-gray-50 hover:bg-indigo-900 py-4 px-4'
                        onClick={handleWithDraw}
                      >WithDraw
                      </button>
                    : <p className='border rounded-md bg-gray-200 text-s text-gray-900 py-4 px-4'>Slot filled</p>)
                : (<button
                    type='button'
                    className='border rounded-md bg-indigo-700 text-s text-gray-50 hover:bg-indigo-900 py-4 px-4'
                    onClick={handleSignUp}
                   >SignUp
                </button>)}

            </div>
          </div>
        </div>
      ))}

    </div>
  )
}
