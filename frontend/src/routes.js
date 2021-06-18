import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
//import Create from "./Create";
import messages from "./pages/messages";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        {/*<Route path="/create" exact component={Create} />*/}
        <Route path="/pages/messages" exact component={messages} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
