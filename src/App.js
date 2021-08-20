import { React, useEffect, useState } from 'react';
import { getAuthUser, getVolunteerList } from './api';
import { useLocalStorageState } from 'use-local-storage-state';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { AdminLogin } from './components/admin/AdminLogin';
import { VolunteerList } from './components/admin/VolunteerList';
import { VolunteerDetails } from './components/admin/VolunteerDetails';
import { EventsList } from './components/admin/EventsList';
import { EventDetail } from './components/admin/EventDetail';
import { EditEvent } from './components/admin/EditEvent';
import { EventForm } from './components/admin/EventForm';
import { DocumentList } from './components/admin/DocumentList';
import { Registration } from './components/admin/Registration';
import { AnnouncementsList } from './components/admin/AnnouncementsList';
import { EditAnnouncement } from './components/admin/EditAnnouncement';
import { EditVolunteer } from './components/admin/EditVolunteer';
import { VolunteerDashboard } from './components/volunteer/VolunteerDashboard';
import { VolunteerProfile } from './components/volunteer/VolunteerProfile';
import { VolunteerRegistration } from './components/volunteer/VolunteerRegistration';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import { AdminLogout } from './components/admin/AdminLogout';
import { VolunteerLogin } from './components/volunteer/VolunteerLogin';
import { VolunteerLogout } from './components/volunteer/VolunteerLogout';
import { VolunteerEventDetails } from './components/volunteer/VolunteerEventDetails';

function App () {
  const [token, setToken] = useLocalStorageState('token', '')
  const [authUser, setAuthUser] = useLocalStorageState('authUser', '')
  const [allVolunteers, setAllVolunteers] = useState([])
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState()


  useEffect(() => {
    getAuthUser(token).then((data) => setAuthUser(data))
  }, [setAuthUser, token])

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route
            exact
            path='/'
            component={() => (
              <AdminLogin
                token={token}
                setToken={setToken}
                authUser={authUser}
                setAuthUser={setAuthUser}
              />
            )}
          />
          <Route
            exact
            path='/admin/logout'
            component={() => (
              <AdminLogout
                token={token}
                setToken={setToken}
                authUser={authUser}
                setAuthUser={setAuthUser}
              />
            )}
          />
          <Route
            exact
            path='/dreamcenter/login'
            component={() => (
              <VolunteerLogin
                token={token}
                setToken={setToken}
                authUser={authUser}
                setAuthUser={setAuthUser}
              />
            )}
          />
          <Route
            exact
            path='/dreamcenter/logout'
            component={() => (
              <VolunteerLogout
                token={token}
                setToken={setToken}
                authUser={authUser}
                setAuthUser={setAuthUser}
              />
            )}
          />
          <Route
            path='/registration'
            component={() => (
              <Registration
                token={token}
                setToken={setToken}
                authUser={authUser}
                setAuthUser={setAuthUser}
                setAllVolunteers={setAllVolunteers}
              />
            )}
          />
          <Route
            exact
            path='/dreamcenter/registration'
            component={() => (
              <VolunteerRegistration
                token={token}
                setToken={setToken}
                authUser={authUser}
                setAuthUser={setAuthUser}
                setAllVolunteers={setAllVolunteers}
              />
            )}
          />
          <Route
            exact
            path='/admindash'
            component={() => (
              <AdminDashboard
                token={token}
                setToken={setToken}
                authUser={authUser}
                setAuthUser={setAuthUser}
              />
            )}
          />
          <Route
            exact
            path='/events'
            component={() => (
              <EventsList
                token={token}
                setToken={setToken}
                authUser={authUser}
                setAuthUser={setAuthUser}
                allVolunteers={allVolunteers}
              />
            )}
          />
          <Route
            exact
            path='/events/eventform'
            component={() => (
              <EventForm
                token={token}
                setToken={setToken}
                authUser={authUser}
                setAuthUser={setAuthUser}
                allVolunteers={allVolunteers}
              />
            )}
          />
          <Route
            exact
            path='/events/:id'
            component={() => (
              <EventDetail
                token={token}
                setToken={setToken}
                authUser={authUser}
                setAuthUser={setAuthUser}
                allVolunteers={allVolunteers}
              />
            )}
          />
          <Route
            exact
            path='/events/edit/:id'
            component={() => (
              <EditEvent
                token={token}
                setToken={setToken}
                authUser={authUser}
                setAuthUser={setAuthUser}
                allVolunteers={setAllVolunteers}
              />
            )}
          />
          <Route
            exact
            path='/volunteers'
            component={() => (
              <VolunteerList
                token={token}
                setToken={setToken}
                authUser={authUser}
                setAuthUser={setAuthUser}
                allVolunteers={allVolunteers}
                setAllVolunteers={setAllVolunteers}
              />
            )}
          />
          <Route
            exact
            path='/volunteers/:id'
            component={() => (
              <VolunteerDetails
                token={token}
                setToken={setToken}
                authUser={authUser}
                setAuthUser={setAuthUser}
                allVolunteers={allVolunteers}
                setAllVolunteers={setAllVolunteers}
              />
            )}
          />
          <Route
            exact
            path='/volunteers/edit/:eventpk'
            component={() => (
              <EditVolunteer
                token={token}
                setToken={setToken}
                authUser={authUser}
                setAuthUser={setAuthUser}
                allVolunteers={setAllVolunteers}
              />
            )}
          />
          <Route
            exact
            path='/documents'
            component={() => (
              <DocumentList
                token={token}
                setToken={setToken}
                authUser={authUser}
                setAuthUser={setAuthUser}
                loading={loading}
                setLoading={setLoading}
                errors={errors}
                setErrors={setErrors}
              />
            )}
          />
          <Route
            exact
            path='/announcements'
            component={() => (
              <AnnouncementsList
                token={token}
                setToken={setToken}
                authUser={authUser}
                setAuthUser={setAuthUser}
                loading={loading}
                setLoading={setLoading}
              />
            )}
          />
          <Route
            exact
            path='/announcements/edit/:id/'
            component={() => (
              <EditAnnouncement
                token={token}
                setToken={setToken}
                authUser={authUser}
                setAuthUser={setAuthUser}
              />
            )}
          />
          <Route
            exact
            path='/dreamcenter/volunteerdash'
            component={() => (
              <VolunteerDashboard
                token={token}
                setToken={setToken}
                authUser={authUser}
                setAuthUser={setAuthUser}
              />
            )}
          />
          <Route
            exact
            path='/dreamcenter/profile'
            component={() => (
              <VolunteerProfile
                token={token}
                setToken={setToken}
                authUser={authUser}
                setAuthUser={setAuthUser}
              />
            )}
          />
          <Route
            exact
            path='/dreamcenter/volunteer/events/:id'
            component={() => (
              <VolunteerEventDetails
                token={token}
                setToken={setToken}
                authUser={authUser}
                setAuthUser={setAuthUser}
                allVolunteers={allVolunteers}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  )
}

export default App
