import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import landingPage from "./pages/landingPage";
import login from "./pages/login";
import newCharacter from "./pages/newCharacter";
import TopNav from "./components/TopNav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="" component={} />
        <Route exact path="" component={} />
        <Route exact path="" component={} />
        <Route component={} />
      </Switch>
    </div>
  </Router>
);

export default App;
