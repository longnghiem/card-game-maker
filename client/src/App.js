import React from "react";
import { Switch, Route, } from "react-router-dom";
import NewCardPanel from "./components/NewCardPanel/NewCardPanel";

const Dashboard = () => <h1>DASHBOARD</h1>;

const App = () => (
  <div className="App">
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/newCard" exact component={NewCardPanel} />
    </Switch>
  </div>
);

export default App;
