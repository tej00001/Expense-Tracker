import React from "react";
import SinupPage from "./components/CredentialsPage/Sinup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./components/CredentialsPage/login";
import AfterLogin from "./components/AfterLogin";
import FirstPageDetails from "./components/FirstPage/FIrstPage";
import CompleteProfile from "./components/CompleteProfilePage/CompleteProfile";
import AuthContext, {
  AuthContextProvider,
} from "./components/Context/Auth-Context";
import { useContext } from "react";
import VerifyDetails from "./components/verifyPage";
import { Redirect } from "react-router-dom";
import AddExpenseDetails from "./components/AddExpenses";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Router>
      <FirstPageDetails />
      <Switch>
        <Route exact path="/Home">
          <Redirect to="/loginDetails" />
        </Route>
        <Route exact path="/SignupDetails">
          <SinupPage />
        </Route>
        <Route path="/loginDetails">
          <LoginPage />
        </Route>
        <Route path="/verify-email">
          <VerifyDetails />
        </Route>
        <Route exact path="/showHandler">
          <AfterLogin />
        </Route>
        <Route path="/AddExpenseDetails">
          <AddExpenseDetails />
        </Route>
        <Route exact path="/completeProfile">
          <CompleteProfile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
