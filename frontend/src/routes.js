import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
//import Create from "./Create";
import Messages from "./pages/messages";
import ShowMessages from "./pages/showMessages";
import SigninPage from "./pages/signIn";
import RegisterPage from "./pages/register";
import PromosPage from "./pages/promos";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        {/*<Route path="/create" exact component={Create} />*/}
        <Route path="/messages" exact component={Messages} />
        <Route path="/showmessages" exact component={ShowMessages} />
        <Route path="/signin" exact component={SigninPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/promos" exact component={PromosPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
