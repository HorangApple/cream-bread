import React from "react";
import { Route, Switch } from "react-router-dom";
import { GetToC } from "components/organisms";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" />
      <Route path="/GetToC" component={GetToC} />
    </Switch>
  );
};

export default Routes;
