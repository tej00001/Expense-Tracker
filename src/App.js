import React from "react";
import SinupPage from "./components/Sinup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./components/login";
import AfterLogin from "./components/AfterLogin";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SinupPage />
        </Route>
        <Route path="/loginDetails">
          <LoginPage />
        </Route>
        <Route exact path="/showHandler">
          <AfterLogin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
