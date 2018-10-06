import React from "react";
import { Switch, Route, } from "react-router-dom";
import NewCardPanel from "./components/NewCardPanel/NewCardPanel";
import Dashboard from "./containers/Dashboard/Dashboard";
import NavBar from "./components/NavBar/NavBar";

const App = () => (
  <div className="App">
    <NavBar />
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/newCard" exact component={NewCardPanel} />
    </Switch>
  </div>
);

export default App;
