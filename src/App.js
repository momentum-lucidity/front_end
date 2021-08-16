import { React, useEffect, useState } from 'react'
import { useLocalStorageState } from 'use-local-storage-state'
import { AdminDashboard } from './components/admin/AdminDashboard'
import { AdminLogin } from './components/admin/AdminLogin'
import { VolunteerList } from './components/admin/VolunteerList'
import { VolunteerDetails } from './components/admin/VolunteerDetails'
import { EventsList } from './components/admin/EventsList'
import { EventDetail } from './components/admin/EventDetail'
import { EventForm } from './components/admin/EventForm'
import { DocumentList } from './components/admin/DocumentList'
import { Registration } from './components/admin/Registration'
import { CreateAnnouncements } from './components/admin/CreateAnnouncements'
import { EditVolunteer } from './components/admin/EditVolunteer'
import { VolunteerDashboard } from './components/volunteer/VolunteerDashboard'
import { VolunteerProfile } from './components/volunteer/VolunteerProfile'
import { VolunteerRegistration } from './components/volunteer/VolunteerRegistration'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'tailwindcss/tailwind.css'
import { AdminLogout } from './components/admin/AdminLogout'
import { VolunteerLogin } from './components/volunteer/VolunteerLogin'
import { VolunteerLogout } from './components/volunteer/VolunteerLogout'
import { getUserDetails, getVolunteerList } from './api'

function App () {
  const [token, setToken] = useLocalStorageState('token', '')
  const [allUsers, setAllUsers] = useState('')
  const [user, setUser] = useState('')

  console.log(`this should be the username ${user}`)
  useEffect(() => {
    getVolunteerList()
      .then((data) => setAllUsers(data))
    console.log(allUsers)
  })

  const loggedInUserData = allUsers.filter(people => people.username === { user })
  console.log(`please work ${loggedInUserData}`)
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route
            exact path='/'
            component={() => (
              <AdminLogin
                setToken={setToken}
                user={user}
                setUser={setUser}
              />
            )}
          />
          <Route
            exact path='/admin/logout'
            component={() => (
              <AdminLogout
                token={token}
                setToken={setToken}
                user={user}
                setUser={setUser}
              />
            )}
          />
          <Route
            exact path='/dreamcenter/login'
            component={() => (
              <VolunteerLogin
                setToken={setToken}
                user={user}
                setUser={setUser}
              />
            )}
          />
          <Route
            exact path='/dreamcenter/logout'
            component={() => (
              <VolunteerLogout
                token={token}
                setToken={setToken}
                user={user}
                setUser={setUser}
              />
            )}
          />
          <Route
            path='/registration'
            component={() => (
              <Registration
                setToken={setToken}
                setUser={setUser}
              />
            )}
          />
          <Route
            exact path='/dreamcenter/registration'
            component={() => (
              <VolunteerRegistration
                setToken={setToken}
                setUser={setUser}
              />
            )}
          />
          <Route
            exact path='/admindash'
            component={() => (
              <AdminDashboard
                token={token}
                user={user}
                setUser={setUser}
              />
            )}
          />
          <Route
            exact path='/events'
            component={() => (
              <EventsList
                token={token}
                user={user}
                setUser={setUser}
              />
            )}
          />
          <Route
            exact path='/events/eventform'
            component={() => (
              <EventForm
                token={token}
                user={user}
                setUser={setUser}
              />
            )}
          />
          <Route
            path='/events/:id'
            component={() => (
              <EventDetail
                token={token}
                user={user}
                setUser={setUser}
              />
            )}
          />
          <Route
            exact path='/volunteers'
            component={() => (
              <VolunteerList
                token={token}
                user={user}
                setUser={setUser}
              />
            )}
          />
          <Route
            exact path='/volunteers/:id'
            component={() => (
              <VolunteerDetails
                token={token}
                user={user}
                setUser={setUser}
              />
            )}
          />
          <Route
            exact path='/volunteers/edit/:id'
            component={() => (
              <EditVolunteer
                token={token}
                user={user}
                setUser={setUser}
              />
            )}
          />
          <Route
            exact path='/documents'
            component={() => (
              <DocumentList
                token={token}
                user={user}
                setUser={setUser}
              />
            )}
          />
          <Route
            exact path='/announcements'
            component={() => (
              <CreateAnnouncements
                token={token}
                user={user}
                setUser={setUser}
              />
            )}
          />
          <Route
            exact path='/dreamcenter/volunteerdash'
            component={() => (
              <VolunteerDashboard
                token={token}
                user={user}
                setUser={setUser}
              />
            )}
          />
          <Route
            exact path='/dreamcenter/profile'
            component={() => (
              <VolunteerProfile
                token={token}
                user={user}
                setUser={setUser}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  )
}

export default App
