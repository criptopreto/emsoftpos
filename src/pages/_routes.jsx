import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SettingsPage from "./settings";
import DashboardPage from "./dashboard";
import PedidosPage from "./pedidos";
import MesasPage from "./mesas";
import DeliveryPage from "./delivery";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/delivery">
          <DeliveryPage />
        </Route>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
        <Route path="/pedidos">
          <PedidosPage />
        </Route>
        <Route path="/mesas">
          <MesasPage />
        </Route>
        <Route path="/settings">
          <SettingsPage />
        </Route>
        <Route path="/">
          <DashboardPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
