import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Bundle from './Bundle';
import '../styles/general.css';

import Home from 'bundle-loader?lazy&name=home!../pages/Home';
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
      <header id="header">
				<a href="/">
					<img id="header-logo" src="./public/logo.png" alt="logo" />
				</a>
				<h5 id="header-desc">Homepage for pets</h5>
				<a className="header-navi" href="/explore">
					<h5>Explore</h5>
				</a>
				<a className="header-navi" href="/">
					<h5>Public</h5>
				</a>
			</header>
      <Switch>
        <Route exact path="/" component={ createComponent(Home) } />
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