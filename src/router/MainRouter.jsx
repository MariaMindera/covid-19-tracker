import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../Pages/Home";
import BrazilPage from "../Pages/Brazil";
import ChinaPage from "../Pages/China";
import GermanyPage from "../Pages/Germany";
import ItalyPage from "../Pages/Italy";
import PortugalPage from "../Pages/Portugal";
import SpainPage from "../Pages/Spain";
import USAPage from "../Pages/USA";
import getState from "../utils/getState";
import "./mainRouter.less";

function MainRouter() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/china">
            <ChinaPage />
          </Route>
          <Route path="/portugal">
            <PortugalPage />
          </Route>
          <Route path="/italy">
            <ItalyPage />
          </Route>
          <Route path="/spain">
            <SpainPage />
          </Route>
          <Route path="/germany">
            <GermanyPage />
          </Route>
          <Route path="/usa">
            <USAPage />
          </Route>
          <Route path="/brazil">
            <BrazilPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default MainRouter;
// -qa.surge.sh
// https://rona-stats.now.sh/
