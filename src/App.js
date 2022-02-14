import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Hidden } from "@material-ui/core";
import { Profile } from './pages/Profile'
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PageHeader } from './components/header/PageHeader';
import { SchedulePage } from "./pages/SchedulePage";
import { Dashboard } from './components/Dashboard'
import { PaymentPage } from "./pages/PaymentPage";


import ProtectedRoute from './auth/protected-route'
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history.tsx";

import './App.css'

export default function App() {
  return (
      <Auth0ProviderWithHistory>
        <Router>
          <Hidden smDown>
            <PageHeader />
          </Hidden>
          <Switch>
            <ProtectedRoute exact path="/payment" component={PaymentPage} />
            <ProtectedRoute exact path="/schedule" component={SchedulePage} />
            <Route exact path="/" component={HomePage} />
            <Route path="/home">
              <Redirect to="/" />
            </Route>
            <ProtectedRoute exact path="/profile" component={Profile} />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Router>
       </Auth0ProviderWithHistory>
  );
}