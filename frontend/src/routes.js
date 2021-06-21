import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
//import Create from "./Create";
import Messages from "./pages/messages";
import ShowMessages from "./pages/showMessages";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        {/*<Route path="/create" exact component={Create} />*/}
        <Route path="/messages" exact component={Messages} />
        <Route path="/showmessages" exact component={ShowMessages} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
