import "./App.css";
import { AdminDashboard } from "./components/admin/AdminDashboard";
import { AdminLogin } from "./components/admin/AdminLogin";
import { VolunteerList } from "./components/admin/VolunteerList";
import { VolunteerDetails } from "./components/admin/VolunteerDetails";
import { EventsList } from "./components/admin/EventsList";
import { EventDetail } from "./components/admin/EventDetail";
import { DocumentList } from "./components/admin/DocumentList";
import { Registration } from "./components/Registration";
import { CreateAnnouncements } from "./components/admin/CreateAnnouncements";
import { VolunteerDashboard } from "./components/volunteer/VolunteerDashboard";
import { VolunteerProfile } from "./components/volunteer/VolunteerProfile";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={AdminLogin} />
          <Route path="/registration" component={Registration} />
          <Route exact path="/admindash" component={AdminDashboard} />
          <Route exact path="/events" component={EventsList} />
          <Route path="/events/:id" component={EventDetail} />
          <Route exact path="/volunteers" component={VolunteerList} />
          <Route path="/volunteers/:id" component={VolunteerDetails} />
          <Route path="/documents" component={DocumentList} />
          <Route path="/announcements" component={CreateAnnouncements} />
          <Route exact path="/volunteerdash" component={VolunteerDashboard} />
          <Route exact path="/profile" component={VolunteerProfile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
