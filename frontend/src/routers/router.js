import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Bundle from './Bundle';
import '../styles/general.css';
import Header from './Header';

import Home from 'bundle-loader?lazy&name=home!../pages/Home';
import Explore from 'bundle-loader?lazy&name=explore!../pages/Explore';
import Pet from 'bundle-loader?lazy&name=pet!../pages/Pet';
import User from 'bundle-loader?lazy&name=user!../pages/User';
import Moment from 'bundle-loader?lazy&name=moment!../pages/Moment';
import Watch from 'bundle-loader?lazy&name=watch!../pages/Watch';
import Request from 'bundle-loader?lazy&name=request!../pages/Request';
import Terms from 'bundle-loader?lazy&name=terms!../pages/Terms';

const createComponent = (component) => (props) => (
  <Bundle load={ component }>
    {
      (Component) => Component ? <Component { ...props } /> : null
    }
  </Bundle>
);

const getRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ createComponent(Home) } />
				<Route exact path="/explore" component={ createComponent(Explore) } />
				<Route exact path="/pet/:id" component={ createComponent(Pet) } />
				<Route exact path="/user/:id" component={ createComponent(User) } />
				<Route exact path="/moment/:id" component={ createComponent(Moment) } />
				<Route exact path="/watch" component={ createComponent(Watch) } />
				<Route exact path="/request" component={ createComponent(Request) } />
        <Route exact path="/terms" component={ createComponent(Terms) } />
      </Switch>
      <footer id="footer">
        <h6>© 2017-2018 Smilings.me</h6>
        <h6><a href="https://github.com/byn9826/Thousanday-Web" target="__blank">Source Code</a></h6>
        <h6><a href="https://github.com/byn9826/Thousanday-Web/issues" target="__blank">Report</a></h6>
        <h6><a href="http://glyphicons.com" target="__blank">Glyphicons</a></h6>
        <h6><a href="/terms" target="__blank">Terms & Privacy Policy</a></h6>
        <h6><a href="https://github.com/byn9826" target="__blank">About</a></h6>
      </footer>
    </div>
  </Router>
);

export default getRouter;