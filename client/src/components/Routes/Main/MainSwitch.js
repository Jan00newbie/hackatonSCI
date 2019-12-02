import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import Main from "./Main";
import Events from "./Events/Events";
import SiteNotFound from "./SiteNotFound";
import Register from "./Register";
import Login from "./Login";

const MainSwitch = () => {
  const location = useLocation();
  return (
    <div className="container">
      <Switch location={location}>
        <Route exact path="/" component={Main} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={SiteNotFound} />
      </Switch>
    </div>
  );
};

export default MainSwitch;
