import logo from "./logo.svg";
import "./App.css";
import { AdminDashboard } from "./components/admin/AdminDashboard";
import { Router } from "express";
import { Switch } from "react-router";

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
