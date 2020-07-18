import React from "react";
import { Switch, Route } from "react-router-dom";

import Plans from "../pages/Plans";
import Bill from "../pages/Bill";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Plans} />
    <Route path="/bill" component={Bill} />
  </Switch>
);

export default Routes;
