import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./page/homePage/homePage.component";
import ShopPage from "./page/shop/shop.component";
import "./App.css";
import HeaderComponent from "./components/header/header.component";
import AboutPage from "./page/about/about.component";

function App() {
  return (
    <div>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/contact" component={AboutPage} />
      </Switch>
    </div>
  );
}

export default App;
