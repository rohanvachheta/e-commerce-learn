import React, { useState, useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import HomePage from "./page/homePage/homePage.component";
import ShopPage from "./page/shop/shop.component";
import "./App.css";
import HeaderComponent from "./components/header/header.component";
import AboutPage from "./page/about/about.component";
import SignInSignUPComponent from "./page/login/signIn-signup.component";
import { auth } from "./firebase/firebase.utils";

function App(props) {
  const [islogin, setLogin] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setLogin(user);
      // props.history.push("/");
      console.log(user.emailVerified);
    });
  });

  return (
    <div>
      {!!!islogin && (
        <Route exact path="/login" component={SignInSignUPComponent} />
      )}

      {!!islogin && (
        <Switch>
          <HeaderComponent />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route path="/contact" component={AboutPage} />
        </Switch>
      )}
    </div>
  );
}

export default withRouter(App);
