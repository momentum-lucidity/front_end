import './App.css'
import { AdminDashboard } from './components/admin/AdminDashboard'
import { AdminLogin } from './components/admin/AdminLogin'
import { VolunteerList } from './components/admin/VolunteerList'
import { VolunteerDetails } from './components/admin/VolunteerDetails'
import { EventsList } from './components/EventsList'
import { DocumentList } from './components/admin/DocumentList'
import { Registration } from './components/Registration'
import { AdminShell , CreateAnnouncements } from './components/admin/CreateAnnouncements'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'tailwindcss/tailwind.css'

function App () {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={AdminLogin} />
          <Route path='/registration' component={Registration} />
          <Route exact path='/admindash' component={AdminDashboard} />
          <Route exact path='/volunteers' component={VolunteerList} />
          <Route path='/volunteers/:id' component={VolunteerDetails} />
          <Route path='/events' component={EventsList} />
          <Route path='/documents' component={DocumentList} />
          <Route path='/announcements' component={CreateAnnouncements} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
