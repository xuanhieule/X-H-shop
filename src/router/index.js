
import { Switch } from "react-router-dom";
import { Redirect, Route } from "react-router";
import Home from "../feature/components/home";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* <Redirect from="/" to="/" exact /> */}
      {/* <Route component={NotFound} /> */}
    </Switch>
  );
}

export default Routes;
