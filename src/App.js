import './App.css'
import { useLocalStorageState } from 'use-local-storage-state'
import { AdminDashboard } from './components/admin/AdminDashboard'
import { AdminLogin } from './components/admin/AdminLogin'
import { VolunteerList } from './components/admin/VolunteerList'
import { VolunteerDetails } from './components/admin/VolunteerDetails'
import { EventsList } from './components/admin/EventsList'
import { EventDetail } from './components/admin/EventDetail'
import { EventForm } from './components/admin/EventForm'
import { DocumentList } from './components/admin/DocumentList'
import { Registration } from './components/Registration'
import { CreateAnnouncements } from './components/admin/CreateAnnouncements'
import { VolunteerDashboard } from './components/volunteer/VolunteerDashboard'
import { VolunteerProfile } from './components/volunteer/VolunteerProfile'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'tailwindcss/tailwind.css'
import { AdminLogout } from './components/admin/AdminLogout'
import { VolunteerLogin } from './components/volunteer/VolunteerLogin'
import { VolunteerLogout } from './components/volunteer/VolunteerLogout'

function App () {
  const [token, setToken] = useLocalStorageState('token', '')
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route
            exact path='/'
            component={() => (
              <AdminLogin
                setToken={setToken}
              />
            )}
          />
          <Route
            exact path='/admin/logout'
            component={() => (
              <AdminLogout
                token={token}
                setToken={setToken}
              />
            )}
          />
          <Route
            exact path='/dreamcenter/login'
            component={() => (
              <VolunteerLogin
                setToken={setToken}
              />
            )}
          />
          <Route
            exact path='/dreamcenter/logout'
            component={() => (
              <VolunteerLogout
                token={token}
                setToken={setToken}
              />
            )}
          />
          <Route path='/registration' component={Registration} />
          <Route exact path='/admindash' component={AdminDashboard} />
          <Route exact path='/events' component={EventsList} />
          <Route path='/events/eventform' component={EventForm} />
          <Route path='/events/:id' component={EventDetail} />
          <Route exact path='/volunteers' component={VolunteerList} />
          <Route path='/volunteers/:id' component={VolunteerDetails} />
          <Route path='/documents' component={DocumentList} />
          <Route path='/announcements' component={CreateAnnouncements} />
          <Route exact path='/dreamcenter/volunteerdash' component={VolunteerDashboard} />
          <Route exact path='/dreamcenter/profile' component={VolunteerProfile} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
