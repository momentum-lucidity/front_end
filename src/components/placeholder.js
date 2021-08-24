import { Fragment, useState, useEffect, useRef } from 'react'
import { VolunteerHeader } from './VolunteerHeader.js'
import { getEventDetails, getAllSlots } from '../../api'
import { useParams, useHistory, useLocation } from 'react-router-dom'
import { VSlotList } from './VSlotList'
import moment from 'moment'

export const VolunteerEventDetails = (props) => {
  const { token, authUser } = props
  const { id } = useParams()
  const fetchedEventDetails = useRef(false)
  const hasFetchedSlots = useRef(false)
  const [event, setEvent] = useState('')
  const eventID = id
  const location = useLocation()
  const { yourSlots } = location.state
  const [allSlots, setAllSlots] = useState([])
  const [allEventSlots, setAllEventSlots] = useState([allSlots])

  useEffect(() => {
    if (!fetchedEventDetails.current) {
      getEventDetails(token, id).then((data) => {
        setEvent(data)
        fetchedEventDetails.current = true
      })
    }
  }, [token, id])

  useEffect(() => {
    if (!hasFetchedSlots.current) {
      getAllSlots(token)
        .then((data) => setAllSlots(data))
      hasFetchedSlots.current = true
    }
  })

  const eventSpecificSlots = allEventSlots.filter(slot => {
    return (slot.event === eventID)
  })
