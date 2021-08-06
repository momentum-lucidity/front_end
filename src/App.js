import './App.css';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { VolunteerList } from './components/admin/VolunteerList';
import { EventsList } from './components/EventsList';
import { DocumentList } from './components/admin/DocumentList';
import { CreateAnnouncements } from './components/admin/CreateAnnouncements';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

function App () {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={AdminDashboard} />
          <Route path='/volunteers' component={VolunteerList} />
          <Route path='/events' component={EventsList} />
          <Route path='/documents' component={DocumentList} />
          <Route path='/announcements' component={CreateAnnouncements} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
