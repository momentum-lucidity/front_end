import React, { useState } from 'react'
import Avatar from 'react-avatar'

export const ScheduledVolunteer = (props) => {
  const {
    deleteSlot,
    selectSlot,
    slotId,
    user,
    date,
    startTime,
    endTime,
    text,
  } = props
  const [expanded, setExpanded] = useState(false)

  const handleEdit = (e) => {
    setExpanded(!expanded)
  }

  return (
    <div
      key={slotId}
      onClick={() => selectSlot(slotId)}
      className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
    >
      <div className="flex-shrink-0">
        <Avatar name={user} size="40" round />
      </div>
      <div className="flex-1 min-w-0">
        <div>
          <p className="text-sm font-medium text-gray-900">
            Scheduled Volunteer:{user}
          </p>
          <p className="text-sm text-gray-500 truncate">Date: {date}</p>
          <p className="text-sm text-gray-500 truncate">
            Start Time: {startTime}
          </p>
          <p className="text-sm text-gray-500 truncate">End Time: {endTime}</p>
          <p className="text-sm text-gray-500 truncate">Role/Duties: {text}</p>
          <div className="px-6 py-2 whitespace-nowrap text-right text-sm font-medium">
            <button
              type="button"
              value={slotId}
              className="text-indigo-600 hover:text-indigo-900"
              aria-label="more options"
              onClick={handleEdit}
            >
              Edit
            </button>
          </div>
          <div className="px-6 py-2 whitespace-nowrap text-right text-sm font-medium">
            <button
              type="button"
              className="text-indigo-600 hover:text-indigo-900"
              onClick={deleteSlot}
            >
              Delete
            </button>
          </div>
          <div>{expanded && props.children}</div>
        </div>
      </div>
    </div>
  )
}
