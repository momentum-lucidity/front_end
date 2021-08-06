import "./App.css";
import { AdminDashboard } from "./components/admin/AdminDashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "tailwindcss/tailwind.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/dashboard" component={AdminDashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
